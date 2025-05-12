import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p className={css.message}>
       We've encountered an error! Please refresh the page and try again.
      </p>
    </div>
  );
}