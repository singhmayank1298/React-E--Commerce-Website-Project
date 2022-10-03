import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="rrr">
        <div>
          <ul className="vv">
            <span>Home</span>
            <span>Store</span>
            <span>About</span>
          </ul>
          <Button value={"0"}></Button>
        </div>
      </div>
    </>
  );
};

export default Header;