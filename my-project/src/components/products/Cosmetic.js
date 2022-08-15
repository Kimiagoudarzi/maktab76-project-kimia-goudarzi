import { useState, useCallback, useEffect } from "react";
import Card from "../product's card/Card";
import Footer from "../../layout/userLayoute/footer/index";
import NavBar from "../../layout/userLayoute/navbar/index";

const Cosmetic = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [post, setPost] = useState();

  const fetchPost = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/cosmetic");
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.log("error");
    }
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Card posts= {post}/>
      <Footer />
    </>
  );
};
export default Cosmetic;
