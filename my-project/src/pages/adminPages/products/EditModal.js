import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaCamera } from "react-icons/fa";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import "./table.css";

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
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (e) => {
    console.log("e", e.target.value);
    setGrouping(e.target.value);
    console.log(Grouping);
  };

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

  //  fetchGetData
  useEffect(() => {
    axios.get(`http://localhost:3002/products/${id}`).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
      setStock(res.data.stock);
      setGrouping(res.data.Grouping);
      setDescription(res.data.description);
      setImage(res.data.image);
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
    setLoading(true);
    try {
      axios
        .put(`http://localhost:3002/products/${id}`, editInfo)
        .then((editInfo) => {
          console.log("data:", editInfo);
          fetchComments(currentPage);
          handleEditClose();
          setLoading(false);
        });
    } catch (error) {
      console.log("error!");
    }
  };

  return (
    <>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header>???????????? ????????</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditItem}>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label">?????????? ???????? :</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  className="products-input"
                  name="file_upload"
                  onChange={handleFile}
                />
                {/* {image.map((item) => (
                  <img
                    src={`http://localhost:3002/files/${item}`}
                    alt="picuture"
                    style={{width: "5rem"}}
                  />
                ))} */}
                <div>
                  <button onClick={handleImage} className="btn-camera">
                    <FaCamera />
                  </button>
                </div>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label">?????? ???????? :</Form.Label>
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
                <Form.Label className="products-label"> ???????? ???????? :</Form.Label>
                <Form.Control
                  type="text"
                  multiple
                  className="products-input"
                  style={{ direction: "rtl" }}
                  name="price"
                  value={
                    price
                      ? price
                          .toString()
                          .replace(/\./g, "")
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                      : null
                  }
                  onChange={(event) => setPrice(event.target.value)}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label className="products-label">
                  ???????????? ???????? ???? ?????????? :
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
                ???????? ???????? ???????? :
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="products-select"
                name="Grouping"
                value={Grouping}
                onChange={(e) => handleCategoryChange(e)}
              >
                <option>???????? ???????? ???? ???????????? ????????</option>
                <option value="?????????? ????????????">?????????? ????????????</option>
                <option value="???????????? ??????????">?????????? ??????????</option>
                <option value="???????????? ????">???????????? ????</option>
                <option value="?????? ?? ??????????">?????? ?? ??????????</option>
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
                ????????????
              </Button>
              <button
                className="products-add"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    ?????????? ????????????
                  </>
                ) : (
                  <>????????????</>
                )}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
