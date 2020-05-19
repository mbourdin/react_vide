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
            currentPage:0
        };


    }
    previousPage=()=>{
        //console.log(this.state.currentPage);
        this.setState({currentPage: Math.max(this.state.currentPage-1,0)});
    };
    nextPage=()=>{
        //console.log(this.state.currentPage);
        this.setState({currentPage: Math.min(this.state.currentPage+1,this.questions.length)});
    };

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
                    <Wrapper key={index} show={index===this.state.currentPage-1}>
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
                    <Wrapper key={index} show={index===this.state.currentPage-1}>
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
        this.setState({submitted:false,currentPage:0});
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
            <div>
            <form className={this}>
                <h1>QCM</h1>
                <Wrapper show={this.state.currentPage===0}>
                <Input type="email"
                       required={true}
                       toParent={this.setEmail}
                       isValid={this.state.emailIsValid}
                       showAlert={this.state.showEmailAlert}
                       label="Entrez votre Email"
                />
                </Wrapper>
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
                <p>page {this.state.currentPage+1}/{this.questions.length+1}</p>
        <button onClick={this.previousPage} disabled={this.state.currentPage===0}>Page -</button>
        <button onClick={this.nextPage} disabled={this.state.currentPage===this.questions.length}>Page +</button>
            </div>
        )
    }
}