import s from "./ImageCard.module.css";
import { Item } from "../../types/Item";

type Props = {
  values: Item;
  handleClick: (arg: Item) => void;
};

export default function ImageCard({ values, handleClick }: Props) {
  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src={values.urls?.small}
        alt={values.alt_description}
        onClick={() => handleClick(values)}
      />
    </div>
  );
}
