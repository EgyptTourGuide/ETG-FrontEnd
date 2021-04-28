import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Allhome from "./Components/Home/Allhome";
import "./App.css";
import axios from 'axios';
import Citypage from "./Components/Citypage/Citypage";
import Searchpage from './Components/mostuse/searchpage';
import Adventurepage from './Components/Citypage/Adventurepage';
import City from './Components/City/City';
import Register from "./Components/register/Register";
import LoginPhone from './Components/login/LoginPhone';
import Loading from "./Components/mostuse/loading";
import {backendurl} from "./Components/call-backend/URLs";
import { User} from "./Components/Context/Logincontext";

class App extends Component {
//     user: { name: "Clark", imgurl: "/images/man.png" },


  state = {
    user:JSON.parse(localStorage.getItem('user')),
    looding:true,
    city: [],
    adventure: [
      {
        id: 1,
        name: "asafary",
        city:"sadat city",
        media:"/images/12.jpg",
        description:
        "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
      
        rate: 5,
      },
      {
        id: 2,
        name: "diving",
        city:"shpeen elkom",
        media:"/images/13.jpg" ,
        description:
        "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
      
        rate: 1,
      },
      {
        id: 3,
        name: "ballon",
        city:"sadat city",
        media:"/images/8.jpg", 
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 3,
      },
      {
        id: 4,
        name: "safary",
        city:"sadat city",
        media:"/images/12.jpg",
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 1,
      },
      {
        id: 5,
        name: "diving",
        city:"red see",
        media:"/images/13.jpg",
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 2,
      },
      {
        id: 6,
        name: "ballon",
        city:"luxor",
        media:"/images/8.jpg", 
        description:
        "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
      
        rate: 1,
      },
      {
        id: 4,
        name: "safary",
        city:"sadat city",
        media:"/images/12.jpg",
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 1,
      },
      {
        id: 5,
        name: "diving",
        city:"red see",
        media:"/images/13.jpg",
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 2,
      },
      {
        id: 6,
        name: "ballon",
        city:"luxor",
        media:"/images/8.jpg", 
        description:
        "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
      
        rate: 1,
      },
      {
        id: 4,
        name: "safary",
        city:"sadat city",
        media:"/images/12.jpg",
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 1,
      },
      {
        id: 5,
        name: "diving",
        city:"red see",
        media:"/images/13.jpg",
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 2,
      },
      {
        id: 6,
        name: "ballon",
        city:"luxor",
        media:"/images/8.jpg", 
        description:
        "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
      
        rate: 1,
      },
      {
        id: 4,
        name: "safary",
        city:"sadat city",
        media:"/images/12.jpg",
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 1,
      },
      {
        id: 5,
        name: "diving",
        city:"red see",
        media:"/images/13.jpg",
        description:
          "is the capital and largest city of Egypt. The Cairo metropolitan area, with a population of 21.3 million, is the largest in Africa.",
        
        rate: 2,
      },
      {
        id: 6,
        name: "ballon",
        city:"luxor",
        media:"/images/8.jpg", 
        description:
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
  
  
  setuser = user =>{
    console.log(user)
    localStorage.setItem("user",JSON.stringify(user));
   // this.setState({user});
        }


  async componentDidMount(){
const { data }= await axios.get( `${backendurl}/cities`);

//set state
if(data){
 
   this.setState({city : data.cities});
   console.log(this.state.looding);
  this.setState({looding:false})
}


  }

  render() {
  
     console.log(this.state.user);
    
      if(!this.state.looding)
      {
    return (
      <User.Provider value={this.state.user}>

  <React.Fragment>
    
        <Switch>
       
          <Route
            path="/"
            exact
            render={props => (
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
            render={props => (
              <Citypage city={this.state.city} adventure={this.state.adventure} user={this.state.user} {...props}/>
            )}
          />
             <Route
            path="/adventure"
            exact
            render={props => (
              <Adventurepage city={this.state.city} adventure={this.state.adventure} user={this.state.user} {...props}/>
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
           <Route
            path="/city/:name"
            render={props => (
              <City city={this.state.city}  adventure={this.state.adventure} user={this.state.user}{...props} />
            )}
          />
 <Route
            path="/login"
            exact
            render={props => (
              <LoginPhone city={this.state.city}  adventure={this.state.adventure} setuser={this.setuser} user={this.state.user} {...props}/>
            )}
          />
            <Route
            path="/register"
            exact
            render={props => (
              <Register city={this.state.city}  adventure={this.state.adventure} user={this.state.user} {...props}/>
            )}
  
          />
          <Redirect from="/home" to="/" />
          <Redirect to="/notfound" />
         
        </Switch>
        </React.Fragment>
       
        </User.Provider>

        );
      }
      else{
        return(<Loading/>);
      }
  }
}

export default App;
