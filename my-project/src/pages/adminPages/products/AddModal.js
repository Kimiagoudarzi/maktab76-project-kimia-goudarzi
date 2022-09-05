import Form from "react-bootstrap/Form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaCamera } from "react-icons/fa";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ToastContainer from 'react-bootstrap/ToastContainer';
// import Toast from "react-bootstrap/Toast";
import axios from "axios";
import "./table.css";

const AddModal = ({ handleAddClose, addShow, fetchComments, currentPage }) => {
  // const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [Grouping, setGrouping] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState(null);
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  

  const handleFile = (e) => {
    setFiles(e.target.files[0]);
  };

  // postImage
  const handleImage = () => {
    const formData = new FormData();

    formData.append("image", files, files.name);
    console.log(formData);
    axios
      .post(`http://localhost:3002/upload`, formData)
      .then((res) => {
        setImage([res.data.filename]);
        console.log(res);
      })
      .catch((error) => {
        console.log("error!");
      });
  };

  // fetchPost
  const handelAddItem = (e) => {
    e.preventDefault();
    try {
      let entiresData = {
        name: name,
        price: price,
        image: image,
        stock: count,
        Grouping: Grouping,
        description: description,
      };
      axios.post(`http://localhost:3002/products`, entiresData).then(() => {
        console.log("entiresData", entiresData);
        fetchComments(currentPage);
        handleAddClose();
      });
    } catch (error) {
      console.log("error!");
    }
    setName("");
    setPrice("");
    setImage("");
    setCount("");
    setGrouping("");
    setDescription("");
  };

  return (
    <>
      <Modal show={addShow} onHide={handleAddClose}>
        <Modal.Header>افزودن کالا</Modal.Header>
        <Modal.Body>
          <form onSubmit={handelAddItem}>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label typeof="file" className="products-label">
                  تصویر کالا :
                </Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  className="products-input"
                  name="file_upload"
                  onChange={handleFile}
                />
                <div>
                  <button
                    type="button"
                    onClick={handleImage}
                    className="btn-camera"
                  >
                    <FaCamera />
                  </button>
                </div>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label">نام کالا :</Form.Label>
                <Form.Control
                  type="text"
                  multiple
                  className="products-input"
                  style={{ direction: "rtl" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label"> قیمت کالا :</Form.Label>
                <Form.Control
                  type="text"
                  multiple
                  className="products-input"
                  style={{ direction: "rtl" }}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label">
                  موجودی کالا در انبار :
                </Form.Label>
                <Form.Control
                  type="number"
                  multiple
                  className="products-input"
                  style={{ direction: "rtl" }}
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Label className="products-label">
                دسته بندی کالا :
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="products-select"
                value={Grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="default">دسته بندی را انتخاب کنید</option>
                <option value="لوازم آرایشی">لوازم آرایشی</option>
                <option value="مراقبت پوستی">مراقب پوستی</option>
                <option value="مراقبت مو">مراقبت مو</option>
                <option value="عطر و ادکلن">عطر و ادکلن</option>
              </Form.Select>
            </div>
            <div className="text-editor">
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onReady={(editor) => {
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data);
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
            <div className="products-btns">
              <Button onClick={handleAddClose} className="products-enseraf">
                انصراف
              </Button> 
              <Button className="products-add" type="submit" onClick={toggleShowA}>
                افزودن
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Toast */}
      {/* <ToastContainer position="bottom-start" style={{marginLeft: "1rem"}}>
      <Toast className="bg-success" onClose={toggleShowA} show={showA} animation={false}>
        <Toast.Header>
        </Toast.Header>
        <Toast.Body style={{fontSize: "1.1rem"}}>کالا با موفقیت اضافه شد</Toast.Body>
      </Toast>
      </ToastContainer> */}
    </>
  );
};

export default AddModal;
