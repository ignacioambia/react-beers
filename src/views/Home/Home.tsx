import * as React from "react";
import "./Home.scss";
import BeerCard from "../../components/BeerCard/BeerCard";
import BeerInfo from "../../models/BeerInfo";
import BeersFilter from "./components/BeersFilter/BeersFilter";

interface HomeProps {}

interface HomeState {
  beers: BeerInfo[];
}

class Home extends React.Component<HomeProps, HomeState> {
  state = { beers: [] };

  componentDidMount() {
    console.log("Home page just mounted", this);
    fetch("https://api.sampleapis.com/beers/ale")
      .then((r) => r.json())
      .then((r) => {
        this.setState({ beers: r });
      });
  }

  test = () => {
    console.log("This is a test function", this);
  };
  emitTestCalled = () => {
    console.log("Event emitted", this);
  };
  render() {
    return (
      <div className="container">
        <div className="bar">
          <BeersFilter onEmitTest={this.emitTestCalled} />
        </div>
        <div className="beers">
          {this.state.beers.map((beerInfo: BeerInfo) => {
            return <BeerCard beerInfo={beerInfo}></BeerCard>;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
