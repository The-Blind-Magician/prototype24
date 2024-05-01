import React from "react";
import FileIOButton from "./FileIOButton";

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
                await this.state.fileName;
                await this.state.fileText;
                /*
                This is a callback function that is passed from the parent component.
                This will pass the file name and text to the parent component 
                which will then update the state of the TextBoxWrapper component.
                */
                this.props.onFileChange(file.name, text);
            }
        }
    }

    /*
    This simulates a click on the "inputElement" element,
    which is invisible to the user, triggering a file selection dialog.
    */
    uploadFileDialog(event) {
        this.inputElement.click();
    }

    async getFileFromDevice(event) {
        const response = await fetch("https://crispy-spork-xv577wq4g4r36w94-5000.app.github.dev/api/getConfigFile");
        const data = await response.json();

        this.setState({fileName: data.name});
        this.setState({fileText: data.content});
        this.props.onFileChange(data.name, data.content);
    }

    uploadGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        gap: '0px',
    };

    /*
    The .bind method passes a pseudo-copy of the function to 
    the FileIOButton component, maintaining UploadGroup's ownership.
    Processing will be delegated back to UploadGroup's method with respect to it's own context.
    All arguments are passed through the "event" parameter.
    */
    render() {
        return (
            <div style={this.uploadGroupStyle}>
                <FileIOButton id="fileInput" text="Upload YAML File" ioHandler={this.uploadFileDialog.bind(this)} />
                <FileIOButton id="fileOutput" text="From Device" ioHandler={this.getFileFromDevice.bind(this)}/>
                <span> </span>
            </div>
        );
    }
} export default UploadGroup;