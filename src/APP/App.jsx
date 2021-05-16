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
import Profile from './Components/profile/Profile';
import Pleaselogin from "./Components/mostuse/MustLogin";


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
    // this.setState({user});
  };

  async componentDidMount() {
    const { data } = await axios.get(`${backendurl}/cities`);
    const adv = await axios.get(`${backendurl}/activity`);
    console.log(adv);
    //set state
    if (data && adv) {
      this.setState({
        city: data.cities,
        adventure: adv.data,
        alllooding: false,
      });
    }
  }

  render() {
    if (this.state.alllooding && this.state.city.length === 0) {
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
                path="/etg/:name"
                render={(props) =>
                  this.state.user ? (
                    <Profile
                   
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
                path="/mustlogin"
                exact
                component={Pleaselogin}
                ></Route>
              <Redirect from="/home" to="/" />

              {/* <Redirect to="/notfound" /> */}
            </Switch>
          </React.Fragment>
        </User.Provider>
      );
    }
  }
}

export default App;
