import { Component } from "react";
import {Link} from "react"

class ErrorBoundary extends Component{
    state = {hasError: false}
    constructor(props){
    super(props)
    this.celebrateError = this.celebrateError.bind(this)

}
    static getDerivedStateFromError(){
        return {hasError:true}
    }
    componentDidCatch(error,info){
        console.error("catched error",error,info)
    }
    componentDidMount(){}
    componentWillUnmount(){}
    componentDidUpdate(){}
    celebrateError=()=>{
        this.setState({
            celebration:"error celebration"
        })
    }

    render(){
        if(this.state.hasError){
            return (
               <div className="error-boundary" onClick={this.celebrateError}>
                <h2>uh oh!</h2>
                <p>There was an error with this page <Link to="/">Click here</Link> to go back to home page</p>
               </div>
            )
        }
    }
}
export default ErrorBoundary;