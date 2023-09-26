import React, { useState, useEffect } from "react";
import "./checkoutModal.scss";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

function Checkout({ isOpen, onClose, selectedItem }) {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [quantity, setQuantity] = useState();
  const [amount, setAmount] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    if (quantity && selectedItem) {
      const unitPrice = selectedItem.price;
      const totalPrice = quantity * unitPrice;
      setAmount(totalPrice);
    } else {
      setAmount(0);
    }
  }, [quantity, selectedItem]);

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

          <div className="contact__contact-container">
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

            {/* <div className="contact__contact-container__name">
              <label>Location</label>
              <input type="text" placeholder="eg.Nairobi" />
            </div> */}

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
          </div>

          <button className="contact__okay-btn">Pay</button>
        </main>
      </Modal>
    </>
  );
}

export default Checkout;
