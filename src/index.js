import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <StoryBoard />
      </div>
    );
  }
}

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

class StoryBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  handleSubmit = e => {
    const userInput = e.target.userInput.value;
    e.preventDefault();
    if (!userInput) {
      return;
    } else {
      //copy posts array in state
      let postsCopy = this.state.posts.slice();
      //append userInput to postsCopy
      postsCopy.push(userInput);
      //put user input in post state
      this.setState({
        posts: postsCopy
      });
      //clear input
      e.target.userInput.value = "";
    }
  };

  render() {
    return (
      <div>
        <AddPost handleSubmit={this.handleSubmit} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

class AddPost extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder="what's up?" name="userInput" />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

class Posts extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.length === 0
          ? "No posts in feed"
          : this.props.posts.map(posts => <p>{posts}</p>)}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
