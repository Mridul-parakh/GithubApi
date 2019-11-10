import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Repository extends Component {
    constructor(props){
        super(props);
        this.state={
            description:"",
            name:"",
            repurl:"",
            datas:[],
            loading:true
        }
    }
    componentDidMount(){
        const url="https://api.github.com/users/"+this.props.location.name+"/repos";
        axios.get(url)
        .then(data=>{
            
            if(data.data){
                this.setState({datas:data.data})
            }
        })
    }
    render() {
        
        

        var repositories="";
        repositories=this.state.datas.map((data,index)=>{
            return(
                <section key={index} className="mbr-section content6 cid-rHpWJXJVLK" id="content6-b">
    
     
    
    <div className="container">
        <div className="media-container-row">
            <div className="col-12 col-md-8">
                <div className="media-container-row">
                    
                    <div className="media-content">
                        <div className="mbr-section-text">
                            <h1>{data.name}</h1>
                            <br/>
                            <h4>{data.description}</h4>
                        <h2><a href={data.clone_url} target="blank">Repository Url</a></h2>
                            <br/>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            )
        })
        return (
           <div>
               <h1 style={{color:"blue"}}>Github Repository</h1>
               <br/>
               <img src={this.props.location.avatar} style={{ height:"200px",width:"200px"}} alt="photos"/>
               <br/>
               <Link to="/"><button type="submit"  className="btn btn-danger">Back</button></Link>
                {repositories}
                </div>

   


        )
    }
}

export default Repository;
