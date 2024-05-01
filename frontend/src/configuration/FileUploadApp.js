import './FileUploadApp.css';
import React from 'react';
import { DateTime } from 'luxon';
import TextBoxWrapper from './components/text-display-components/TextBoxWrapper';
import UploadGroup from './components/fileIO-components/UploadGroup';
// import { Blue } from '../theme/Colors';

class FileUploadApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: "Select a file...",
      fileText: "Select a file...",
    };
  }

  rootDivStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: "column",
    // backgroundColor: Blue.background,
  };

  headerStyle = {
    marginLeft: '10px',
    // color: Blue.secondaryDark,
  };

  /*
  This function is passed to the UploadGroup component as a callback function.
  The UploadGroup component will call this function with the file name and text
  as arguments. The function will then update the state of the TextBoxWrapper component,
  which will cause it to re-render with the new file name and text.
  
  NOTE: It is necessary to bind the TextBoxWrapper.key to the file name to force a re-render.
  */
  handleFileChange = async (name, text) => {
    this.setState({fileName: name});
    this.setState({fileText: text});

    await this.state.fileText;
    await this.state.fileName;

    // console.log("File name: " + this.state.fileName);
    // console.log("File text: " + this.state.fileText);
  }


  /*
  The UploadGroup component is responsible for handling the file selection dialog
  and passing the file name and text to the parent component.
  The TextBoxWrapper component is responsible for displaying the file name and text for editing.

  NOTE: The file name and text are sent from the parent component to the TextBoxWrapper component, 
  not directly from the UploadGroup component.
  */

  //TODO - There is an issue when you retrieve the file from the device, then try to upload a new file. The new file is not uploaded a vice versa. 
  render() {
    return (
      <div style={this.rootDivStyle}>
        <h1 style={this.headerStyle}>Load Configuration</h1>
        <UploadGroup id="uploadGroup" fileName={this.state.fileName} onFileChange={this.handleFileChange} commitChanges={this.commitChanges}/>
        <TextBoxWrapper id="tbWrapper" fileName={this.state.fileName} fileText={this.state.fileText} key={this.state.fileName + Date.now()}/>
      </div>
    );
  }
} export default FileUploadApp;
