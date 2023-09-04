import { Component } from "react";
import ErrorInformation from "./ErrorInformation";
import ErrorMessage from "./ErrorMessage";

class ErrorComponent extends Component{
    render(){
        return(
            <>
            <ErrorMessage/>
            <ErrorInformation/>
            </>
        )
    }
}

export default ErrorComponent