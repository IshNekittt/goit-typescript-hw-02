import s from "./ImageCard.module.css";
export default function ImageCard({ values, handleClick }) {
  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src={values.urls.small}
        alt={values.alt_description}
        onClick={() => handleClick(values)}
      />
    </div>
  );
}
