import React, { Component } from 'react';

// import { Container } from './styles';

class Comment extends Component {
  render() {
    return (
        <div>
            Comentario: {this.props.c}
        </div>
    );
  }
}

export default Comment;