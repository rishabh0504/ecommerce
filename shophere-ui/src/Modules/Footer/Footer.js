import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="row navbar-default row-bottom" style={{'backgroundColor': 'aliceblue',marginTop:'1%'}}>
        <div className="col-sm-12" style={{marginTop : '1%',marginBottom:'0.5%'}}>
          <p className="text-center">Shophere Copyright@2018</p>
        </div>
      </div>
    );
  }
}
