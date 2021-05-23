
import React, { Component } from 'react'
import $ from "jquery";
import InsideData from './Data';
import { HandelFilter } from './../mostuse/handelfilter';
import'./City.css'
import Loading from '../mostuse/loading';
class Places extends Component {
    state = { places:this.props.places, filter:this.props.places , from:"",start:"",to:"", error:"" }



    handelchange=e=>{
        var state={...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state)
    }
    filter=e=>{
        e.preventDefault();
        const from=new Date(this.state.from);
        const to=new Date(this.state.to);
        if(from && to && to>from){
            
       this.setState({start:this.state.from})
      
        const time=(to.getTime()-from.getTime())/(1000 * 3600 * 24)+1;
        var filter=HandelFilter(this.state.places,from);
        this.setState({filter ,error:""})
            $("#VisitDuration").hide();
            $("#aforyou").fadeIn();
        }
        else{
        var error=" *Please enter correct Visit Duration ";
        this.setState({error})    
        }
    }
    handelnext=()=>{

        var start=new Date(this.state.start);
        var from=new Date(this.state.from);
        var fulldate="";
        if( start.getTime() < (new Date(this.state.to).getTime()-49766400))
        {
           start=new Date(start.setDate(start.getDate() + 1));
           fulldate=start.getFullYear()+"-"+(start.getMonth()+1)+"-"+start.getDate();
           this.setState({start:fulldate})
           var filter=HandelFilter(this.state.places,start);
           this.setState({filter})
           
        }
        }
        handelback=()=>{

            var start=new Date(this.state.start);
            var from=new Date(this.state.from);
            var fulldate="";
            if(from.getTime()<= start.getTime()-49766400 && start.getTime() <= (new Date(this.state.to).getTime()))
            {
               start=new Date(start.setDate(start.getDate() -1));
               fulldate=start.getFullYear()+"-"+(start.getMonth()+1)+"-"+start.getDate();
               this.setState({start:fulldate})
               var filter=HandelFilter(this.state.places,start);
               this.setState({filter})
               
            }
            }

            handelupdate=()=>{
                $("#aforyou").hide();
                $("#VisitDuration").fadeIn();
                
            }
    render() { 
        if(this.state.filter.length>0){
        return (
        <React.Fragment>
            <form  id="VisitDuration">
                <div className="d-flex align-items-center justify-content-center  flex-wrap">
                    <div className="text-center w-100">
                        <h4 className="p-0 m-1 w-100 text-white" >Visit Duration</h4>
                        <span className="text-danger ">{this.state.error}</span>
                    </div>

            <div className=" text-start  p-0 m-1">
            <label className=" text-white p-0 m-0 fs-5 mx-2" htmlFor="from">
               From
              </label>
             <input
                name="from"
                onChange={this.handelchange}
                className=" input p-2"
                type="date"
                placeholder="From"
                id="from"
                style={{width:"30vw"}}
              /> 
             
            </div>
            <div className="  text-start  p-0 m-1">
            <label className=" text-white p-0 m-0 fs-5 mx-2" htmlFor="to">
               to
              </label>
             <input
                name="to"
                onChange={this.handelchange}
                className=" input p-2"
                type="date"
                placeholder="To"
                id="to"
                style={{width:"30vw"}}
              /> 
             
            </div>
          
            <div>
            <button className="data-btn m-1" onClick={this.filter} style={{height:"35px",fontSize:"22px"}}>Go</button>

            </div>
            </div>
            </form>
<span id="aforyou">
<div  className=" d-flex text-white align-items-center justify-content-center  p-0 m-0 my-1 flex-wrap">
   <div className="w-100 text-center text-white align-items-center">
       <h2 className="d-inline">Prepared all available for you</h2>
       <i className="update-icon d-inline fas fa-pencil-alt p-0 mx-1 m-0" style={{fontSize:"20px"}} onClick={this.handelupdate}></i>
    </div>
    <div className="mx-3 m-0 p-0 align-items-center">
    <i className="a-arrow fas fa-chevron-left  fa-lg" onClick={this.handelback}></i>
    </div>
    <div><h3 className="p-0 m-0">{this.state.start}</h3></div>
    <div className="mx-3 m-0 p-0 align-items-center">
    <i className="a-arrow fas fa-chevron-right fa-lg " onClick={this.handelnext}></i>
    </div>
</div>
</span>
<InsideData data={this.state.filter} type={`place`}/>


        </React.Fragment>  );
        }
        else{
            return(<Loading/>)
            
        }    
}
}
 
export default Places;