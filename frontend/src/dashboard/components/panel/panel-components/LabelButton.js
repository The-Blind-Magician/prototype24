import React from "react";

class LabelButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.buttonHandlerFromParent = this.props.onClick.bind(this);
    }

    buttonStyle = {
        width: '50px',
        height: '25px',
        borderRadius: '5px',
    };

    wrapperStyle = {
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        borderRadius: '5px',
    };

    labelStyle = {
        width: 'inherit',
        height: 'fit-content',
        textAlign: 'left',
        fontWeight: 'bold',
    };

    render() {
        const wrapperId = this.props.id + "-wrapper";
        const labelId = this.props.id + "-label";
        
        return (
            <div name={wrapperId} style={this.wrapperStyle} onClick={() => this.buttonHandlerFromParent(this.props.id)}>
                <div name={labelId} style={this.labelStyle}>{this.props.id}</div>
            </div>
        );
    }
} export default LabelButton;