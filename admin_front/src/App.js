import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import BranchesPage from "./pages/BranchesPage";
import AuthContext from "./context/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    //exact làm cho chỉ khi ấn vào url đúng thì mới render ra page tương ứng
    <Switch>
      {!authCtx.isLoggedIn && (
        <Route path="/" exact>
          <Redirect to="/signup" />
        </Route>
      )}
      {authCtx.isLoggedIn && (
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
      )}
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
      <Route path="/products">
        {authCtx.isLoggedIn && <ProductsPage />}
        {!authCtx.isLoggedIn && <Redirect to="/signup" />}
      </Route>
      <Route path="/branches">
        {authCtx.isLoggedIn && <BranchesPage />}
        {!authCtx.isLoggedIn && <Redirect to="/signup" />}
      </Route>
    </Switch>
  );
};

export default App;
