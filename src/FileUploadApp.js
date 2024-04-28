import './FileUploadApp.css';
import React from 'react';
import TextBoxWrapper from './components/TextBoxWrapper';
import UploadGroup from './components/UploadGroup';
import { Blue } from './theme/Colors';

class FileUploadApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: "",
      fileText: "",
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
    color: Blue.secondaryDark,
  };

  /*
  This function is passed to the UploadGroup component as a callback function.
  The UploadGroup component will call this function with the file name and text
  as arguments. The function will then update the state of the TextBoxWrapper component,
  which will cause it to re-render with the new file name and text.
  
  NOTE: It is necessary to bind the TextBoxWrapper.key to the file name to force a re-render.
  */
  handleFileChange = (name, text) => {
    this.setState({fileName: name});
    this.setState({fileText: text});
  }


  /*
  The UploadGroup component is responsible for handling the file selection dialog
  and passing the file name and text to the parent component.
  The TextBoxWrapper component is responsible for displaying the file name and text for editing.

  NOTE: The file name and text are sent from the parent component to the TextBoxWrapper component, 
  not directly from the UploadGroup component.
  */
  render() {
    return (
      <div style={this.rootDivStyle}>
        <h1 style={this.headerStyle}>Load Configuration</h1>
        <UploadGroup id="uploadGroup" fileName={this.state.fileName} onFileChange={this.handleFileChange}/>
        <TextBoxWrapper id="tbWrapper" fileName={this.state.fileName} fileText={this.state.fileText} key={this.state.fileName}/>
      </div>
    );
  }
} export default FileUploadApp;
