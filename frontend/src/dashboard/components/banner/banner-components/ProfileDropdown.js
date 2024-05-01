import React from "react";

class ProfileDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    profileDropdownStyle = {
        width: 'fit-content',
        height: 'fit-content',
    }

    render() {
        return (
            <div style={this.profileDropdownStyle}>
                <label>{this.props.text}</label>
            </div>
        );
    }
} export default ProfileDropdown;