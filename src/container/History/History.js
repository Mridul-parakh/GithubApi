import React, { Component } from 'react';
import HistoryItem from './HistoryItem';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

class History extends Component {
    constructor(props){
        super(props);
        this.state={
            name:[]
        }
    }
    // componentDidMount(){
    //     const user=this.props.user.user.map(data=>{
    //         <HistoryItem name={data}/>
    //     })

    // }
    render() {
        var user="";
        console.log(this.props.user.user);
       if(this.props.user)
         user=this.props.user.user.map((data,index)=>{
           
            return <HistoryItem key={index} name={data}/>
        })
       
        return (
            <div>
                <Link to="/"><button type="submit"  className="btn btn-danger">Back</button></Link>
                {user}
            </div>
        )
    }
}

History.propTypes={
 
    user:propTypes.object.isRequired,
  
  }
const mapStateToProps=state=>({
    user:state.user
  })

export default connect(mapStateToProps,{})(withRouter(History));
