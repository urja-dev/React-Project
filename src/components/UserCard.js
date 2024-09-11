import { useContext } from "react";
import UserContext from "../utils/UserContext";
const UserCard = (props) => {
  const { address, image, fName, lName, gender, phone, mName, age } =
    props.userData;
  const { loggedInUser } = useContext(UserContext);
  const userAddress = `${address.address} ${address.city} ${address.state} ${address.stateCode} ${address.postalCode}`;

  return (
    <div className="bg-gray-100 w-[250px] flex flex-col items-center p-4 rounded-lg font-semibold">
      <img src={image} alt="User Image" />
      <p className="text-xl font-bold my-2">
        {fName} {mName} {lName}
      </p>
      <p>{age} years old</p>
      <p>{gender}</p>
      <p>{phone}</p>
      <p>{userAddress}</p>
      <p>User Name: {loggedInUser}</p>
    </div>
  );
};
export const withAdminRole = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-gray-800 text-white p-1 rounded-md top-2 left-2">
          Admin
        </label>
        <Component userData={props.userData} />
      </div>
    );
  };
};

export default UserCard;
