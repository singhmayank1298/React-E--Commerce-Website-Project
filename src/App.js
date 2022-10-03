import Header from "./components/Header/Header";
import Summary from "./components/UI/Summary";
import "./App.css";
import StoreItems from "./components/StoreItems/StoreItems";
import FooterItems from "./components/Footer/FooterItems";

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Summary></Summary>
      <StoreItems></StoreItems>
      <FooterItems></FooterItems>
    </div>
  );
}

export default App;
