import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card col-lg-3 col-md-4" style={{width:"18rem",padding:"0",cursor:"pointer"}}>
        <img src={props.img} className="card-img-top" alt="img" />
        <div className="container tags" style={{marginTop:"7px"}}>
          {props.basement===true?<span class="tag tag-teal" style={{width:"5rem",marginRight:"6px"}}>Basement</span>:""}
          {props.firstFloor===true?<span class="tag tag-teal" style={{width:"5rem",marginRight:"6px"}}>First Floor</span>:""}
          {props.secondFloor===true?<span class="tag tag-teal" style={{width:"5rem"}}>second Floor</span>:""}
        </div>
        <div className="card-body">
            <h5 className="card-title">Rent: ₹{props.rent.toLocaleString("hi-IN")}/month</h5>
            <h5 className="card-title">City: {props.city}</h5>
        </div>
    </div>
  )
}

export default Card