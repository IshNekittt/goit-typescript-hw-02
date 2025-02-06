import s from "./ErrorMessage.module.css";
export default function ErrorMessage() {
  return (
    <div>
      <p className={s.errorMessage}>Something went wrong</p>
    </div>
  );
}
