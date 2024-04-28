import React from "react";

class FileInfoWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div id="fileNameField">File Name: {this.props.fileName}</div>
        );
    }
} export default FileInfoWrapper;