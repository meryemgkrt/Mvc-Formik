import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PropTypes from "prop-types";
import axios from "axios";

const PopupControlor = ({ userName, setShowPopup }) => {
  const [data, setData] = useState(null);
  /*   kullanıcıdan alınan postları state'e aktar */
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?user=${userName}`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <PopupView userName={userName} data={data} setShowPopup={setShowPopup} />
  );
};

export default PopupControlor;
PopupControlor.PropTypes = {
  userName: PropTypes.string.isRequired,
  setShowPopup: PropTypes.func.isRequired,
};
