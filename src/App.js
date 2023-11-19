import { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserLIst from "./Components/Users/UserLIst";
function App() {
  const [userProfile, setUserProfile] = useState([]);

  const getUserProfile = (userName, useAge) => {
    setUserProfile((prevUserProfile) => {
      return [
        ...prevUserProfile,
        { name: userName, age: useAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <AddUsers onGetUsers={getUserProfile} />
      <UserLIst users={userProfile} />
    </div>
  );
}

export default App;
