import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component { 
      nums = [];
     operation
  constructor(props){ 
    super(props) 
 
    // Set initial state 
    this.state = {sum: 0};
   
        
    // Binding this keyword 
    this.updateState = this.updateState.bind(this)
    }
    updateState = (p) => {
      this.setState({sum: p});
    }


  addnum(props) {
    this.nums.push(props)
    }
   op(props) {
    this.operation = props
  }
   sum() {
    if(this.operation == "+"){
      this.updateState(parseInt(this.nums[this.nums.length-2])+parseInt(this.nums[this.nums.length-1]))
      console.log(this.state.sum)
    }else if(this.operation == "-"){
      this.updateState(parseInt(this.nums[this.nums.length-2])-parseInt(this.nums[this.nums.length-1]))
      console.log(this.state.sum)   
     }
    else if(this.operation == "*"){
      this.updateState(parseInt(this.nums[this.nums.length-2])*parseInt(this.nums[this.nums.length-1]))
      console.log(this.state.sum)   
     }
    else{
      this.updateState(parseInt(this.nums[this.nums.length-2])/parseInt(this.nums[this.nums.length-1]))
      console.log(this.state.sum)  
      }
  }
  
  render(){
    return(
    <div>
      <div class="result">
<span>
       {this.state.sum}
      
       </span></div>
     <div class="flex-container">
  <div onClick={()=>this.addnum(1)}>1</div>
  <div onClick={()=>this.addnum(2)}>2</div>
  <div onClick={()=>this.addnum(3)}>3</div>  
  <div onClick={()=>this.op("+")}>+</div>  
</div>
<div class="flex-container">
  <div onClick={()=>this.addnum(4)}>4</div>
  <div onClick={()=>this.addnum(5)}>5</div>
  <div onClick={()=>this.addnum(6)}>6</div>  
  <div onClick={()=>this.op("-")}>-</div>  
</div>
<div class="flex-container">
  <div onClick={()=>this.addnum(7)}>7</div>
  <div onClick={()=>this.addnum(8)}>8</div>
  <div onClick={()=>this.addnum(9)}>9</div>  
  <div onClick={()=>this.op("*")}>*</div>  
</div>
<div class="flex-container">
  <div onClick={()=>this.op(0)}>0</div>
  <div onClick={()=>this.op(0)}>C.E.</div>
  <div onClick={()=>this.sum()}>=</div>  
  <div onClick={()=>this.op("/")}>/</div>  
</div>
</div>
    )
   }
}

export default App;
