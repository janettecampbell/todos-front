import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //     setFormData({...formData, [e.target.id]: e.target.value})
  // }

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const res = await axios.post("http://localhost:5000/users", formData);
  //       console.log(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.post("http://localhost:5000/auth", formData).then((res) => {
      console.log(res.data);

      if (res.data.token && res.data.user) {
        localStorage.setItem("userToken", res.data.token);
        props.setUser(res.data.user);
        history.push("/home");
      } else {
        console.error(res.data);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
