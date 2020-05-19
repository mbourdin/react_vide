//console.log("Messages Loaded");
class Messages extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                {
                this.props.messages.map(
                (message,index)=>
                <Message message={message} key={index}></Message>
                )
                }
            </div>

    );
    }
}