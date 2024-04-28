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

    moveFileToDevice(event) {
        console.log("Moving contents:\n" + this.state.fileText);
    }

    commitChanges(event) {
        console.log("Committing changes:\n" + this.state.fileText);
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
                <FileIOButton id="fileOutput" text="From Device" ioHandler={this.moveFileToDevice.bind(this)}/>
                <FileIOButton id="commitChanges" text="Commit Changes" ioHandler={this.commitChanges.bind(this)}/>
                <span> </span>
            </div>
        );
    }
} export default UploadGroup;