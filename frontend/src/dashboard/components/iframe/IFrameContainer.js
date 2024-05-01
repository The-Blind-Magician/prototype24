import React from "react";
import FileUploadApp from "../../../configuration/FileUploadApp"
import Test from "../../../test/Test"

class IFrameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    iframeDivStyle = {
        flex: "1 1 auto",
        border: "1px solid black",
    }

    iframeStyle = {
        width: '100%',
        height: '100%',
        border: 'none',
    }

    componentMap = {
        Configuration: FileUploadApp,
        Test: Test
    }

    emptyComponent = () => {
        return <div>Component not found in IFrameContainer.componentMap</div>;
    }

    renderComponent = (src) => {
        const Component = this.componentMap[src] || "";
        if (Component == "") {
            return this.emptyComponent();
        }
        else {
            return <Component />;
        }
    }

    render() {
        return (
            <div style={this.iframeDivStyle}>
                { this.renderComponent(this.props.src) }
            </div>
        );
    }
} export default IFrameContainer;