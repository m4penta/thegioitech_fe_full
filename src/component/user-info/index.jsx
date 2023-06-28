import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { authAction } from "../../redux/authSlice";
import { cartAction } from "../../redux/cartSlice";
import { Wrapper } from "../../styles/styled";
const UserInfo = ({ data }) => {
  const { email, firstName, lastName, image, role } = data;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const handleLogoutClick = () => {
    if (window.confirm("Bạn có chắc!")) {
      dispatch(cartAction.destroyCart());
      dispatch(authAction.deleteUser());
      history.push("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "10px",
      }}
    >
      <div
        style={{
          padding: "2rem 1.4rem",
          borderRadius: "1.2rem",
          border: "1px solid",
          width: "50%",
        }}
      >
        <h4 style={{ fontWeight: "bold" }}>Thông tin user</h4>
        <div
          style={{
            display: "flex",
            padding: "5px",
            gap: "10px",
          }}
        >
          <p>
            <img src={image} alt="avatar" />
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: "30px",
            }}
          >
            <p>Email: {email}</p>
            <p>Name: {firstName + lastName}</p>
            <p>Decentralization: {role}</p>
            <div>
              <button
                style={{
                  fontWeight: "bold",
                  borderRadius: "5px",
                  width: "80px",
                  backgroundColor: "#5572e6",
                }}
                onClick={handleLogoutClick}
              >
                Logout
              </button>
              <button
                style={{
                  fontWeight: "bold",
                  borderRadius: "5px",
                  width: "80px",
                  marginLeft: "5px",
                }}
                type="button"
                onClick={() => setIsEdit(!isEdit)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      {isEdit && (
        <div
          style={{
            padding: "2rem 1.4rem",
            borderRadius: "1.2rem",
            border: "1px solid",
            width: "50%",
            display: "grid",
            gap: "10px",
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>Edit profile</h4>
          <div>
            <label htmlFor="">Name: </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email: </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Decentralization: </label>
            <input type="text" />
          </div>
          <div>
            <button type="button">Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
