import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";

import CustomerProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthContext from "./context/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
  return (
    //exact làm cho chỉ khi ấn vào url đúng thì mới render ra page tương ứng
    <Switch>
      <Route path="/" exact>
        <Redirect to="/products" />
      </Route>
      <Route path="/products">
        <CustomerProductsPage />
      </Route>
      {!authCtx.isLoggedIn && (
        <Route path="/signup">
          <SignupPage />
        </Route>
      )}
      {!authCtx.isLoggedIn && (
        <Route path="/login">
          <LoginPage />
        </Route>
      )}
    </Switch>
  );
};

export default App;
