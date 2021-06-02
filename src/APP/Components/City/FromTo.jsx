import React, { Component } from 'react'
class Fromto extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            
            <div className="col-6 text-start  p-0 me-1 m-0">
                <label className=" text-white p-0 m-0 fs-5 mx-2" htmlFor="from">
                  From
                </label>
                <input
                  name="from"
                  onChange={this.props.handelchange}
                  className=" input p-2"
                  type="date"
                  placeholder="From"
                  id="from"
                 
                  value={this.props.from}
                />
              </div>
              <div className="col-6  text-start ms-1 p-0 m-0">
                <label className=" text-white p-0 m-0 fs-5 mx-2" htmlFor="to">
                  to
                </label>
                <input
                  name="to"
                  onChange={this.props.handelchange}
                  className=" input p-2"
                  type="date"
                  placeholder="To"
                  id="to"
                 
                  value={this.props.to}
                />
              </div>
        </React.Fragment> );
    }
}
 
export default Fromto;