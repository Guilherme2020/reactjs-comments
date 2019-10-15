import React,{Component} from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import {database} from './firebase';

class App extends Component {
  state = {

    comments:[
      'Comment1',
      'Comment2',
    ]
  }

  componentDidMount(){

    this.comments =  database.ref('comments');
    this.comments.on('value',snapshot => {
      console.log(snapshot.val());
    })
  }

  sendComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment ],
    
    })
  }
 
  render(){
    return (
      <div>
          
            <NewComment  sendComment={this.sendComment} />

            <Comments  comments={this.state.comments} />
      
      </div>
    );
  }

}

export default App;
