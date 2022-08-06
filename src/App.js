import Home from "./Home/Home";
import Landing from "./Landing/Landing";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import EmailWizard from "./EmailWizard/EmailWizard";
import EmailInput from "./emailInput/EmailInput";
function App() {
  const history = useHistory();
  const [user, setUser] = useState("");
  useEffect(() => {
    const email = localStorage.getItem("email");
    setUser(email);
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        {!user ? <Landing /> : <Home />}
      </Route>
      <Route path="/home" exact>
        {user ? <Home /> : <Landing />}
      </Route>
      <Route path="/wizard" exact>
        {user ? <EmailWizard /> : <Landing />}
      </Route>
      <Route to="/input" exact>
        {user ? <EmailInput /> : <Landing />}
      </Route>
    </Switch>
  );
}

export default App;
