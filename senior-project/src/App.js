//import logo from './logo.svg';
import './App.css';
import './normal.css';
import { useState } from 'react';

function App() {


  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: ""
  },{
    user: "me",
    message: ""
  }]);
  //[chatLog, setChatLog] = useState([{""}])


  function clearChat(){
    setChatLog([]);
  }



  async function handleSubmit(e){
    e.preventDefault();
    console.log("(input")
    //setChatLog([...chatLog, { user: "me", message: `${input}`}])
    //let chatLogNew = [...chatLog, { user: "me", message: `${input}`}]
    setInput("");
    const messages = chatLog.map((message) => message).join("\n")
    const response = await fetch("http://localhost:3034/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
      })
    });
    const data=await response.json();
    setChatLog([...chatLog, {user: "gpt", message: `${data.message}`}])
    console.log(data.message);

  }



  return (
    <div className="App">
      <aside className='sidemenu'>
        <h1>menu</h1>
        <div className='side-menu-button' onClick={clearChat}>
          + New Chat
        </div>
      </aside>

      <section className='chatbox'>
        <div className='chat-log'>
          {chatLog.map((message,index) => (
            <ChatMessage key={index} message={message} />
          ))}



        </div>

        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input 
            rows="1"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            className='chat-input-textarea' 
            placeholder='Type Your Question'>
            </input>
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
          {message.user === "gpt" && <img src="https://chat.openai.com/favicon-32x32.png" height='40' alt='GPT'/>}
        </div>
        <div className='message'>
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default App;


