import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-sky-500 via-cyan-500 to-emerald-500"
        onClick={onClose}
      ></div>
      <div className="flex my-10">
        <div className="w-1/3"></div>
        <div className="w-1/3 bg-white rounded-md drop-shadow-xl pt-5 pb-10 mx-20">
          {children}
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
