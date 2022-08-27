import Form from "react-bootstrap/Form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditModal = ({handleEditClose, editShow}) => {
 
  return (
    <>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header>ویرایش کالا</Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label">تصویر کالا :</Form.Label>
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
                data=""
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
