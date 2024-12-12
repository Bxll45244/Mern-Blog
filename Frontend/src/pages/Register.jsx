import { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router";
import Swal from "sweetaleart2";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const currentUser = await AuthService.register(
        user.username,
        user.password
      );
      console.log(currentUser.status);
      if (currentUser.status === 200) {
        Swal.fire({
          title: "User Registration",
          text: currentUser.data.message,
          icon: "success",
        });
        setUser({
          username: "",
          password: "",
        });
        navigate("/loing");
      }
    } catch (error) {
      Swal.fire({
        title: "User Registration",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };
};

export default Register;
