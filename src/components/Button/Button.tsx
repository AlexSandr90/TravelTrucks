import css from './Button.module.css';

const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button className={`${css.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
