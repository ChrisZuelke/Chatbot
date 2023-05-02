//TODO: add user images gpt, user
//TODO: format to look better
//TODO: chat history - localstorage/cookies
//TODO: local storage api key/user - localstorage/cookies
//TODO: add to git host
//TODO: mobile version
//TODO: Connect to API
//TODO: envirmental key - remove old api key



//import logo from './logo.svg';
import './App.css';
import './normal.css';
import { useState, userstate } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);


  async function submitInput(e){
    e.preventDefault();
    setChatLog([...chatLog, {user: "me", message: `$(input)`}])
    setInput="";


  }



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
        <form onSubmit={submitInput}>
          <input className="input" value={input} 
          onChange={(e)=> setInput(e.target.value)} placeholder="Type your question here" rows="1"></input>
        </form>
      </div>
      </section>
    </div>
  );
}


export default App;
