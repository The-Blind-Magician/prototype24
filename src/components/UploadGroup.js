import React from "react";
import FileIOButton from "./FileIOButton";
// import { Blue } from "../theme/Colors";


class UploadGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileSelector: null,
            fileName: "",
            fileText: "",
        };

        this.inputElement = document.createElement("input");
        this.inputElement.type = "file";
        this.inputElement.accept = ".txt";
        this.inputElement.id = "fileInput";

        this.inputElement.onchange = async (event) => {
            for (const file of event.target.files) {
                const text = await file.text();
                this.setState({fileName: file.name});
                this.setState({fileText: text});
                this.props.onFileChange(file.name, text);
            }
        }
    }

    uploadFileDialog(event) {
        this.inputElement.click();
    }

    moveFileToDevice(event) {
        console.log("Moving contents:\n" + this.state.fileText);
    }

    commitChanges(event) {
        console.log("Committing changes:\n" + this.state.fileText);
    }

    uploadGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        width: 'fit-content',
        gap: '0px',
    };

    render() {
        return (
            <div style={this.uploadGroupStyle}>
                <FileIOButton id="fileInput" text="Upload YAML File" ioHandler={this.uploadFileDialog.bind(this)} />
                <FileIOButton id="fileOutput" text="From Device" ioHandler={this.moveFileToDevice.bind(this)}/>
                <FileIOButton id="commitChanges" text="Commit Changes" ioHandler={this.commitChanges.bind(this)}/>
                <span> </span>
            </div>
        );
    }
} export default UploadGroup;