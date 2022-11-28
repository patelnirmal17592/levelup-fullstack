import "./ProfileButton.css";

const ButtonStyles = [
    "btn-white-outlined",
    "btn-magenta-solid",
    "btn-mustard-solid"
];


const ProfileButton = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
}) => {

  const checkButtonStyle = ButtonStyles.includes(buttonStyle) 
  ? buttonStyle : ButtonStyles[0];


  return (
    <button 
    className={`sf-profile-btn ${checkButtonStyle}`} 
    onClick={onClick} type={type}>

    {children} 
    </button>
  )
}

export default ProfileButton