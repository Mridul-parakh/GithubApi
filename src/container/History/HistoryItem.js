import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class HistoryItem extends Component {
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
    componentDidMount(){
        const url="https://api.github.com/users/"+this.props.name;

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
                
                {profile}
            </div>
        )
    }
}

export default HistoryItem;
