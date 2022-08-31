import Form from "react-bootstrap/Form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import axios from "axios";

const AddModal = ({ handleAddClose, addShow }) => {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [Grouping, setGrouping] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

 

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
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      axios
        .post(`http://localhost:3002/products`, entiresData, { headers })
        .then(() => {
          setProduct((PrevState) => [...PrevState, entiresData]);
          console.log("entiresData", entiresData);
        });
    } catch (error) {
      console.log("error!");
    }
  };

  return (
    <>
      <Modal show={addShow} onHide={handleAddClose}>
        <Modal.Header>افزودن کالا</Modal.Header>
        <Modal.Body>
          <form onSubmit={handelAddItem}>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label
                  typeof="file"
                  className="products-label"
                >
                  تصویر کالا :
                  <Image
                  src={image}
                  style={{ width: "100px", marginTop: "0.5rem" }}
                  rounded
                />
                </Form.Label>
                <Form.Control type="file" multiple className="products-input" />
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
                  setDescription(event.target.value)
                  console.log({ event, editor, data });
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
              <Button className="products-add" type="submit">
                افزودن
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModal;
