import ButtonSvg from "../../assets/svg/ButtonSvg";

const Button = ({ className, href, children, onClick, white, px }) => {
  const classes = `button relative cursor-pointer
  items-center justify-center h-11 transitions-color
  hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'}
  ${className || ''}`;

  const spanClasses = `relative z-10`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{ children }</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} >
      <span className={spanClasses} >{ children }</span>
      {ButtonSvg(white)}
    </a>
  );

  return href
    ? renderLink()
    : renderButton(); 
}

export default Button;
