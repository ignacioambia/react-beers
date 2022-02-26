import React, { MouseEventHandler } from "react";
import "./BeersFilter.scss";
interface BeersFilterProps {
  onEmitTest: any;
}

interface BeersFilterState {}

class BeersFilter extends React.Component<BeersFilterProps, BeersFilterState> {
  state = {};

  callEmit = () => {
    console.log("calling emit");
    this.props.onEmitTest();
  };
  render() {
    return (
      <div className="beers-filter">
        This is beers filter
        <button onClick={this.callEmit}>test button </button>
      </div>
    );
  }
}

export default BeersFilter;
