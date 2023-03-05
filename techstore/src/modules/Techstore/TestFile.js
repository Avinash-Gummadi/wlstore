import React, { Component } from 'react'
import ReactPanZoom from 'react-image-pan-zoom-rotate';

export default class TestFile extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    console.log("componentDidMount");
    const filedata = <ReactPanZoom
      image="https://images.unsplash.com/photo-1551091708-fda32ed3178c"
      alt="Image alt text"
    />
    console.log(filedata);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
  }
  render() {
    return (
      <div style={{
        width: "70%",
        height: "500px",
        overflow: "scroll",
        display: "flex",
        alignItems: "center",
        margin: "6% 17%",
        border: "10px solid rgb(139 135 135)",
        borderRadius: "5px"
      }}>
        <ReactPanZoom
          image="https://images.unsplash.com/photo-1551091708-fda32ed3178c"
          alt="Image alt text"
        />
      </div>
    )
  }
}