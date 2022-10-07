import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../redux/userSlice";

const body = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();
    // dispatch(update({ name: formData.name, email: formData.email }));
  };

  return (
    <div className="container-body" style={{ marginTop: "50px" }}>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div>
          <button style={{ marginTop: "20px" }}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default body;
