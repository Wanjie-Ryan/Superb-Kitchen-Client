import React, { useState, useEffect } from "react";
import "./checkoutModal.scss";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";


function Checkout({ isOpen, onClose, selectedItem, token }) {
  // console.log(selectedItem.createdBy.Vendor)

  // const history = useHistory()
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [quantity, setQuantity] = useState();
  const [amount, setAmount] = useState();
  const [vendor, setVendor] = useState([]);
  // console.log(vendor._id)
  const phone = vendor.contact;
  // console.log(phone)

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    if (quantity && selectedItem) {
      const unitPrice = selectedItem.price;
      const totalPrice = quantity * unitPrice;
      setAmount(totalPrice);
    } else {
      setAmount(0);
    }

    if (selectedItem) {
      axios
        .get(
          `http://localhost:3005/api/vendor/auth/singleVendor/${selectedItem.createdBy}`,
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((response) => {
          setVendor(response.data.VendorObj);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            toast.error("Not Authorized");
            navigate("/");
          } else if (err.response.status === 404) {
            toast.error("Vendor not found");
          } else if (err.response.status === 500) {
            toast.error("A problem with our servers, hang on");
          }
        });
    }
  }, [quantity, selectedItem]);

  const [loading, setLoading] = useState(false);
  const [payData, setPayData] = useState();

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!name || !contact || !email || !location || !quantity) {
        toast.error("Please fill the required fields");
        return;
      }

      const customer_details = {
        full_name: name,
        location: location,
        phone_number: contact,
        email: email,
      };

      const products = [
        {
          product_name: selectedItem.name,
          quantity: parseInt(quantity),
          unit_price: parseFloat(selectedItem.price),
        },
      ];

      const Payment_Data = {
        customer_details,
        products,
        amount: {
          currency: "KES",
          delivery_fee: 0.0,
          discount_fee: 0.0,
          total: parseFloat(amount),
        },
        callback_details: {
          notify_customer: true,
          transaction_reference: selectedItem._id,
          callback_url:
            "https://44c7-154-79-248-134.ngrok-free.app/api/chpter/createpayment",
        },
      };

      const response = await axios.post(
        "https://api.chpter.co/v1/initiate/mpesa-payment",
        Payment_Data,
        {
          headers: {
            "Content-Type": "application/json",
            "Api-key":
              "pk_test_d39abf62f0e7f5b39fd55bcd19579aaa7caeab3ba6dd59c80d2c4ba5df38a106",
          },
        }
      );

      // console.log(response);

      setLoading(false);
      toast.success("An STK-Push has been sent to your phone, confirm");

      setTimeout(async () => {
        try {
          const response = await fetch(
            "http://localhost:3005/api/chpter/latestpayments",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          // console.log(response);

          if (!response.ok) {
            // Handle non-200 status codes here
            if (response.status === 401) {
              toast.error("Not authorized");
              navigate("/");
            } else {
              toast.error("A problem with the servers, hang on");
            }
            return;
          }

          const data = await response.json();

          setPayData(data.latestPayment);

          if (data.latestPayment.Success === true) {
            toast.success("Transaction Successful");
            navigate(`/records`);
          } else {
            toast.error("Transaction cancelled");
          }
        } catch (err) {
          // console.log(err);
          toast.error("A problem occurred, please try again later");
        }
      }, 10000);
    } catch (err) {
      // console.log(err);
      if (err.response.status === 401) {
        toast.error("Payment not authorized");
      } else if (err.response.status === 400) {
        toast.error("Validation error");
      } else {
        toast.error("A problem with the servers, hang on");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Contact Modal"
        className="modal-contents "
        overlayClassName="modal-overlay"
      >
        <main className="contact">
          <nav className="contact__contact-nav">
            <div className="contact__contact-nav__nav-title">
              <h2>Checkout</h2>
            </div>

            <div className="contact__contact-nav__nav-close">
              <AiOutlineClose
                className="contact__contact-nav__nav-close__class-icon"
                onClick={onClose}
              />
            </div>
          </nav>

          <form className="contact__contact-container" onSubmit={handlePayment}>
            <div className="contact__contact-container__name">
              <label>Name</label>
              <input type="text" required value={name} onChange={handleName} />
            </div>

            <div className="contact__contact-container__name">
              <label>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Contact</label>
              <input
                type="tel"
                placeholder="mpesa no. start with 254 eg.254xxxxxxxxx"
                required
                value={contact}
                onChange={handleContact}
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Location</label>
              <input
                type="text"
                placeholder="eg.Nairobi"
                value={location}
                onChange={handleLocation}
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Product</label>
              <input
                type="text"
                placeholder="name of the prodcut"
                value={selectedItem ? selectedItem.name : ""}
                readOnly
                className="price"
              />
            </div>
            <div className="contact__contact-container__name">
              <label>Unit Price</label>
              <input
                type="text"
                placeholder="amount in ksh"
                value={selectedItem ? `ksh.${selectedItem.price}` : ""}
                readOnly
                className="price"
              />
            </div>
            <div className="contact__contact-container__name">
              <label>Quantity</label>
              <input
                type="number"
                required
                value={quantity}
                onChange={handleQuantity}
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Amount</label>
              <input
                type="text"
                placeholder="amount in ksh."
                value={`ksh.${amount}`}
                readOnly
                className="price"
              />
            </div>
            <button className="contact__okay-btn">
              {" "}
              {loading ? (
                <AiOutlineLoading3Quarters className="loading-icon" />
              ) : (
                "Pay"
              )}
            </button>
          </form>
        </main>
      </Modal>
    </>
  );
}

export default Checkout;
