//import logo from './logo.svg';
import './App.css';
import './normal.css';
//import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <aside className='sidemenu'>
        <h1>menu</h1>
        <div className='side-menu-button'>
          + New Chat
        </div>
      </aside>

      <section className='chatbox'>
        <div className='chat-log'>

          <div className='chat-message'>
            <div className='chat-message-center'>
              <div className='avatar chatgpt'>
              </div>
              <div className='message'>
                Hello
              </div>
            </div>
          </div>

          <div className='chat-message chatgpt'>
            <div className='chat-message-center'>
              <div className='avatar'>
                <img src="https://chat.openai.com/favicon-32x32.png" height='40' alt='GPT'/>
              </div>
              <div className='message'>
                The AI
              </div>
            </div>
          </div>

        </div>

        <div className='chat-input-holder'>
          <textarea 
          rows="1"
          className='chat-input-textarea' 
          placeholder='Type Your Question'>
          </textarea>
        </div>

      </section>
    </div>
  )
}

export default App;


