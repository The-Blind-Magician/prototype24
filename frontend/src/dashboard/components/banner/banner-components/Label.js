import React from "react";

class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    labelStyle = {
        width: 'fit-content',
        height: 'fit-content',
    }

    render() {
        return (
            <div style={this.labelStyle}>
                <label>{this.props.text}</label>
            </div>
        );
    }
} export default Label;