import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Users from "../Users/Users";
import Registration from "../Registration/Registration";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

import getPositions from "../../redux/positions/positionsOperations.js";
import { usersOperations, usersSelectors } from "../../redux/users";

export default function HomeView(props) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalOpen = useSelector((state) => state.modal);

  const user = useSelector((state) => usersSelectors.getCurrentUser(state));

  const dispatch = useDispatch();
  const getAllUsers = () => dispatch(usersOperations.getAllUsers());
  const getAllPositions = () => dispatch(getPositions());

  useEffect(() => {
    getAllPositions();
  }, []);

  useEffect(() => {
    getAllUsers();
  }, [user]);

  return (
    <div className="wrapper">
      <Header />
      {isModalOpen && <Modal />}
      <Slider />
      <About />
      <Users />
      <Registration />
      <Footer />
    </div>
  );
}
