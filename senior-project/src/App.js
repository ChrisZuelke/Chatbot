//TODO: add user images gpt, user
//TODO: format to look good
//TODO: chat history - localstorage/cookies
//TODO: local storage api key/user - localstorage/cookies
//TODO: add to git host
//TODO: mobile version
//TODO: Connect to API
//TODO: 



//import logo from './logo.svg';
import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
      <aside className="classmenu">
        <h1>Menu</h1>
        <div className="newChatButton">
          <span>+ New Chat</span>
        </div>
      </aside>
      <section className="inputbox">
      <div className="messages">
        <div className="chatMessage">
          hello
        </div>
      </div>
      <div className="messages AI">
        <div className="chatMessage">
          the ai says hello
        </div>
      </div>
      <div className="chatInput">
        <textarea className="input" placeholder="Type your question here" rows="1"></textarea>
      </div>
      </section>
    </div>
  );
}


export default App;
