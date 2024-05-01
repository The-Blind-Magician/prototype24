import React from "react";
import Label from "./banner-components/Label";
import ProfileDropdown from "./banner-components/ProfileDropdown";

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    bannerStyle = {
        width: 'inherit',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '10px',
    }

    render() {
        return (
            <div style={this.bannerStyle}>
                <Label text="Banner" />
                <div style={{flex: '1'}}></div>
                <ProfileDropdown text="Profile Dropdown" />
            </div>
        );
    }
} export default Banner;