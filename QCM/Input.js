class Input extends React.Component{
    constructor(props) {
        super(props);
    }
    toParent=(event)=>{
        this.props.toParent(event)
    }
    render() {
        let jsx=<div><div>
            <label>{this.props.label}</label>
            <input type={this.props.type} required={this.props.required} onChange={this.toParent}/>
        </div>
        {
            (this.props.showAlert) && (this.props.isValid === false) && <div>invalid input</div>
        }
        </div>
        return (
           jsx
        );
    }
}