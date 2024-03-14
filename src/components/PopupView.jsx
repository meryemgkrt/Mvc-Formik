import PropTypes from "prop-types";

const PopupView = ({ userName, setShowPopup, data }) => {
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            <span>{userName}</span> kullanıcısının gönderileri
          </h4>
          <button onClick={() => setShowPopup(false)}>Kapat</button>
        </div>

        {!data && <p>Yükleniyo</p>}
        {data?.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupView;
PopupView.propTypes = {
  userName: PropTypes.string.isRequired,
  setShowPopup: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
