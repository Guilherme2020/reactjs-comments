import React, { Component } from 'react';

// import { Container } from './styles';

class NewComment extends Component {
    state = {
        newComment: ''
    }
    handleChange = event => {

        this.setState({
          newComment: event.target.value
        })
    
    }
    sendComment = () => {
        
        this.props.sendComment(this.state.newComment);
        this.setState({
            newComment: ''
        })
    }
    render() {
        return(
            <div>
                <textarea  
                onChange={this.handleChange}
                value={this.state.newComment} name="" id="" cols="30" rows="10">
                
                </textarea>
                <button onClick={this.sendComment} >
                    Enviar
                </button>
            </div>
        )

    }
}

export default NewComment;