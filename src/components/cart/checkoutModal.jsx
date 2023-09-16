import React from 'react'
import './checkoutModal.css'
import Modal from 'react-modal'
import { AiOutlineClose } from "react-icons/ai";


function Checkout ({isOpen, onClose,}){

    return(

        <>

<Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Contact Modal"
        className="modal-contents "
        overlayClassName="modal-overlay"
      >

</Modal>
        
        
        
        </>



    )
}


export default Checkout