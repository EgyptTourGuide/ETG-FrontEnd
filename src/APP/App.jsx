import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Allhome from "./Components/Home/Allhome";
import "./App.css";
import City from "./Components/City/City";

class App extends Component {
  state = {
    user: { name: "Clark", imgurl: "/images/man.png" },
    city: [
      {
        id: 1,
        cityname: "egypt",
        urlimg: "/images/1.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 2,
        cityname: "egypt",
        urlimg: "/images/2.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 3,
        cityname: "Alex",
        urlimg: "/images/5.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 4,
        cityname: "Cairo",
        urlimg: "/images/3.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 4,
      },
      {
        id: 5,
        cityname: "egypt",
        urlimg: "/images/8.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 6,
        cityname: "egypt",
        urlimg: "/images/9.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 3,
      },
      {
        id: 7,
        cityname: "alex",
        urlimg: "/images/10.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 2,
      },
      {
        id: 8,
        cityname: "cairo",
        urlimg: "/images/11.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 1,
      },
      {
        id: 9,
        cityname: "egypt",
        urlimg: "/images/1.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 10,
        cityname: "egypt",
        urlimg: "/images/2.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 11,
        cityname: "alex",
        urlimg: "/images/5.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 12,
        cityname: "cairo",
        urlimg: "/images/3.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 4,
      },
      {
        id: 13,
        cityname: "egypt",
        urlimg: "/images/8.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 14,
        cityname: "egypt",
        urlimg: "/images/9.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 3,
      },
      {
        id: 15,
        cityname: "alex",
        urlimg: "/images/10.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 2,
      },
      {
        id: 16,
        cityname: "cairo",
        urlimg: "/images/11.jpg",
        about:
          "is the capital and largest-city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 1,
      },
    ],
    adventure: [
      {
        id: 1,
        advname: "Safary",
        urlimg: "/images/12.jpg",
        about: "egypt",
        rate: 5,
      },
      {
        id: 2,
        advname: "Diving",
        urlimg: "/images/13.jpg",
        about: "red sea",
        rate: 1,
      },
      {
        id: 3,
        advname: "Ballon",
        urlimg: "/images/8.jpg",
        about: "luxor",
        rate: 3,
      },
      {
        id: 4,
        advname: "Safary",
        urlimg: "/images/12.jpg",
        about: "egypt",
        rate: 1,
      },
      {
        id: 5,
        advname: "Diving",
        urlimg: "/images/13.jpg",
        about: "red sea",
        rate: 2,
      },
      {
        id: 6,
        advname: "Ballon",
        urlimg: "/images/8.jpg",
        about: "luxor",
        rate: 1,
      },
    ],
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

  toupdatestate = (fillstar, strokesta) => {
    this.setState({ fillstar });
    this.setState({ strokesta });
  };
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Allhome
                city={this.state.city}
                user={this.state.user}
                adventure={this.state.adventure}
              />
            )}
          />
          <Route
            path="/city"
            exact
            render={() => (
              <City city={this.state.city} user={this.state.user} />
            )}
          />
          <Redirect from="/home" to="/" />
          <Redirect to="/notfound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
