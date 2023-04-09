import "./Header.css";
import { FaPowerOff } from "react-icons/fa";
import { GiAtomicSlashes } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import tudum from '../../Assests/audio.mp3'

const Header = () => {
  const navigate = useNavigate();
  const [play] = useSound(tudum)
  const logout=()=>{
    localStorage.removeItem('email');
    navigate("/");
    {play()}
    window.location.reload(false);
  }

  return (
    <div>
      <span onClick={() =>{ 
        {play()}
        window.scroll(0, 0)}} className="header">
      <span style={{marginTop:"3px"}}><GiAtomicSlashes/></span><span style={{marginLeft:'3px'}}> Tudum</span>
      <span className="logout">
      <FaPowerOff size='25px' onClick={logout}/>
      </span>
    </span>
    </div>
  );
};

export default Header;
