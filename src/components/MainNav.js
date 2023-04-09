import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import {BsList} from "react-icons/bs";
// import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import tudum from '../Assests/audio.mp3'


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [play] = useSound(tudum)

  useEffect(() => {
    if (value === 0) {
      navigate("/trending");
      {play()}
    } else if (value === 1) {
      navigate("/movies");
      {play()}
    } else if (value === 2) {
      navigate("/series");
      {play()}
    } else if (value === 3) {
      navigate("/search");
      {play()}
    } else if (value === 4){
      navigate("/profile");
      {play()}
    }
  }, [value]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        style={{color:"white"}}
        label = "Mylist"
        icon = {<BsList size='25px'/>}
      />
      {/* <BsFillPersonFill color="white"/> */}
    </BottomNavigation>
  );
}
