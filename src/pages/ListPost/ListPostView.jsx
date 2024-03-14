import PopupControlor from "../../components/PopupControlor";
import PropTypes from "prop-types";
const ListPostView = ({
  data,
  setShowPopup,
  showPopup,
  setUserName,
  userName,
}) => {
  return (
    <div className="container">
      {!data && <p className="load">Yükleniyor...</p>}

      {data?.map((post) => (
        <div className="" key={post.id}>
          <div className="post">
            <div className="info">
              <h3>{post.title}</h3>
              <p
                onClick={() => {
                  setUserName(post.user);
                  setShowPopup(true);
                }}
              >
                {post.user}
              </p>
            </div>
            <p className="text">{post.text}</p>
          </div>
        </div>
      ))}
      {showPopup && (
        <PopupControlor setShowPopup={setShowPopup} userName={userName} />
      )}
    </div>
  );
};
ListPostView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setShowPopup: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
  setUserName: PropTypes.func.isRequired,
  userName: PropTypes.string,
};
export default ListPostView;
