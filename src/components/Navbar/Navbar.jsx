import { useSelector, useDispatch } from "react-redux";
// import { getUser } from "./../../redux/apiCalls";
import { getUser2 } from "./../../redux/userSlice";

import "./Navbar.css";
const Navbar = () => {
  const { userInfo, pending } = useSelector((state) => state.user);
  const item = useSelector((state) => state.item);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      {pending == false && (
        <>
          <p> This name is : {userInfo.name}</p>
          <p>This item is : {item.name}</p>
        </>
      )}
      {pending == true && "Loading"}

      <button onClick={() => dispatch(getUser2)}>Get Random User</button>
    </div>
  );
};

export default Navbar;
