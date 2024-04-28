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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  rootDivStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: "column",
    backgroundColor: Blue.background,
  };

  headerStyle = {
    marginLeft: '10px',
    color: Blue.secondaryDark,
  };

  handleFileChange = (name, text) => {
    this.setState({fileName: name});
    this.setState({fileText: text});
  }

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
