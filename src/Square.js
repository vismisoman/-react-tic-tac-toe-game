import React from "react";

/*class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
*/
function Square(props) {
  return (
    <button
      className="square"
      style={{ color: "red", height: "30px", width: "30px" }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
export default Square;
