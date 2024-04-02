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
import UserAdmin from "./pages/admin/user-admin";
import BlogAdmin from "./pages/admin/blog-admin";
import { UserContext } from "./context/user-context";
import { useContext, useEffect } from "react";
import PrivateRoute from "./components/privateRoute";

function App() {
  const { user, loginContext } = useContext(UserContext)!;
  // useEffect(()=>{
  //   if(localStorage.getItem("token")){
  //     loginContext(localStorage.getItem("email"), localStorage.getItem("token"))
  //   }
  // },[])
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const email = localStorage.getItem("email");
      if (email) {
        loginContext(email, token);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTE_NAME.HOME} element={<Home />} />
        <Route path={ROUTE_NAME.PLACE} element={<Place />} />
        <Route path={ROUTE_NAME.BLOG} element={<Blog />} />
        <Route path={ROUTE_NAME.CONTACT} element={<Contact />} />
        {/*  <Route path={ROUTE_NAME.BLOGADMIN} element={<BlogAdmin />} /> */}
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
