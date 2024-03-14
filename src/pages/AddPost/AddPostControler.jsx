import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostControler = () => {
  const navigate = useNavigate();
  /* class'ın örneğinin mantığı*/
  const model = new AddPostModel();

  /* Stete'nin varsayılan değerleni model'den alma */
  const [forms, setForms] = useState(model.state);
  const onInputChange = (label, value) => {
    /* Objenin dinamik olarak gelen değerlerini güncellemek */
    const copyState = { ...forms };
    copyState[label] = value;

    setForms(copyState);
  };
  // formun gönderilmesi

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!forms.user || !forms.text || !forms.title) {
      alert("Lütfen bütün alanları doldurun");
      return;
    }
    axios.post("http://localhost:3000/posts", forms).then(() => navigate("/"));
  };

  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default AddPostControler;
