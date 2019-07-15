import React, {Component} from "react";

class QuestionTitle extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div id="question-div">
                <label for={this.props.title}>
                <input id={this.props.title} type="text" value={this.props.title} onChange={this.props.handleChange}/>
                </label>
            </div>         
        );
    }
}

export default QuestionTitle;