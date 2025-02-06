import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Item } from "../../types/Item";

type Props = {
  items: Item[];
  onModalOpen: (arg: Item) => void;
};

export default function ImageGallery({ items, onModalOpen }: Props) {
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
