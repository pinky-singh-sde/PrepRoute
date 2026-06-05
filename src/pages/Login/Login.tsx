import { useForm } from "react-hook-form";
import styles from "./Login.module.scss";

import logo from "../../assets/preproutelogo.png";
import tubeman from "../../assets/tubeman.png";

type LoginForm = {
  userId: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } =
    useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className={styles.loginPage}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <img
          src={tubeman}
          alt="illustration"
          className={styles.illustration}
        />
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.formContainer}>
          <img
            src={logo}
            alt="PrepRoute"
            className={styles.logo}
          />

          <h2>Login</h2>

          <p>
            Use your company provided Login credentials
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label>User ID</label>

              <input
                type="text"
                placeholder="Enter User ID"
                {...register("userId")}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter Password"
                {...register("password")}
              />
            </div>

            <button
              type="button"
              className={styles.forgotPassword}
            >
              Forgot password?
            </button>

            <button
              type="submit"
              className={styles.loginButton}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}