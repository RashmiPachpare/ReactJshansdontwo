import React, { Component } from 'react'
import "./Class.css"

export default class ClassCompo extends Component {
  
    state = {
        name: "",
        dept: "",
        rating:"",
        data: []
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : [e.target.value]})
        this.setState({[e.target.department] :[ e.target.value]})
        this.setState({[e.target.rating] :[ e.target.value]})
        
    }

    handleSubmit = () => {
        const ObjData = {
            name: this.state.name,
            dept: this.state.dept,
            rating:this.state.rating
        }
        const arr = this.state.data;
        arr.push(ObjData);
        this.setState({[this.state.data]: arr})
    
        console.log(this.state.name);
        console.log(this.state.data);
    }

    render(){
        return (
          <>   
          {/* <div className='inputfield'>      */}
            <label id="name">NAME:</label>
            <input placeholder="Enter Name" name="name" onChange={this.handleChange} id="n" />
            <label id="dept">DEPARTMENT:</label>
            <input placeholder="Enter Dept" name="dept" onChange={this.handleChange} id="d" />
            <label id="rating">RATINGS:</label>
            <input placeholder="Enter rating" name="rating" onChange={this.handleChange} id="r" />

            <button onClick={this.handleSubmit} id="btn">Submit</button>
            {/* </div> */}

            <div className='parent'>
            {this.state.data.map((item, index) => {
                return(
                    <div className='field'> 
                    <p key={index}> Name:{item.name} || Department: {item.dept} || Rating:{item.rating}</p>
                    </div>
                )
            })}
            </div>
            </>

    
        )
    }
}


