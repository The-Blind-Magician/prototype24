import React from "react";
import { Blue } from "../theme/Colors";

class FileIOButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.ioHandlerFromParent = this.ioHandlerFromParent.bind(this);
    }

    buttonStyle = {
        width: '50px',
        height: '25px',
        backgroundColor: Blue.secondaryDark,
        borderRadius: '5px',
    };

    wrapperStyle = {
        width: '100%',
        height: 'fit-content',
        // add 10px between elements
        // margin: '10px',
        // marginTop: '3px',
        marginBottom: '2px',
        marginLeft: '10px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        borderRadius: '5px',
        backgroundColor: Blue.primaryLight,
    };

    labelStyle = {
        width: 'inherit',
        height: 'fit-content',
        // center text
        textAlign: 'left',
        // make the text bold
        fontWeight: 'bold',
        color: Blue.secondaryDark
    };

    ioHandlerFromParent() {
        this.props.ioHandler();
    }

    render() {
        const buttonId = this.props.id + "Btn";

        return (
            <div style={this.wrapperStyle}>
                <button style={this.buttonStyle} id={buttonId} onClick={this.ioHandlerFromParent}></button>
                <div style={this.labelStyle}>{this.props.text}</div>
            </div>
        );
    }
} export default FileIOButton;