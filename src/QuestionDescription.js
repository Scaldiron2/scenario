import React, {Component} from "react";

class QuestionDescription extends React.Component {
    constructor(props) {
        super(props);
        this.descriptionLength = this.props.description.length > 8 ? 8 : this.props.description.length;
    }

    render() {
        return(
            <div id="description-div">
                <label for={this.props.description.substring(0, this.descriptionLength)}>
                <textarea id={this.props.description.substring(0, this.descriptionLength)} value={this.props.description} onChange={this.props.handleChange}/>
                </label>
            </div>
        );
    }
}

export default QuestionDescription;