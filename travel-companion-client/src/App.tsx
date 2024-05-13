import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTE_NAME } from "./helpers/Route";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import UserAdmin from "./pages/admin/user-admin";
import BlogAdmin from "./pages/admin/blog-admin";
import { UserContext } from "./context/user-context";
import { useContext, useEffect } from "react";
import PrivateRoute from "./components/privateRoute";
import { BlogDetail } from "./pages/blog-detail";
import { Weather } from "./pages/weather";
import { UserDetail } from "./pages/user-detail";
import WardDetail from "./pages/ward-detail";
import PlaceDetail from "./pages/place-detail";

function App() {
  const { user, loginContext } = useContext(UserContext)!;

  useEffect(() => {
    const password = localStorage.getItem("password");
    const email = localStorage.getItem("email");
    if (email && password) {
      const { username, bio } = user;
      loginContext(email, password, username, bio);
    }


    // khi login bằng token
    //const token = localStorage.getItem("token");
    //if (token) {
    // const email = localStorage.getItem("email");
    // if (email) {
    //   loginContext(email, token );
    // }
    //}
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTE_NAME.HOME} element={<Home />} />
        <Route path={ROUTE_NAME.WARDDETAIL} element={<WardDetail />} />
        <Route path={ROUTE_NAME.PLACEDETAIL} element={<PlaceDetail />} />
        <Route path={ROUTE_NAME.BLOG} element={<Blog />} />
        <Route path={ROUTE_NAME.USERDETAIL} element={<UserDetail />} />
        <Route path={ROUTE_NAME.CONTACT} element={<Contact />} />
        <Route path={ROUTE_NAME.WEATHER} element={<Weather />} />
        <Route path={ROUTE_NAME.BLOGDETAIL} element={<BlogDetail />} />
        <Route path={ROUTE_NAME.USERADMIN} element={<UserAdmin />} />
        <Route path={ROUTE_NAME.LOGIN} element={<Login />} />
        <Route path={ROUTE_NAME.REGISTER} element={<Register />} />
        <Route
          path={ROUTE_NAME.BLOGADMIN}
          element={
            <PrivateRoute>
              <BlogAdmin />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
