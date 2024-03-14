import { v4 } from "uuid";

class AddPostModel {
  state = {
    id: v4(),
    date: new Date(),
    title: "",
    user: "",
  };
}

export default AddPostModel;
