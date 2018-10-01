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
      <h1>header</h1>
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
  render() {
    return (
      <div>
        <AddPost />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

class AddPost extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="what's up?" />
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
        {this.props.posts.length === 0 ? "No posts in feed" : this.props.posts}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
