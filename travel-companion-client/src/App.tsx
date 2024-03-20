import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTE_NAME } from "./helpers/Route";
import Home from "./pages/home";
import Place from "./pages/place";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import BaseLayout from "./layout/base.layout";

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path={ROUTE_NAME.HOME} element={<Home />} />
        <Route path={ROUTE_NAME.PLACE} element={<Place />} />
        <Route path={ROUTE_NAME.BLOG} element={<Blog />} />
        <Route path={ROUTE_NAME.CONTACT} element={<Contact />} />
      </Routes>
    </BaseLayout>   
  );
}

export default App;
