import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

const EditModal = ({ handleEditClose, editShow, id }) => {
  //  fetchGetData
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3002/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  return (
    <>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header>ویرایش کالا</Modal.Header>
        <Modal.Body>
          <form key={product?.id}>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label">تصویر کالا :</Form.Label>
                <Form.Control type="file" multiple className="products-input" />
                <Image
                  src={product?.image}
                  style={{ width: "100px", marginTop: "0.5rem" }}
                  rounded
                />
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
                  value={product?.name}
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
                  value={product?.price}
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
                  value={product?.stock}
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
                defaultValue={product?.category}
              >
                <option>دسته بندی را انتخاب کنید</option>
                <option value="1">لوازم آرایشی</option>
                <option value="2">مراقب پوستی</option>
                <option value="3">مراقبت مو</option>
                <option value="4">عطر و ادکلن</option>
              </Form.Select>
            </div>
            <div className="text-editor">
              <CKEditor
                editor={ClassicEditor}
                data={product.description}
                onReady={(editor) => {
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
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
              <Button className="products-add">افزودن</Button>
              <Button onClick={handleEditClose} className="products-enseraf">
                انصراف
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
