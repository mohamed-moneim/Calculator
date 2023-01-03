import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component { 
      nums = "";
     operation
  constructor(props){ 
    super(props) 
 
    // Set initial state 
    this.state = {nums: ""};
   
        
    // Binding this keyword 
    this.updateState = this.updateState.bind(this)
    }
    updateState = (p) => {
      if(!isNaN(p)){
        this.setState({nums: this.state.nums+""+p});

      }else{
      this.setState({nums: this.state.nums+" "+p+" "});
    }
  }


    addnum(props) {
      this.updateState(props)
        }

   sum() {
    const arr =  this.state.nums.split(" ");
    for(var x=0;x<=arr.length;x++){
      var num = 0
      var s = 0
      if(!isNaN(arr[x])){
        num = parseInt(arr[x])
      }else{
        if(arr[x]==="+"){
          s = parseInt(arr[x-1])+parseInt(arr[x+1])
          x+=2
            }else if(arr[x]==="*"){
              s = parseInt(arr[x-1])*parseInt(arr[x+1])
              x+=2
            }else if(arr[x]==="/"){
              s = parseInt(arr[x-1])/parseInt(arr[x+1])
              x+=2
        }
        else if(arr[x]==="-"){
          s = parseInt(arr[x-1])-parseInt(arr[x+1])
          x+=2
    }
    alert(num)
            }
    }
    this.setState({nums:s})
  }
  
  render(){
    return(
    <div>
      <div className="result">
<span>
       {this.state.nums}
      
       </span></div>
     <div className="flex-container">
  <div onClick={()=>this.addnum(1)}>1</div>
  <div onClick={()=>this.addnum(2)}>2</div>
  <div onClick={()=>this.addnum(3)}>3</div>  
  <div onClick={()=>this.addnum("+")}>+</div>  
</div>
<div className="flex-container">
  <div onClick={()=>this.addnum(4)}>4</div>
  <div onClick={()=>this.addnum(5)}>5</div>
  <div onClick={()=>this.addnum(6)}>6</div>  
  <div onClick={()=>this.addnum("-")}>-</div>  
</div>
<div className="flex-container">
  <div onClick={()=>this.addnum(7)}>7</div>
  <div onClick={()=>this.addnum(8)}>8</div>
  <div onClick={()=>this.addnum(9)}>9</div>  
  <div onClick={()=>this.addnum("*")}>*</div>  
</div>
<div className="flex-container">
  <div onClick={()=>this.op(0)}>0</div>
  <div onClick={()=>this.op(0)}>C.E.</div>
  <div onClick={()=>this.sum()}>=</div>  
  <div onClick={()=>this.addnum("/")}>/</div>  
</div>
</div>
    )
   }
}

export default App;
