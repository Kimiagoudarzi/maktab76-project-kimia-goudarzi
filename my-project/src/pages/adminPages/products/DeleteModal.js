import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

const DeleteModal = ({ deleteShow, handleDeleteClose,id,fetchComments ,currentPage }) => {
  const [deleteState, setDeleteState] = useState();

  const removeData = (e) => {
  //  e.preventDefault();
   axios.delete(`http://localhost:3002/products/${id}`)
    .then((res)=>{
       setDeleteState(res.data)
       fetchComments(currentPage);
       handleDeleteClose()
    }).catch((err) => {
      console.log("err", err);
    })
  };

  return (
    <>
      <Modal
        show={deleteShow}
        onHide={handleDeleteClose}
        style={{ width: "36rem", marginLeft: "42rem" }}
      >
        <Modal.Header>
          <Modal.Title>حذف کالا</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: "20px" }}>آیا از حذف این کالا مطمئن هستید؟</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDeleteClose} className="products-enseraf">
            انصراف
          </Button>
          <Button className="products-add" onClick={() => removeData()}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
