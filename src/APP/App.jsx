import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Allhome from "./Components/Home/Allhome";
import "./App.css";
import axios from "axios";
import Citypage from "./Components/Citypage/Citypage";
import Searchpage from "./Components/mostuse/searchpage";
import Adventurepage from "./Components/Citypage/Adventurepage";
import City from "./Components/City/City";
import Register from "./Components/register/Register";
import LoginPhone from "./Components/login/LoginPhone";
import Loading from "./Components/mostuse/loading";
import { backendurl } from "./Components/call-backend/URLs";
import { User } from "./Components/Context/Logincontext";
import Place from "./Components/Details/Place";
import Hotel from "./Components/City/hotel";
import LikesPlan from "./Components/likes-plan/Likes-Plan";
import Profile from "./Components/profile/Profile";
import Pleaselogin from "./Components/mostuse/MustLogin";
import Adventure from "./Components/delight/adventure";
import Tour from "./Components/Tour/Tour";
import Room from "./Components/City/Room";
import Notifications from "./Components/notifications/Notifications";
import Notfound404 from './Components/404/Notfound404';
import Plans from './Components/plan/Plans';
import Plan from './Components/plan/Plan';
import ProfilePlan from './Components/likes-plan/ProfilePlan';
class App extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),
    alllooding: true,
    city: [],
    adventure: [],
  };
  constructor(props) {
    super(props);
    /*sort from small rate to pest rate --to city--*/
    let city = this.state.city;
    city.sort((a, b) => {
      return b.rate - a.rate;
    });
    this.tosetstate = (city) => {
      this.setState({ city });
    };

    /*end sort*/
    /*sort from pest rate to small rate --to adventure--*/
    let adventure = this.state.adventure;
    adventure.sort((a, b) => {
      return b.rate - a.rate;
    });
    this.tosetstate = (adventure) => {
      this.setState({ adventure });
    };

    /*end sort*/
  }
  setuser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({ user });
  };
  async componentDidMount() {
    await axios.get(`${backendurl}/cities`).then((res) => {
      this.setState({ city: res.data.cities });
    });
    await axios.get(`${backendurl}/activity`).then((res) => {
      this.setState({ adventure: res.data });
    });

    if (this.state.city.length > 0 || this.state.adventure.length > 0) {
      this.setState({ alllooding: false });
    }
  }

  render() {
    if (this.state.alllooding) {
      return (
        <>
          <div className="full-screen-err">
            <Loading />
          </div>
        </>
      );
    } else {
      return (
        <User.Provider value={this.state.user}>
          <React.Fragment>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Allhome
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/city"
                exact
                render={(props) => (
                  <Citypage
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/adventure"
                exact
                render={(props) => (
                  <Adventurepage
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/:name/search/:name"
                render={(props) => (
                  <Searchpage
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/:name/search"
                render={(props) => (
                  <Searchpage
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/city/:id"
                render={(props) => (
                  <City
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/login"
                exact
                render={(props) =>
                  this.state.user ? (
                    <Redirect to="/" />
                  ) : (
                    <LoginPhone
                      setuser={this.setuser}
                      city={this.state.city}
                      adventure={this.state.adventure}
                      setuser={this.setuser}
                      user={this.state.user}
                      {...props}
                    />
                  )
                }
              />
              )
              <Route
                path="/register"
                exact
                render={(props) => (
                  <Register
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/place/:id"
                exact
                render={(props) => (
                  <Place
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/room/:id/:hid"
                exact
                render={(props) => (
                  <Room
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/hotel/:id"
                exact
                render={(props) => (
                  <Hotel
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/adventure/:id/:cid?"
                render={(props) => (
                  <Adventure
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/visitplanner"
                exact
                render={(props) => (
                  <Tour
                    setuser={this.setuser}
                    city={this.state.city}
                    adventure={this.state.adventure}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                path="/in/:name"
                exact
                render={(props) =>
                  this.state.user ? (
                    <LikesPlan
                      setuser={this.setuser}
                      city={this.state.city}
                      adventure={this.state.adventure}
                      user={this.state.user}
                      {...props}
                    />
                  ) : (
                    <Redirect to="/mustlogin" />
                  )
                }
              />
              <Route
                path="/notifications"
                exact
                render={(props) =>
                  this.state.user ? (
                    <Notifications
                      setuser={this.setuser}
                      city={this.state.city}
                      adventure={this.state.adventure}
                      user={this.state.user}
                      {...props}
                    />
                  ) : (
                    <Redirect to="/mustlogin" />
                  )
                }
              />
              <Route
                path="/etg/:name"
                exact
                render={(props) =>
                  this.state.user ? (
                    <Profile
                      setuser={this.setuser}
                      city={this.state.city}
                      adventure={this.state.adventure}
                      user={this.state.user}
                      {...props}
                    />
                  ) : (
                    <Redirect to="/mustlogin" />
                  )
                }
              />
              <Route
                path="/etg/plan/:id"
                exact
                render={(props) =>
                  this.state.user ? (
                    <ProfilePlan
                      setuser={this.setuser}
                      city={this.state.city}
                      adventure={this.state.adventure}
                      user={this.state.user}
                      {...props}
                    />
                  ) : (
                    <Redirect to="/mustlogin" />
                  )
                }
              />
              <Route
                path="/trip"
                exact
                render={(props) =>
                    <Plans
                      setuser={this.setuser}
                      city={this.state.city}
                      adventure={this.state.adventure}
                      user={this.state.user}
                      {...props}
                    />}
              />
               <Route
                path="/plan/:id"
                exact
                render={(props) =>
                    <Plan
                      setuser={this.setuser}
                      city={this.state.city}
                      adventure={this.state.adventure}
                      user={this.state.user}
                      {...props}
                    />}
              />
              <Route path="/mustlogin" exact component={Pleaselogin}></Route>
              <Route path="/404" component={Notfound404}></Route>
              <Redirect from="/home" to="/" />
               <Redirect to="/404" />
            </Switch>
          </React.Fragment>
        </User.Provider>
      );
    }
  }
}

export default App;
