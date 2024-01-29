interface IProps {
  name: string;
  phoneNumber: string;
  age: number;
  address: string;
}

const UserCard: React.FC<IProps> = ({ name, phoneNumber, age, address }) => {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
};

export default UserCard;
