import { Link, Outlet } from "react-router-dom";
import "./home.scss"
import { Stories } from "../../components/stories/Stories";
import { Posts } from "../../components/posts/Posts";
import { Share } from "../../components/share/Share";
import { useContext } from "react";
import { ShowStoriesContext } from "../../context/showStoriesContext";
import Showstore from '../../components/showstories/showstories';

const Home = () => {

  const { showStories, showHide } = useContext(ShowStoriesContext)
  console.log(showStories)
  return (
    <div className="home">
      <Stories />
      <Share/>
      {showStories && <Showstore />}
      <Posts />


    </div>
  );
};

export default Home;
