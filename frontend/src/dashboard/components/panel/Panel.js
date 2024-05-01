import React from "react";
import LabelButton from "./panel-components/LabelButton";

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    panelStyle = {
        width: 'fit-content',
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
        marginRight: '10px',
        flex: '0 1 auto',
    }

    adminButtons = [
        "Configuration",
        "Test",
        "Button 3",
    ]

    render() {
        return (
            <div style={this.panelStyle}>
                {this.adminButtons.map((button) => {
                    return <LabelButton key={button} id={button} onClick={this.props.updateComponent.bind(this)}/>
                })}
                <div style={{flex: '1'}}></div>
                <LabelButton id="Button 4" onClick={this.props.updateComponent.bind(this)}/>
                <LabelButton id="Button 5" onClick={this.props.updateComponent.bind(this)}/>
            </div>
        );
    }
} export default Panel;