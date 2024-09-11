import Shimmer from "./Shimmer";
import useUser from "../hooks/useUser";
import UserAccordions from "./UserAccordions";

const User = () => {
  const userData = useUser();
  const data = "Dummy Data";

  if (!userData) return <Shimmer />;

  const { firstName, lastName, maidenName, age, email, address, image } =
    userData;
  const userDetails = [
    {
      accordionTitle: "Company",
      name: userData.company.name,
      title: userData.company.title,
    },
    {
      accordionTitle: "Bank",
      name: userData.bank.cardNumber,
      title: userData.bank.cardExpire,
    },
    {
      accordionTitle: "Company",
      name: userData.crypto.coin,
      title: userData.crypto.network,
    },
  ];

  const userAddress = `${address.address} ${address.city} ${address.state} ${address.stateCode} ${address.postalCode}`;

  return (
    <div className="p-4 flex flex-col justify-center items-center gap-3">
      <img src={image} alt={firstName} />
      <h1 className="font-bold">
        {firstName} {maidenName} {lastName}
      </h1>
      <h2> {age} years old</h2>
      <h2> {email}</h2>
      <h2> {userAddress}</h2>
      <UserAccordions userDetails={userDetails} data={data} />
    </div>
  );
};

export default User;
