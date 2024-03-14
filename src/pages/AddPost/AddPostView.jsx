import PropTypes from "prop-types";

const AddPostView = ({ onInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Gönderi Ekle</h2>
      <fieldset>
        <label>Kullanıcı Adı</label>
        <input
          name="user"
          onChange={(e) => onInputChange("user", e.target.value)}
          type="text"
          placeholder="Kullanıcı adı"
        />
      </fieldset>
      <fieldset>
        <label>Başlık</label>
        <input
          type="text"
          onChange={(e) => onInputChange("title", e.target.value)}
          placeholder="Başık"
        />
      </fieldset>
      <fieldset>
        <label>Açıklama</label>
        <textarea
          type="text"
          onChange={(e) => onInputChange("text", e.target.value)}
          placeholder="Açıklama"
          maxLength={"250"}
        />
      </fieldset>
      <button>Gönder</button>
    </form>
  );
};

export default AddPostView;
AddPostView.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
