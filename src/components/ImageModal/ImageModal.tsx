import { Item } from "../../types/Item";
import s from "./ImageModal.module.css";
import Modal from "react-modal";

type Props = {
  isOpen: boolean;
  current: Item | null;
  onClose: () => void;
};

export default function ImageModal({ isOpen, current, onClose }: Props) {
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
          src={current.urls?.regular}
          alt={current.alt_description}
          className={s.modalImage}
        />
        <ul className={s.description}>
          <li>{current.description}</li>
          <li>User: {current.user?.username}</li>
          <li>Likes: {current.likes}</li>
          <li>
            Created: {new Date(current.created_at as string).toLocaleString()}
          </li>
        </ul>
      </div>
    </Modal>
  );
}
