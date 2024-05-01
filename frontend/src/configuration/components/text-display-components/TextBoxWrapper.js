import React from "react";
import FileInfoWrapper from "./FileInfoWrapper";
import FileIOButton from "../fileIO-components/FileIOButton";
// import { Blue } from "../theme/Colors";

class TextBoxWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: this.props.fileName,
            fileText: this.props.fileText,
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

    async saveFile(event) {
        console.log("Committing changes...");
        console.log("File name: " + this.state.fileName);
        console.log("File text: " + this.state.fileText);
    
        const data = {
            name: this.state.fileName,
            content: this.state.fileText,
        };
    
        await fetch("https://crispy-spork-xv577wq4g4r36w94-5000.app.github.dev/api/updateConfigFile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    render() {
        return (
            <div style={this.wrapperStyle}>
                <FileInfoWrapper id="fileInfoWrapper" fileName={this.state.fileName} key={this.state.fileName + "_tag"}/>
                <textarea style={this.textBoxStyle} id="fileText" defaultValue={this.state.fileText} key={this.props.fileName} 
                    onChange={async () => {
                        this.setState({fileText: document.getElementById("fileText").value});
                        await this.state.fileText;
                    }}
                />
                <FileIOButton id="saveButton" text="Save" ioHandler={this.saveFile.bind(this)} />
            </div>
        );
    }
} export default TextBoxWrapper;