// import { Modal } from "react-bootstrap";
// import { useState } from "react";
// import CosmeticProducts from "../productsCard/CosmeticProducts"
// import Button from "react-bootstrap/Button";

// const AboutProduct = () => {
//     const [showModal, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//   return (
//     <>
//        <Modal show={showModal} onHide={handleClose} class>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//        </Modal>
//        <CosmeticProducts handleShow = {handleShow}/>
//     </>
//   )
// }

// export default AboutProduct