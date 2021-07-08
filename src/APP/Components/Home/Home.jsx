import React from "react";
import Typical from "react-typical";
import Scroll from "./../Header/scroll/scroll";
import "./Home.css";
import Search from "./../mostuse/Search";
<<<<<<< HEAD
const Home = (props) => {
  const steps = [
    "Search About Your Dreams In Egypt.",
    9000,
    "With Egypt Tour Guide Everything Is Possiblel.",
    9000,
  ];
  return (
    <React.Fragment>
      <div className=" container-fluid  items p-0 m-0">
        <div className="row   m-0 p-0">
          <div className="row p-2 m-0 text-center text-white fs-4 font-weight-bold  ">
            <Typical wrapper="span" steps={steps} loop={100} />
          </div>
          <div className="row justify-content-center p-0 m-0">
            <Search
              data={[...props.city, ...props.adventure]}
              path={"/home"}
            ></Search>
          </div>
=======
const Home = props => {
  const steps = ["Search About Your Dreams In Egypt.",9000,"With Egypt Tour Guide Everything Is Possiblel.", 9000,];
  return (      
     <React.Fragment>
    <div className=" container-fluid  items p-0 m-0">
      <div className="row   m-0 p-0">
        <div className="row p-2 m-0 text-center text-white fs-4 font-weight-bold  ">
          <Typical wrapper="span" steps={steps} loop={100} />
        </div>
        <div className="row justify-content-center p-0 m-0">
        <Search
          data={  [...props.city,...props.adventure]}
         path={"/home"}
        ></Search>
>>>>>>> 488fdb50c68d1b003a02aa5a1ad54bb7770393ac
        </div>
      </div>
      <div id="scroll" className="container-fluid text-center p-0 m-0">
        <div className="row p-0 m-0">
          <div>
            <Scroll></Scroll>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </React.Fragment>
  );
};
=======
    </div>
  </React.Fragment> );
}
>>>>>>> 488fdb50c68d1b003a02aa5a1ad54bb7770393ac
export default Home;
