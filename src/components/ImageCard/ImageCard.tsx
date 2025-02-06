import s from "./ImageCard.module.css";

type Props = {
  values: Record<string, any>;
  handleClick: (arg: Record<string, any>) => void;
};
export default function ImageCard({ values, handleClick }: Props) {
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
