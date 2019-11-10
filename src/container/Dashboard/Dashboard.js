import React, { Component } from "react";
import "./Dashboard.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { pastuser} from '../../actions/dataAction';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
        name:'',
        avatar:'',
        profile:'',
        githublink:'',
        loading:true
    }
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
}
 checkProfile=()=>{
    const use=[
        ...this.props.user.user,
        this.state.name
    ]
    this.props.pastuser(use);
    
     const url="https://api.github.com/users/"+this.state.name;
    axios.get(url)
    .then(data=>{
        if(data.data.login){
            this.setState({
                profile:data.data.login,
                avatar:data.data.avatar_url,
                githublink:data.data.html_url,
                loading:false
            })
            
        }
        else{
            this.setState({
                loading:true
            })
        }
        
        
        
    })
    //console.log(this.state.name);
 }

  render() {
      var profile="";
      if(!this.state.loading){
          profile=(
              <div style={{textAlign:"center"}}>
                   <section className="mbr-section content6 cid-rHpWJXJVLK" id="content6-b">
    
     
    
    <div className="container">
        <div className="media-container-row">
            <div className="col-12 col-md-8">
                <div className="media-container-row">
                    <div className="mbr-figure" style={{width:"60%"}} >
                      <img src={this.state.avatar} alt="photos"/>  
                    </div>
                    <div className="media-content">
                        <div className="mbr-section-text">
                            <h1>{this.state.profile}</h1>
                            <br/>
                            <h2><a href={this.state.githublink} target="blank">GithubLink</a></h2>
                            <br/>
                            <Link  to={{
                                pathname:'/repo',
                                name:this.state.profile,
                                avatar:this.state.avatar,
                            }}><button type="submit" className="btn btn-primary">Repositories</button></Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
              </div>
          )
      }
    return (
      <div>
        <h1>Github profile Search</h1>

        
          <input type="text" name="name" value={this.state.name}
          onChange={(event) => this.changeHandler(event)}
           placeholder="Search.." 
           />
           <input type="submit" onClick={()=>this.checkProfile()} className="btn btn-success" />
           <Link  to="/history"><button type="submit" className="btn btn-danger">History</button></Link>
        {profile}
      </div>
    );
  }
}

Dashboard.propTypes={
    pastuser:propTypes.func.isRequired,
    
}

const mapStateToProps=(state)=>({
    user:state.user,
    
 });

export default connect(mapStateToProps,{pastuser})(withRouter(Dashboard));

