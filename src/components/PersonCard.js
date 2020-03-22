import React, { Component } from "react";
class PersonCardComponent extends Component {
  render() {
    const { lastName, firstName, age, hairColor } = this.props;
    return (
      <div>
        <h1>
          {lastName}, {firstName}
        </h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
}
export default PersonCardComponent;
