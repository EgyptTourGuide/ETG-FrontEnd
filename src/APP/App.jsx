import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Allhome from "./Components/Home/Allhome";
import "./App.css";
import City from "./Components/City/City";
import Searchpage from './Components/mostuse/searchpage';
import Adventure from './Components/City/Adventure';

class App extends Component {
  state = {
    user: { name: "Clark", imgurl: "/images/man.png" },
    city: [
      {
        id: 1,
        name: "egypt",
        urlimg: "/images/1.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 2,
        name: "egypt",
        urlimg: "/images/2.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 3,
        name: "Alex",
        urlimg: "/images/5.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 4,
        name: "Cairo",
        urlimg: "/images/3.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 4,
      },
      {
        id: 5,
        name: "egypt",
        urlimg: "/images/8.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 6,
        name: "egypt",
        urlimg: "/images/9.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 3,
      },
      {
        id: 7,
        name: "alex",
        urlimg: "/images/10.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 2,
      },
      {
        id: 8,
        name: "cairo",
        urlimg: "/images/11.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 1,
      },
      {
        id: 9,
        name: "egypt",
        urlimg: "/images/1.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 10,
        name: "egypt",
        urlimg: "/images/2.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 11,
        name: "alex",
        urlimg: "/images/5.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 12,
        name: "cairo",
        urlimg: "/images/3.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 4,
      },
      {
        id: 13,
        name: "egypt",
        urlimg: "/images/8.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 5,
      },
      {
        id: 14,
        name: "egypt",
        urlimg: "/images/9.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 3,
      },
      {
        id: 15,
        name: "alex",
        urlimg: "/images/10.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 2,
      },
      {
        id: 16,
        name: "cairo",
        urlimg: "/images/11.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        rate: 1,
      },
    ],
    adventure: [
      {
        id: 1,
        name: "asafary",
        city:"sadat city",
        urlimg: "/images/12.jpg",
        about:
        "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
      
        rate: 5,
      },
      {
        id: 2,
        name: "diving",
        city:"shpeen elkom",
        urlimg: "/images/13.jpg",
        about:
        "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
      
        rate: 1,
      },
      {
        id: 3,
        name: "ballon",
        city:"sadat city",
        urlimg: "/images/8.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 3,
      },
      {
        id: 4,
        name: "safary",
        city:"sadat city",
        urlimg: "/images/12.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 1,
      },
      {
        id: 5,
        name: "diving",
        city:"red see",
        urlimg: "/images/13.jpg",
        about:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 2,
      },
      {
        id: 6,
        name: "ballon",
        city:"luxor",
        urlimg: "/images/8.jpg",
        about:
        "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
      
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


  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Allhome
                city={this.state.city}
                user={this.state.user}
                adventure={this.state.adventure}
                {...props}
              />
            )}
          />
          <Route
            path="/city"
            exact
            render={props => (
              <City city={this.state.city} user={this.state.user} {...props}/>
            )}
          />
             <Route
            path="/adventure"
            exact
            render={props => (
              <Adventure adventure={this.state.adventure} user={this.state.user} {...props}/>
            )}
          />
            <Route
            path="/:name/search/:name"
            render={props => (
              <Searchpage city={this.state.city}  adventure={this.state.adventure} user={this.state.user}{...props} />
            )}
          />
            <Route
            path="/:name/search"
            render={props => (
              <Searchpage city={this.state.city}  adventure={this.state.adventure} user={this.state.user}{...props} />
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
