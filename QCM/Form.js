class Form extends React.Component{
    constructor(props) {
        super(props);
        this.questions=[];
        let index=0;
        for(let question in this.props.questions)
        {   let q=this.props.questions[question];
            q.score=0;
            this.questions.push(q);
        }
        this.state={submitted:false,score:0}


    }
    recieveScore=(score,index)=>{
        this.questions[index].score=score;
        let tempScore=0;
        for(let question of this.questions)
        {
            tempScore+=question.score;
        }
        this.setState({score:tempScore});
    }

    typeSwitch(question,index)
    {
        switch(question.type)
        {
            case "select" :
                return (
                    <Wrapper key={index}>
                    <Select
                        question={question}
                        key={index}
                        questionId={index}
                        sendScore={this.recieveScore}
                        submitted={this.state.submitted}
                    />
                    </Wrapper>
                );
            //break;
            case "radio" :
                return (
                    <Wrapper key={index}>
                    <Radio
                        question={question}
                        key={index}
                        questionId={index}
                        sendScore={this.recieveScore}
                        submitted={this.state.submitted}
                    />
                    </Wrapper>
                )

                //break;
            default:
                return (
                    <div></div>
                );
                //break;
        }
    }
    handleSubmit=(event)=>
    {
        event.preventDefault();
        this.setState({submitted:true})
    }
    render(){


        return (
            <form>
                <h1>QCM</h1>
                <Input type="email" title="Enter votre Email"></Input>
                {this.questions.map(
                (question, index) =>
                {
                    return(this.typeSwitch(question,index));
                }
            )}
                <button onClick={this.handleSubmit}>envoyer</button>
                {
                    this.state.submitted && <div>votre score est {this.score}/{this.questions.length}</div>
                }
            </form>
        )
    }
}