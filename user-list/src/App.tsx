import { useEffect, useState } from "react";
import User from "./components/User";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data: IUser[]) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <ul>
          <User name={user.name} />
        </ul>
      ))}
    </div>
  );
}

export default App;
