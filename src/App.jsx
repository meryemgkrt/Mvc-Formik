import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style.scss";
import ListPostController from "./pages/ListPost/ListPostController";
import HeaderView from "./components/HeaderView";
import AddPostControler from "./pages/AddPost/AddPostControler";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListPostController />} />
        <Route path="/add-post" element={<AddPostControler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
