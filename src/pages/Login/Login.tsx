// import { useForm } from "react-hook-form";
// import styles from "./Login.module.scss";

// import logo from "../../assets/preproutelogo.png";
// import tubeman from "../../assets/tubeman.png";

// type LoginForm = {
//   userId: string;
//   password: string;
// };

// export default function Login() {
//   const { register, handleSubmit } =
//     useForm<LoginForm>();

//   const onSubmit = (data: LoginForm) => {
//     console.log(data);
//   };

//   return (
//     <div className={styles.loginPage}>
//       {/* Left Section */}
//       <div className={styles.leftSection}>
//         <img
//           src={tubeman}
//           alt="illustration"
//           className={styles.illustration}
//         />
//       </div>

//       {/* Right Section */}
//       <div className={styles.rightSection}>
//         <div className={styles.formContainer}>
//           <img
//             src={logo}
//             alt="PrepRoute"
//             className={styles.logo}
//           />

//           <h2>Login</h2>

//           <p>
//             Use your company provided Login credentials
//           </p>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className={styles.formGroup}>
//               <label>User ID</label>

//               <input
//                 type="text"
//                 placeholder="Enter User ID"
//                 {...register("userId")}
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <label>Password</label>

//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 {...register("password")}
//               />
//             </div>

//             <button
//               type="button"
//               className={styles.forgotPassword}
//             >
//               Forgot password?
//             </button>

//             <button
//               type="submit"
//               className={styles.loginButton}
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.scss";

import logo from "../../assets/preproutelogo.png";
import tubeman from "../../assets/tubeman.png";

import { login } from "../../services/auth.service";
import { useAuthStore } from "../../store/authStore";

type LoginForm = {
  userId: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();

  const authLogin = useAuthStore(
    (state) => state.login
  );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  // const onSubmit = async (
  //   data: LoginForm
  // ) => {
  //   setError("");

  //   try {
  //     setLoading(true);

  //     const response =
  //       await login({
  //         userId: data.userId,
  //         password: data.password,
  //       });

  //     authLogin(
  //       response.data.token,
  //       response.data.user
  //     );

  //     navigate("/dashboard");
  //   } catch (error: any) {
  //     setError(
  //       error.response?.data?.message ||
  //         "Login Failed"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const onSubmit = async (
  data: LoginForm
) => {
  console.log("Form Submitted", data);

  setError("");

  try {
    setLoading(true);

    const response = await login({
      userId: data.userId,
      password: data.password,
    });

    console.log(
      "API Response:",
      response
    );

    authLogin(
      response.data.token,
      response.data.user
    );

    console.log(
      "Before Navigate"
    );

    navigate("/dashboard");
  } catch (error: any) {
    console.log(
      "Login Error:",
      error
    );

    setError(
      error.response?.data?.message ||
        error.message ||
        "Login Failed"
    );
  } finally {
    setLoading(false);
  }
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
            Use your company provided login
            credentials
          </p>

          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
          >
            <div className={styles.formGroup}>
              <label>User ID</label>

              <input
                type="text"
                placeholder="Enter User ID"
                {...register("userId", {
                  required:
                    "User ID is required",
                })}
              />

              {errors.userId && (
                <span
                  className={styles.error}
                >
                  {
                    errors.userId
                      .message
                  }
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter Password"
                {...register(
                  "password",
                  {
                    required:
                      "Password is required",
                  }
                )}
              />

              {errors.password && (
                <span
                  className={styles.error}
                >
                  {
                    errors.password
                      .message
                  }
                </span>
              )}
            </div>

            {error && (
              <p
                className={styles.error}
              >
                {error}
              </p>
            )}

            <button
              type="button"
              className={
                styles.forgotPassword
              }
            >
              Forgot password?
            </button>

            <button
              type="submit"
              disabled={loading}
              className={
                styles.loginButton
              }
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}