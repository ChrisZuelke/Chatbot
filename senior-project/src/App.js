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
      <section className="messages">
        <div className="chatMessage">
          hello
        </div>

      </section>
      <section className="inputbox">
        <div className="chatInput">
        <textarea className="input" placeholder="Type your question here" rows="1"></textarea>
        </div>
      </section>
    </div>
  );
}


export default App;
