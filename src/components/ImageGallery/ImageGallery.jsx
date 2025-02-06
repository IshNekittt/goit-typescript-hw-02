import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({ items, onModalOpen }) {
  return (
    <ul className={s.list}>
      {items.map((item) => {
        return (
          <li className={s.listItem} key={item.id}>
            <ImageCard values={item} handleClick={onModalOpen} />
          </li>
        );
      })}
    </ul>
  );
}
