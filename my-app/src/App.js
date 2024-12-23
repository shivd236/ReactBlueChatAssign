import React from "react";
import { MdSearch, MdCall, MdVideocam, MdMoreVert } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone, AiOutlineInfoCircle } from "react-icons/ai";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <ChatArea />
      <InfoPanel />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">BlueChat</h2>
        <div className="sidebar-search">
          <MdSearch size={20} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search chats..."
          />
        </div>
      </div>
      <div className="tabs">
        <div className="tab active">Messages</div>
        <div className="tab">Segments</div>
      </div>
      <div className="chat-list">
        <ChatItem
          name="Oguz Yagiz Kara"
          time="5m"
          message="I keep getting error while creating..."
        />
        <ChatItem
          name="George Klein"
          time="1h 54m"
          message="Wow, this is really epic!"
        />
        <ChatItem
          name="847-401-1944"
          time="6h 21m"
          message="Haha oh man, this is amazing!"
        />
      </div>
    </div>
  );
};


const ChatItem = ({ name, time, message }) => {
  return (
    <div className="chat-item">
      <div className="chat-avatar">{name[0]}</div>
      <div className="chat-info">
        <div className="chat-name">
          {name} <span className="chat-time">{time}</span>
        </div>
        <div className="chat-message">{message}</div>
      </div>
    </div>
  );
};

const ChatArea = () => {
  return (
    <div className="chat-area">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  );
};

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="chat-header-info">
        <div className="chat-avatar-header">O</div>
        <div>
          <h3 className="chat-header-name">Oguz Yagiz Kara</h3>
          <p className="chat-header-status">11:59pm in Ankara, Turkey</p>
        </div>
      </div>
      <div className="chat-header-actions">
        <MdCall size={24} className="chat-icon" />
        <MdVideocam size={24} className="chat-icon" />
        <MdMoreVert size={24} className="chat-icon" />
      </div>
    </div>
  );
};

const MessageList = () => {
  const messages = [
    { text: "Hello! How are you?", sent: true },
    { text: "I'm good, thank you! What about you?", sent: false },
    { text: "I'm doing well too. Thanks for asking!", sent: true },
  ];

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${msg.sent ? "sent" : "received"}`}
        >
          <p className="message-text">{msg.text}</p>
        </div>
      ))}
    </div>
  );
};

const MessageInput = () => {
  return (
    <div className="message-input">
      <input
        type="text"
        className="input-box"
        placeholder="Type a message..."
      />
      <button className="send-button">Send</button>
    </div>
  );
};

const InfoPanel = () => {
  return (
    <div className="info-panel">
      <div className="info-section">
        <h4>Revenue</h4>
        <p>$3,452</p>
      </div>
      <div className="info-section">
        <h4>Web Visits</h4>
        <p>42</p>
      </div>
      <div className="info-details">
        <h4>Information</h4>
        <p>
          <AiOutlineMail className="info-icon" /> oguzyagizkara@gmail.com
        </p>
        <p>
          <AiOutlinePhone className="info-icon phone" /> +90 535 646 81 77
        </p>
        <p>
          <AiOutlineInfoCircle className="info-icon" /> Last Visited: 8 Aug, 2021
        </p>
      </div>
      <div className="info-tags">
        <h4>Tags</h4>
        <div className="tags">
          <span className="tag">Abandoned Cart User</span>
          <span className="tag">Popup</span>
          <span className="tag">Shop Error</span>
          <span className="tag">Successful</span>
        </div>
      </div>
    </div>
  );
};

export default App;
