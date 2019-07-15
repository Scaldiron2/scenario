import React, { Component } from "react"
import QuestionTitle from "./QuestionTitle.js";
import QuestionDescription from "./QuestionDescription.js";
import _ from "lodash";
class  Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionTitle : "Please enter Question Title", 
            questionDescription : "Please enter Question Description",
            answers : [],
            correctAnswer : 0
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        //this.handleAnswerChange = this.handleAnswerChange.bind(this);
    }
    handleTitleChange (event) { 
        this.setState({questionTitle: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({questionDescription : event.target.value});
    }
    handleAnswerChange(event) {
        this.setState({_.find(answer) : event.target.value});
    }

        
    
    render() {
    return (
        <div>
        <QuestionTitle title={this.state.questionTitle} handleChange={this.handleTitleChange}/>
        <QuestionDescription description={this.state.questionDescription} handleChange={this.handleDescriptionChange}/>
        
        </div>
    );
    }
}

export default Question;