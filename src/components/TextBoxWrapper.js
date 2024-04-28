import React from "react";
import FileInfoWrapper from "./FileInfoWrapper";
import { Blue } from "../theme/Colors";

class TextBoxWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    wrapperStyle = {
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        flex: "1 1 auto",
    };

    textBoxStyle = {
        "flex": "1 0 auto",
        resize: 'none',
        // backgroundColor: Blue.primaryLight,
    };

    render() {
        return (
            <div style={this.wrapperStyle}>
                <FileInfoWrapper id="fileInfoWrapper" fileName={this.props.fileName} key={this.props.fileName + "_tag"}/>
                <textarea style={this.textBoxStyle} id="fileText" defaultValue={this.props.fileText}/>
            </div>
        );
    }
} export default TextBoxWrapper;