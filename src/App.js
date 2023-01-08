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
    var sum;
    var sum2
    for(var x=0;x<=arr.length;x++){
      if(arr[x]=="*"){
         sum = parseInt(arr[x-1])*parseInt(arr[x+1])
         arr[x] = sum;
         arr.splice(x+1,1);
         arr.splice(x-1, 1);
         x = 0;

    }
  }
  for(var x=0;x<=arr.length;x++){
    if(arr[x]=="/"){
       sum = parseInt(arr[x-1])/parseInt(arr[x+1])
       arr[x] = sum;
       arr.splice(x+1, 1);
       arr.splice(x-1, 1);
       x = 0;


  }
}
for(var x=0;x<=arr.length;x++){
  if(arr[x]=="+"){
    sum = parseInt(arr[x-1])+parseInt(arr[x+1])
    arr[x] = sum;
    arr.splice(x+1, 1);
    arr.splice(x-1, 1);
    x = 0;


}
}
for(var x=0;x<=arr.length;x++){
  if(arr[x]=="-"){
    sum = parseInt(arr[x-1])-parseInt(arr[x+1])
    arr[x] = sum;
    arr.splice(x+1, 1);
    arr.splice(x-1, 1);
    x = 0;


}
}
console.log(arr)
  this.setState({nums:arr[0]})

}
clear(){
  this.setState({nums:""})

}
  
  render(){
    return(
    <div>
      <Helmet>
          <title>tienda de ropa</title>
          <meta name="description" content="Home de la tienda" />
          <meta property="og:url"              content="http//www.meawhat.tk" />
          <meta property="og:type"               content="Calculator" />
          <meta property="og:title"              content="Simple Calculator in React" />
          <meta property="og:description"        content="Mohamed's Calculator" />
          <meta property="og:image"              content="http//www.meawhat.tk/download.png" />
      </Helmet>
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
  <div onClick={()=>this.addnum(0)}>0</div>
  <div onClick={()=>this.clear()}>C.E.</div>
  <div onClick={()=>this.sum()}>=</div>  
  <div onClick={()=>this.addnum("/")}>/</div>  
</div>
</div>
    )
   }
}

export default App;
