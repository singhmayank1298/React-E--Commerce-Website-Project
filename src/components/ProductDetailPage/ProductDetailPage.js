import { useLocation } from "react-router-dom";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const location = useLocation();
  console.log("efnen");
  const { title, imageUrl, price } = location.state;
  const ImageUrl = [
    { url: "/Images/color1.jpg" },
    { url: "/Images/color2.jpg" },
    { url: "/Images/color3.jpg" },
  ];
  console.log(title, imageUrl);
  return (
    <div className="njni">
      <div className="nwdwn">
        {ImageUrl.map((x) => (
          <img src={x.url} alt="not found"></img>
        ))}
      </div>

      <div className="nwio">
        <img src={imageUrl} alt="not found"></img>
      </div>
      <div className="sdnidn">
        <h2>{`ITEM NAME -  ${title}`}</h2>

        <h2> ${price}</h2>
      </div>
      <div className="dsniu">
        <h2>Ratings and Reviews</h2>
        <ul>
          <li>
            <img
              className="reviewstar"
              src="/Images/star.jpg"
              alt="no found"
            ></img>
            vary nice
          </li>
          <li>
            <img
              className="reviewstar"
              src="/Images/star.jpg"
              alt="not found"
            ></img>{" "}
            love it
          </li>
          <li>
            <img
              className="reviewstar"
              src="/Images/star.jpg"
              alt="not found"
            ></img>{" "}
            good
          </li>
          <li>
            <img
              className="reviewstar"
              src="/Images/star.jpg"
              alt="not found"
            ></img>
            Excellent color
          </li>
        </ul>
        <div className="mkmk">
          <img src="/Images/star.jpg" alt="not found"></img>4
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
