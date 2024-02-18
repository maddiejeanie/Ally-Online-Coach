import React, { useState } from "react";
import { ChatPrompts } from "./ChatPrompts";
import { ChatLoading } from "./ChatLoading";

const StartChat = ({ selectedTrainer, goBack }) => {
    const [startPrompt, setStartPrompt] = useState("");
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([]);
    const [hidePrompts, setHidePrompts] = useState(false);
    const [isChatLoading, setChatLoading] = useState(false);

    const handlePromptClick = (prompt) => {
        setInputText(prompt);
    };

    const initiateChat = () => {
        setHidePrompts(true);
        sendUserMessage(inputText);
        setInputText("");
    };

    const sendUserMessage = (text) => {
        setMessages([...messages, { sender: "user", text }]);
        processUserMessage(text);
    };

    const processUserMessage = (text) => {
        // Simulate bot response (replace with actual logic)
        const botResponse = { sender: "bot", text: "This is a test reply" };
        const userResponse = { sender: "user", text };
            setChatLoading(true)

            setTimeout(() => {
                setMessages([...messages, userResponse, botResponse]);
                setChatLoading(false)
            }, 3000)
  
  
    };

    return (



<div className="border-0 rounded-lg shadow-lg bg-emerald-700">

    <div className="rounded-s-sm flex flex-row justify-around items-center p-4 ">
        <button onClick={goBack} className="hover:bg-emerald-700 bg-teal-800 shadow-xl text-white rounded-xl h-full px-2 py-1">
            <span className="mr-2">◄</span>
            <span>Back</span>
        </button>
        <h2 className="m-8 h2 text-white text-xl uppercase text-shadow">{selectedTrainer.name}</h2>
        <div className="rounded-full shadow-xl h-24 w-24 relative">
  <img className="h-full w-full rounded-full object-cover" src={selectedTrainer.image} alt={selectedTrainer.name} />
  <div className="absolute top-0 right-0 mt-1 mr-1">
    <div className="h-4 w-4 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
  </div>
</div>

    </div>


            {!hidePrompts && (
    <div className="flex flex-col p-2 justify-start items-end bg-emerald-500">
        {ChatPrompts.map((prompt, index) => (
            <button 
                key={index} 
                className="bg-white rounded-xl mx-4 px-2 py-1 text-left text-teal-600 my-4 w-2/3 hover:bg-teal-800 hover:text-white"
                onClick={() => handlePromptClick(prompt)}
            >
                {prompt}
            </button>
        ))}
    </div>
)}


            {/* Render messages */}
            <div className="flex justify-end flex-col bg-emerald-500 p-4">
    {messages.map((message, index) => (
        <div 
            key={index} 
            className={
                message.sender === "user" 
                ? "bg-white rounded-xl px-2 py-1 mt-4 self-end text-teal-600 text-right "
                : "bg-emerald-600 rounded-xl mx-4 px-2 py-1 mt-4 text-white self-start"
            }
        >
            {message.text}
            
        </div>
    ))}

    
{isChatLoading && <ChatLoading />}
</div>


      
                <div className="flex p-2 justify-center items-center bg-gray-300">
                    <input 
                        value={inputText} 
                        onChange={(e) => setInputText(e.target.value)} 
                        className="bg-white text-teal-600 px-2 py-1 rounded-xl m-4 w-3/4" 
                    />
                    <button 
className="hover:bg-teal-800 bg-teal-700 text-white rounded-xl h-full px-2 py-1 w-1/4"
onClick={initiateChat}
                    >
                        Send
                    </button>
                </div>
       

    
        </div>
);
};

export default StartChat;
