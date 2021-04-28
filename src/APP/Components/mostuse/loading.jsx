import React from 'react'

import './mostuse.css'
const Loading = () => {
    return ( 
        <React.Fragment>         
<div className="loading container-fluid d-flex text-center align-items-center">
<div className=" row text-center align-items-center">
<div className="text-center text-white">
        <span className="le font-face-rh ">Egypt</span>
        <br/>
        <span className="ltg font-face-ab">TOUR GUIDE</span>
      </div>
<div id="loadingIndicator">
	<div class="loadingBar" id="loadingBar1"></div>
	<div class="loadingBar" id="loadingBar2"></div>
	<div class="loadingBar" id="loadingBar3"></div>
	<div class="loadingBar" id="loadingBar4"></div>
</div>
</div>
</div>
        </React.Fragment>
     );
}
 
export default Loading;