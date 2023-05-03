//import logo from './logo.svg';
import './App.css';
import './normal.css';
import { useState } from 'react';

function App() {


  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  /*const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: ""
  },{
    user: "me",
    message: ""
  }]);
  //*/
  //[chatLog, setChatLog] = useState([{""}])


  function clearChat(){
    setChatLog([]);
  }



  async function handleSubmit(e){
    e.preventDefault();
    console.log(`${input}`);
    let InvalidWords = ["need", "frog", "javascript", "error"];
    let ValidInput = true;
    for (let i=0; i < InvalidWords.length;i++){
      if (input.includes(InvalidWords[i])){
        console.log("INVALID WORD");
        ValidInput = false;
      }
    }
    let chatLogNew = [...chatLog, { user: "me", message: `${input}`}]
    setInput("");
    setChatLog(chatLogNew)
    
    const messages = chatLogNew.map((message) => message.message).join("\n")
    const response = await fetch("http://localhost:3034/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
        //message: chatLog.map((message) => message.message).join("")
      })
    });
    const data=await response.json();
    console.log(data.message);
    if (ValidInput === false){
      data.message = "You Typed An Invaid Word"
    }
    setChatLog([...chatLogNew, {user: "gpt", message: `${data.message}`}])

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
























/*

//import logo from './logo.svg';
import './App.css';
import './normal.css';
import { useState } from 'react';

function App() {


  const [input, setInput] = useState("");
  //const [chatLog, setChatLog] = useState([]);
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: ""
  },{
    user: "me",
    message: ""
  }]);
  //*/
  //[chatLog, setChatLog] = useState([{""}])

/*
  function clearChat(){
    setChatLog([]);
  }



  async function handleSubmit(e){
    e.preventDefault();
    console.log(`${input}`)
    let chatLogNew = [...chatLog, { user: "me", message: `${input}`}]
    setInput("");
    setChatLog(chatLogNew)
    const InvalidWords = ["you","because","frogs"];
    let validmessage = true
    for (let i=0; i < InvalidWords.length;i++){
      if(input.includes(InvalidWords[i])){
        validmessage = false
      }
    }
    const messages = chatLogNew.map((message) => message.message).join("\n")
    const response = await fetch("http://localhost:3034/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
        //message: chatLog.map((message) => message.message).join("")
      })
    });
    const data=await response.jsoin();
    console.log(data.message);
    if(validmessage){
      setChatLog([...chatLogNew, {user: "gpt", message: `${data.message}`}])
    }

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


//*/