import { Component } from "react";
import './error-message.css'


export default class ErrorMessage extends Component {


    render() {

        
        const { message, type } = this.props;
        const style = {};
        switch (type) {
            case "error": style.backgroundColor = '#E99A9A'; break;
            case "info": style.backgroundColor = '#6BD4F7'; break;
            default: style.backgroundColor = '#eee'; break;
        }
        return (
            <div className="message-alert" style={style}>{message}</div>
        )
    }
}