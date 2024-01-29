import React from "react";

interface IProps {
  name: string;
  phoneNumber: string;
  age: number;
  address: string;
}

class UserCard extends React.Component<IProps> {
  render() {
    return (
      <>
        <div className="card">
          <h2 className="name">{this.props.name}</h2>
          <div className="body">
            <div className="label">Age:</div>
            <div>{this.props.age}</div>
            <div className="label">Phone:</div>
            <div>{this.props.phoneNumber}</div>
            <div className="label">Address:</div>
            <div>{this.props.address}</div>
          </div>
        </div>
      </>
    );
  }
}

export default UserCard;
