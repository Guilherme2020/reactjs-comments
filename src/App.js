import React, { Component } from "react";
import Comments from "./Comments";
import NewComment from "./NewComment";
import { database } from "./firebase";

class App extends Component {
  state = {
    comments: {},
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.comments = database.ref("comments");
    this.comments.on("value", snapshot => {
      console.log(snapshot.val());
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      });
    });
  }

  sendComment = comment => {
    const id = database
      .ref()
      .child("comments")
      .push().key;

    const comments = {};
    comments["comments/" + id] = {
      comment
    };
    database.ref().update(comments);
    this.setState({
      comments: [...this.state.comments, comment]
    });
  };

  render() {
    return (
      <div>
        <NewComment sendComment={this.sendComment} />

        <Comments comments={this.state.comments} />
        {this.state.isLoading && <p>Carregando</p>}
      </div>
    );
  }
}

export default App;
