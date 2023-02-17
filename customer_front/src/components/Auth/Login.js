import { Fragment } from "react";
import { useRef, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";

import classes from "./Auth.module.css";

const Login = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url = "http://localhost:8080/login";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error("Validation failed.");
        }
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Could not authenticate you!");
        }
        return res.json();
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        // console.log(data.role);
        authCtx.login(data.idToken, data.role, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Fragment>
      <div className="col l-12">
        <div className={classes.content}>
          <div className="row">
            <div className="col l-6 c-12">
              <div className={classes.well}>
                <form onSubmit={loginHandler}>
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
                    <label htmlFor="password">Nhập mật khẩu:</label>
                    <input
                      type="password"
                      id="password"
                      required
                      ref={passwordInputRef}
                      className={classes.input}
                    />
                  </div>
                  <Link to="/forgot-password" className={classes.forgot}>
                    Quên mật khẩu?
                  </Link>
                  <button type="submit" className={classes.btn}>
                    Đăng nhập
                  </button>
                </form>
              </div>
            </div>
            <div className="col l-6 c-12">
              <div className={classes.well}>
                <h4>Đăng ký</h4>
                <p>
                  Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn, cập
                  nhật tình trạng đơn hàng, theo dõi những đơn hàng đã đặt.
                </p>
                <Link to="/signup" className={classes.btn}>
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
