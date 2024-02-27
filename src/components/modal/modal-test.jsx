import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal Popup</button>
      {showModal && <Modal header={"New Header"} onClose={onClose} />}
    </div>
  );
}
