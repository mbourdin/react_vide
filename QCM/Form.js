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
        this.state={submitted:false,
            score:0,
            emailIsValid:false,
        };


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
        if(this.state.emailIsValid){
            this.setState({submitted:true})
        }
    }
    reset=(event)=>{
        event.preventDefault();
        console.log("reset");
        this.setState({submitted:false});
    }
    setEmail=(event)=>{
        this.email=event.currentTarget.value;
        this.setState({
            emailIsValid :this.validateEmail(this.email),
            showEmailAlert:false,
        });
        console.log(this.state.emailIsValid);
    }
    validateEmail(email) {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
    render(){


        return (
            <form>
                <h1>QCM</h1>
                <Input type="email"
                       title="Enter votre Email"
                       required={true}
                       toParent={this.setEmail}
                       isValid={this.state.emailIsValid}
                       showAlert={this.state.showEmailAlert}
                />
                {this.questions.map(
                (question, index) =>
                {
                    return(this.typeSwitch(question,index));
                }
            )}
                {
                    (!this.state.submitted) &&<button onClick={this.handleSubmit} >envoyer</button>
                }
                {
                    this.state.submitted && <div>votre score est {this.state.score}/{this.questions.length} <button onClick={this.reset}>recommencer</button></div>

                }
            </form>
        )
    }
}