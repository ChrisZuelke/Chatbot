//TODO: add to git host
//TODO: mobile version
//TODO: dark/light theme varients

//TODO: chat history - localstorage/cookies
//TODO: local storage api key/user - localstorage/cookies
//TODO: envirmental key - remove old api key

//TODO: format to look better
//TODO: add user images gpt, user
//TODO: Connect to API



//import logo from './logo.svg';
import './App.css';
import './normal.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [chatMessage, setMessageLog] = useState([{
    user: "gpt",
    message: "How can I help you THIS WORKS AAAAAAAAA"
  }]);


  async function submitInput(e){
    e.preventDefault();
    setMessageLog([...chatMessage, {user: "me", message: `$(input)`}])
    setInput("");
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
          <div className="avatar">
          </div>
          <div className="message">
            hihihhi
          </div>
          {chatMessage.map((message, index) => (
              <ChatMessage key={index} message={message} />
          ))}
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
const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className='chat-message-center'>
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
          {message.user === "gpt"}
        </div>
      </div>
    </div>
  )
  
  }


export default App;

