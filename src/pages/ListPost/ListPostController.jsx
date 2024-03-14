import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import ListPostView from "./ListPostView";

const ListPostController = () => {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setData(res.data));
  }, []);

  return (
    <ListPostView
      data={data}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      userName={userName}
      setUserName={setUserName}
    />
  );
};

export default ListPostController;
