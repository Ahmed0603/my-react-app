import { AppContext } from "../App";
import { useContext } from "react";

export const Home = () => {
  const { username } = useContext(AppContext);
  return <h1> Welcome, {username} </h1>;
};
