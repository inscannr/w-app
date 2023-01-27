import { useState } from "react";
import Modal from "../components/Modal.js";
import Login from "../components/Login";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const modalSwitchHandler = () => {
    setShowModal(!showModal);
  };

  const modal = (
    <Modal modalSwitchHandler={modalSwitchHandler}>
      <div className="">
        <p className="flex justify-center text-2xl font-bold">Login</p>
        <div className="flex justify-center mt-10">
          <Login modalSwitchHandler={modalSwitchHandler} />
        </div>
      </div>
    </Modal>
  );

  return (
    <div>
      <button
        onClick={modalSwitchHandler}
        className="mt-3 px-3 rounded-md bg-gray-300"
      >
        open login form
      </button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
