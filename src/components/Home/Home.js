import "./Home.css";
import HomeHeaader from "./HomeHeader";
import Table from "./Table";

const Array = [
  {
    date: "July 16",
    location: "DETROIT, MI",
    area: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "July 16",
    location: "DETROIT, MI",
    area: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "July 16",
    location: "DETROIT, MI",
    area: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "July 16",
    location: "DETROIT, MI",
    area: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "July 16",
    location: "DETROIT, MI",
    area: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "July 16",
    location: "DETROIT, MI",
    area: "DTE ENERGY MUSIC THEATRE",
  },
];

const Home = () => {
  return (
    <>
      <HomeHeaader></HomeHeaader>
      <div>
        <div className="njnwi">
          <h1>Tour</h1>
          {Array.map((x) => {
            return (
              <Table
                key={Math.random()}
                date={x.date}
                location={x.location}
                area={x.area}
                buttonText={"Buy Ticket"}
              ></Table>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
