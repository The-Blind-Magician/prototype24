import React from "react";
// import { Blue } from "../theme/Colors";

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
        // backgroundColor: Blue.secondaryDark,
        borderRadius: '5px',
    };

    wrapperStyle = {
        width: '100%',
        height: 'fit-content',
        marginBottom: '2px',
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        borderRadius: '5px',
    };

    labelStyle = {
        width: 'inherit',
        height: 'fit-content',
        textAlign: 'left',
        fontWeight: 'bold',
        // color: Blue.secondaryDark
    };

    ioHandlerFromParent() {
        this.props.ioHandler();
    }

    render() {

        const buttonId = this.props.id + "-btn";
        const wrapperId = this.props.id + "-wrapper";
        const labelId = this.props.id + "-label";

        return (
            <div name={wrapperId} style={this.wrapperStyle}>
                <button name={buttonId} style={this.buttonStyle} id={buttonId} onClick={this.ioHandlerFromParent}></button>
                <div name={labelId} style={this.labelStyle}>{this.props.text}</div>
            </div>
        );
    }
} export default FileIOButton;