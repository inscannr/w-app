import { useState } from "react";
import Modal from "../components/Modal";
import Login from "../components/Login";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const modal = (
    <Modal onClose={handleClick}>
      <div className="">
        <p className="flex justify-center text-2xl font-bold">Login</p>
        <div className="flex justify-center mt-10">
          <Login onClose={handleClick} />
        </div>
      </div>
    </Modal>
  );

  return (
    <div>
      <button
        onClick={handleClick}
        className="mt-3 px-3 rounded-md bg-gray-300"
      >
        open login form
      </button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
