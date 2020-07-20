import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        background: "#ccc",
        padding: "10px",
        textDecoration: "line-through"
      };
    } else {
      return {
        background: "#ccc",
        padding: "10px",
        textDecoration: "none"
      };
    }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};
const btnStyle = {
  background: "#ff0000",
  color: "fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default Todoitem;
