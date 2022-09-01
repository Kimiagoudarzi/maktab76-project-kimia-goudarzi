import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

const EditModal = ({
  handleEditClose,
  editShow,
  id,
  posts,
  fetchComments,
  currentPage,
}) => {
  // const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [Grouping, setGrouping] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState(null)

  const handleCategoryChange = (e) => {
    // console.log("e", e.target.value);
    // setGrouping(e.target.value);
    // console.log(Grouping);
  };

  const handleFile = (e) => {
    setFiles( e.target.files[0])  
  };

  // postImage
  const handleImage = () => {
    const formData = new FormData();
    
    formData.append('image',files, files.name)
    console.log(formData);
    axios
      .post(`http://localhost:3002/upload`, formData )
      .then((res) => {
        setImage([res.data.filename]);
        console.log(res);
      })
      .catch((error) => {
        console.log("error!");
      });
  };


  //  fetchGetData

  useEffect(() => {
    axios.get(`http://localhost:3002/products/${id}`).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
      setStock(res.data.stock);
      setGrouping(res.data.Grouping);
      setDescription(res.data.description);
    });
  }, [id]);

  // editData
  const handleEditItem = (e) => {
    e.preventDefault();
    let editInfo = {
      name,
      price,
      image,
      stock,
      description,
      category,
      Grouping,
    };
    try {
      axios
        .put(`http://localhost:3002/products/${id}`, editInfo)
        .then((editInfo) => {
          console.log("data:", editInfo);
          fetchComments(currentPage);
          handleEditClose();
        });
    } catch (error) {
      console.log("error!");
    }
  };

  return (
    <>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header>ویرایش کالا</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditItem}>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label">تصویر کالا :</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  className="products-input"
                  name="file_upload"
                  onChange={handleFile}
                />
                {/* <Image
                  src={image}
                  style={{ width: "100px", marginTop: "0.5rem" }}
                  rounded
                /> */}
                 <div>
                  <Button
                    onClick={handleImage}
                    style={{
                      marginTop: "1rem",
                      backgroundColor: "#C065BC",
                      border: "none",
                    }}
                  >
                    Upload
                  </Button>
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
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
                  name="price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
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
                  name="stock"
                  className="products-input"
                  style={{ direction: "rtl" }}
                  value={stock}
                  onChange={(event) => setStock(event.target.value)}
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
                name="Grouping"
                Value={Grouping}
                onChange={(e) => handleCategoryChange(e)}
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
              <Button onClick={handleEditClose} className="products-enseraf">
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

export default EditModal;
