import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTE_NAME } from "./helpers/Route";
import Home from "./pages/home";
import Place from "./pages/place";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
    <>
      
      <Header />
      <Routes>
        <Route path={ROUTE_NAME.HOME} element={<Home />} />
        <Route path={ROUTE_NAME.PLACE} element={<Place />} />
        <Route path={ROUTE_NAME.BLOG} element={<Blog />} />
        <Route path={ROUTE_NAME.CONTACT} element={<Contact />} />
        <Route path={ROUTE_NAME.LOGIN} element={<Login />} />
        <Route path={ROUTE_NAME.REGISTER} element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
