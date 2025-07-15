import Profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="max-w-11/12 mx-auto flex justify-between items-center p-2 border-b-1">
      <h1 className="text-4xl cursor-pointer"> Knowledge Cafe</h1>
      <img src={Profile} alt="Profile-Image" />
    </div>
  );
};

export default Header;
