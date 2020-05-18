class Select extends React.Component{
    constructor(props) {
        super(props);
        this.state={submitted:true};
        console.log(this.props)
    }
    onChange=(event)=>{

        //console.log(event.currentTarget.value+" "+this.props.question.response)
        let score=0;
        if(event.target.value==this.props.question.response)
        {
            score=1
        }
        //console.log(score+","+this.props.questionId)
        this.props.sendScore(score,this.props.questionId);
    }

    render() {
        let jsx= <div>
            <h2>{this.props.question.title}</h2>
            <select
                name={this.props.question.name}
                onChange={this.onChange}>
                {
                    this.props.question.choices.map((choice,index)=>{
                        return (<option key={index} value={index}>{choice}</option>)
                        }
                    )
                }
        </select>
            <div>
                {
                    this.state.submitted && <div>{this.props.question.feedback}</div>
                }
            </div>
        </div>;
        return (
           jsx
        );
    }
}