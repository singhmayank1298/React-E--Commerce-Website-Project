import "./FooterItems.css";
import YoutubeImage from "../../Assets/youtube img.jpg";
import SpotifyImage from "../../Assets/Spotify Logo.png";
import FaceBookImage from "../../Assets/Facebook Logo.png";

const FooterItems = (props) => {
  return (
    <div className="gh">
      <footer>
        <div className="ope">The Generics</div>

        <div className="lae">
          <a href="https://www.youtube.com">
            <img src={YoutubeImage} alt="not found"></img>
          </a>
          <a href="https://spotify.com">
            <img src={SpotifyImage} alt="not found"></img>
          </a>
          <a href="https://facebook.com">
            <img src={FaceBookImage} alt=" not found"></img>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default FooterItems;
