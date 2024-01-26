import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Email is không được để trống"),
  password: Yup.string()
    .min(6, "Password phải có ít nhất 6 ký tự")
    .required("Password phải là bắt buộc"),
});

const Form = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .post("https://api-ecom.duthanhduoc.com/register", values)
        .then(() => {
          console.log(values);
          navigate("/login");
          resetForm();
          toast.success("Register successfully");
        })
        .catch((error) => {
          formik.setErrors({
            email: error.response.data.data?.email,
            password: error.response.data.data?.password,
          });
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Register Form</h1>
      <div className="field">
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          autoFocus
        />
        {formik.touched.email && (
          <div
            style={{
              color: "red",
            }}
          >
            {formik.errors.email}
          </div>
        )}
      </div>

      <div className="field">
        <label htmlFor="password">Enter your password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.touched.password && (
          <div
            style={{
              color: "red",
            }}
          >
            {formik.errors.password}
          </div>
        )}
      </div>
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default Form;
