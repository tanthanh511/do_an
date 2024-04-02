import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/user-context";
import { useContext } from "react";
import Error from "./error/Error";

type Props = {
  children: ReactNode;
};

const PrivateRoute = (props: Props) => {
  const { user } = useContext(UserContext)!;
  if (user && !user.auth) {
    return (
      <>
        <Error message="you don't have permisson to access " />
      </>
    );
  }
  return <>{props.children}</>;
};

export default PrivateRoute;
