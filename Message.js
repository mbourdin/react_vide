console.log("Message loaded");
class Message extends React.Component {
    constructor(props) {
        super(props);
    }


        render(){
            return (
                <div>
                    {this.props.message}
                </div>
            );
        }
}