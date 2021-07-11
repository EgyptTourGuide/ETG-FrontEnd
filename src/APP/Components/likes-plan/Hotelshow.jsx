import React, { Component } from 'react'
import SingleHotel from './SingleHotel';
class Hotelshow extends Component {
    state = {  }
 
   
    render() { 
        return (  <>
        





        {this.props.hotel.map((hotels, ind) => {
                          return (
                            <React.Fragment key={ind}>
                              {hotels.hotel.rooms.map((room, indx) => {
                                return (
                                  <span className="col-12 col-xl-4 p-1 m-0 ">
                                  <SingleHotel room={room} indx={indx} hotels={hotels}></SingleHotel>
                                </span>
                                );
                              })}
                            </React.Fragment>
                          );
                        })}
          





        </>);
    }
}
 
export default Hotelshow;