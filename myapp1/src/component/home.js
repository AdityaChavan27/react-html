import React , {Component} from "react";
import './home.css';
import logo from './2.jpg';
class Home extends Component
{

render()
{
return(
<div>
<div className="topnav">
           <span style={{color:"white"}}>envato<span style={{color:"green"}}>market</span></span>
        <button className="btn1">Buy now</button>
    <span style={{color:"gray",fontsize:"20px" ,marginLeft:"40px"}} > x Remove Frame</span>
</div>

<div className="frontpage">

    <div className="imag">
    <img src={logo} alt="description of imag"></img>
    </div>


</div>
    <div className ="loginform">
        <h1> Welcome Back!</h1>
        <br/>
        <input type ="text" name="username" placeholder="Email Address/Mobile"style={{fontsize:"14pt"}}/>
        <br/>
        <br/>

        <input type ="text" name="Password" placeholder="Password" style={{fontsize:"14pt"}}/>
        <br/>
        <br/>

        <input type="checkbox" name="my-checkbox"/>
        <label>Remember password</label>
        <br/>
        <br/>

        <button className="btnsignin">Sign In</button>

        <p>Don't have an account? <span style={{color:"red"}}>Sign Up</span></p>

        <br/>
        <input type ="text" name="" placeholder=""/>
        <p><center><span className="span1">LOGIN WITH</span></center></p>
        <p><button className="btn5">Facebook </button></p>

        <p><button className="btn3">Google </button></p>

    </div>


</div>

);

}
}


export default Home;