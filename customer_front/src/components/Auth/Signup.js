import { Fragment, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import validator from "validator";
import ErrorModal from "../UI/ErrorModal";

import classes from "./Auth.module.css";

const Signup = () => {
  const history = useHistory();

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState();

  const signupHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!validator.isEmail(enteredEmail)) {
      setError({
        title: "Email không hợp lệ",
        message: "Hãy nhập email hợp lệ",
      });
      return;
    }

    if (
      !validator.isStrongPassword(enteredPassword) &&
      !validator.isLength(enteredPassword, 5)
    ) {
      setError({
        title: "Mật khẩu yếu",
        message:
          "Hãy nhập mật khẩu từ 5 ký tự trở lên. Nên bao gồm cả chữ cái, số và ký tự đặc biệt ",
      });
      return;
    }

    let url = "http://localhost:8080/signup";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        password: enteredPassword,
      }),
    })
      .then((res) => {
        if (res.status === 400) {
          throw new Error("User already created!");
        }

        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating a usser failed!");
        }

        return res.json();
      })
      .then((data) => {
        history.replace("/login");
      })
      .catch((err) => {
        alert(err.message);
      });

    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="col l-12">
        <div className={classes.content}>
          <div className="row">
            <div className="col l-6 c-12">
              <div className={classes.well}>
                <form onSubmit={signupHandler}>
                  <div className={classes["form-group"]}>
                    <label htmlFor="email">Nhập email:</label>
                    <input
                      type="email"
                      id="email"
                      required
                      ref={emailInputRef}
                      className={classes.input}
                    />
                  </div>
                  <div className={classes["form-group"]}>
                    <label htmlFor="text">Nhập tên:</label>
                    <input
                      type="text"
                      id="name"
                      required
                      ref={nameInputRef}
                      className={classes.input}
                    />
                  </div>
                  <div className={classes["form-group"]}>
                    <label htmlFor="password">Nhập mật khẩu:</label>
                    <input
                      type="password"
                      id="password"
                      required
                      ref={passwordInputRef}
                      className={classes.input}
                    />
                  </div>
                  <button type="submit" className={classes.btn}>
                    Đăng ký
                  </button>
                </form>
              </div>
            </div>
            <div className="col l-6 c-12">
              <div className={classes.well}>
                <h4>Đăng nhập</h4>
                <p>
                  Đã có tài khoản, ấn vào nút bên dưới để đăng nhập.
                </p>
                <Link to="/login" className={classes.btn}>
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
