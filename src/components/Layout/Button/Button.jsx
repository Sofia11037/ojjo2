import "./button.scss";

export default function Button({ children, handleClick, className }) {
  return (
    <button className={className} onClick={handleClick}>
      <span>{children}</span>
    </button>
  );
}
