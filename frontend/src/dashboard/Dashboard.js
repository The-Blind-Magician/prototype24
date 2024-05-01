import React from "react";
import Panel from "./components/panel/Panel";
import Banner from "./components/banner/Banner";
import IFrameContainer from "./components/iframe/IFrameContainer";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedComponent: "Configuration",
        };
    }

    dashboardDivStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }

    hDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
    }

    vDivStyle = {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 auto',
        padding: '10px',
    }

    updateComponent = (component) => {
        this.setState({selectedComponent: component});
    }

    render() {
        return (
            <div style={this.dashboardDivStyle}>
            <div style={this.hDivStyle}>
                <Banner />
                <div style={this.vDivStyle}>
                    <Panel updateComponent={this.updateComponent.bind(this)}/>
                    <IFrameContainer src={this.state.selectedComponent} key={this.state.selectedComponent} title="IFrame" />
                    </div>
                </div>
            </div>
        );
    }
} export default Dashboard;