//console.log("App loaded");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.messages=["message1","message2"];
    }

    render() {
        return (<Messages messages={this.messages}></Messages>);
    }
}