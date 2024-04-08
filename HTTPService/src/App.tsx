import { useEffect, useState } from "react";
import { CanceledError } from "axios";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import UserService, { User } from "./services/UserService";
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getUser = () => {
    setLoading(true);
    const { request, cancel } = UserService.get<User>();
    request
      .then((resp) => {
        setLoading(false);
        setUsers(resp.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);

        setLoading(false);
      });

    return cancel;
  };

  const deleteUser = ({ id }: User) => {
    const originalUsers = [...users];
    setUsers(
      users.filter((user) => {
        return user.id != id;
      })
    );

    UserService.delete(id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const createUser = () => {
    const newUser = { id: 0, name: "kriskant" };
    const originalUsers = [...users];
    setUsers([...users, newUser]);
    UserService.create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([...originalUsers, savedUser]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(
      users.map((user) => (user.id == updatedUser.id ? updatedUser : user))
    );
    UserService.update(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  useEffect(getUser, []);

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary" onClick={() => createUser()}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <li className="list-group-item d-flex justify-content-between">
                {user.name}
                <div>
                  <button
                    className="btn btn-secondary"
                    onClick={() => updateUser(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteUser(user)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default App;
