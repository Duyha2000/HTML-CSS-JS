import { useFormik } from "formik";
import "./style.scss";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Mật khẩu không được để trống"),
});
const RegisterFormik = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .post("https://api-ecom.duthanhduoc.com/register", values)
        .then(() => {
          console.log(values);
          resetForm();
          navigate("/login");
          toast.success("Đăng ký thành công");
        })
        .catch((error) => {
          console.log(error);
          formik.setErrors({
            email: error.response.data.data?.email,
            password: error.response.data.data?.password,
          });
        });
    },
  });

  //   const emailValue = formik.values.email;
  //   const passwordValue = formik.values.password;
  //   console.log(emailValue, passwordValue);
  console.log(formik.touched.password, formik.errors.password);
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Đăng ký</h1>
      <div className="field">
        <label htmlFor="email">Nhập email: </label>
        <input
          type="email"
          placeholder={"Nhập username hoặc email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
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
        <label htmlFor="password">Nhập password: </label>

        <input
          type="password"
          placeholder={"Nhập password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
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
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default RegisterFormik;
