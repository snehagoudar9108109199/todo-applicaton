import React from "react";
function Plan(props){
    return(
        <>
        <div className="row">
            <div className="col-8">
        <li>{props.value}</li>
        </div>
        <div className="col-4">
        <button className="btn btn-danger" onClick={()=>{props.sendFunc(props.id)}}>Delete</button>
        </div>
        </div>
    </>
    )
}
export default Plan;