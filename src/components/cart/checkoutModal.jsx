import React from "react";
import "./checkoutModal.scss";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

function Checkout({ isOpen, onClose }) {
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
              <input
                type="text"
               
                // readOnly
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Email</label>
              <input
                type="text"
                
                // readOnly
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Contact</label>
              <input
                type="tel"
                placeholder="should start with 254 eg.254xxxxxxxxx"

               
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Location</label>
              <input type="text" placeholder="eg.Nairobi"  />
            </div>

            <div className="contact__contact-container__name">
              <label>Product</label>
              <input
                type="text"
                
                
              />
            </div>
            <div className="contact__contact-container__name">
              <label>Quantity</label>
              <input
                type="number"
                
                
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Amount</label>
              <input
                type="number"
                
                
              />
            </div>
          </div>

          <button className="contact__okay-btn" onClick={onClose}>
            Pay
          </button>
        </main>






      </Modal>
    </>
  );
}

export default Checkout;
