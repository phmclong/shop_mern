import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    authCtx.logout();
  };

  return (
    <header>
      <div className={classes.logo}>
        <Link to="/">
          <img
            className={classes["logo-img"]}
            src="https://zunezx.com/upload/image/data/Shape-1-b9f.png"
            alt="logo"
          />
        </Link>
      </div>
      <nav className={classes.nav}>
        <div className={classes["menu-wrap"]}>
          <ul className={classes["main-nav"]}>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li className={classes["list-unstyled"]}>
              <Link to="/products">Danh mục sản phẩm</Link>
              <ul className={classes["ul-list-unstyled"]}>
                <li>
                  <Link to="/top-wear">Áo</Link>
                </li>
                <li>
                  <Link to="/bottom-wear">Quần</Link>
                </li>
                <li>
                  <Link to="/accessory">Phụ kiện</Link>
                </li>
                <li>
                  <Link to="/sale">Giảm giá</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Tin tức</Link>
            </li>
            <li>
              <Link to="/cart">Giỏ hàng</Link>
            </li>
            <li>
              <Link to="/checkout">Thanh toán</Link>
            </li>
            {!authCtx.isLoggedIn && (
              <li>
                <Link to="/login">Đăng nhập</Link>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li>
                <Link to="/signup">Đăng ký</Link>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li>
                <Link to="/account">Tài khoản</Link>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>Đăng xuất</button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
