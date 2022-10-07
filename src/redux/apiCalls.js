import axios from "axios";
import { getUserStart, getUserSuccess, getUserError } from "./userSlice";

export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const user = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    dispatch(getUserSuccess({ name: user.data.title }));
  } catch (error) {
    dispatch(getUserError());
  }
};
