import s from "./ImageModal.module.css";
import Modal from "react-modal";
export default function ImageModal({ isOpen, current, onClose }) {
  if (!current) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={s.overlay}
      className={s.modalContent}
    >
      <div className={s.modalContentWrapper}>
        <img
          src={current.urls.regular}
          alt={current.alt_description}
          className={s.modalImage}
        />
        <ul className={s.description}>
          <li>{current.description}</li>
          <li>User: {current.user.username}</li>
          <li>Likes: {current.likes}</li>
          <li>Created: {new Date(current.created_at).toLocaleString()}</li>
        </ul>
      </div>
    </Modal>
  );
}
