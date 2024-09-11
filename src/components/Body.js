import UserCard, { withAdminRole } from "./UserCard";
import useOnline from "../hooks/useOnline";
import useUsersList from "../hooks/useUserList";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const { usersData, filterDataFun } = useUsersList();
  const onlineStatus = useOnline();
  const UserCardAdmin = withAdminRole(UserCard);
  if (!onlineStatus) {
    return (
      <div>
        <h1>Seems your internet connection is not working!</h1>
      </div>
    );
  }

  return usersData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <button
          className="p-2 rounded-md border-2 border-slate-400 hover:bg-slate-300 text-zinc-700 m-2"
          onClick={filterDataFun}>
          Age Greater than 30
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-12">
        {usersData.map((user, index) => {
          return (
            <Link to={`/user/${user.id}`} key={user.id}>
              {user.role === "admin" ? (
                <UserCardAdmin userData={user} />
              ) : (
                <UserCard
                  userData={user}
                  // fName={user.firstName}
                  // lName={user.lastName}
                  // mName={user.middleName}
                  // gender={user.gender}
                  // email={user.email}
                  // phone={user.phone}
                  // userImage={user.image}
                  // address={user.address}
                  // age={user.age}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
