import React, { useState, useEffect } from "react";
import { ChatPrompts } from "./ChatPrompts";
import { ChatLoading } from "./ChatLoading";
import OpenAI from "openai";

const StartChat = ({ selectedTrainer, goBack }) => {
    const [inputText, setInputText] = useState("");
    const [hidePrompts, setHidePrompts] = useState(false);
    const [isChatLoading, setChatLoading] = useState(false);
    const [selectedPrompts, setSelectedPrompts] = useState([]);
    const [messages, setMessages] = useState([
        {
            "role": "system",
            "content": `you are a chatbot designed to assist a personal trainers clients with their motivation to follow the trainers guides on nutrition and fitness, The user has chosen you to embody ${selectedTrainer.name} who has a style of ${selectedTrainer.promptNotesforTrainer.style} and her answers feature that she ${selectedTrainer.promptNotesforTrainer.features}. short paragraph answers. `
        },
    ]);

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                setChatLoading(true);
                const openai = new OpenAI({
                    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
                    dangerouslyAllowBrowser: true,
                });

                const resp = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages,
                    temperature: 1,
                    max_tokens: 100,
                    top_p: 1,
                    frequency_penalty: 0.07,
                    presence_penalty: 0.09,
                });

                setMessages([...messages, resp.choices[0].message]);
                setChatLoading(false);
            } catch (error) {
                console.error("Error fetching response:", error);
                setChatLoading(false);
            }
        };

        if (messages.length > 0 && messages[messages.length - 1].role === "user") {
            fetchResponse();
        }
    }, [messages]);

    console.log(messages)

    const handlePromptClick = (prompt) => {
        setInputText(prompt);
    };

    const initiateChat = () => {
        setHidePrompts(true);
        setMessages([...messages, { role: "user", content: inputText }]);
        setInputText("");
    };

    return ( 
<div className="border-0 rounded-lg shadow-lg bg-emerald-500 flex flex-col justify-between w-2/3 overflow-y-auto scroll-smooth h-screen">
            <section>
            <div className="rounded-s-sm flex flex-row justify-around items-center p-4 bg-emerald-700">
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
            
            <div className="flex justify-end flex-col p-4">
    {messages.map((message, index) => (
        message.role !== "system" && (
            <div
                key={index}
                className={
                    message.role === "user"
                        ? "bg-white rounded-xl px-2 py-1 mt-4 self-end text-teal-600 text-right"
                        : "bg-emerald-600 rounded-xl mx-4 px-2 py-1 mt-4 text-white self-start"
                }
            >
                {message.content}
            </div>
        )
    ))}
    {!hidePrompts && (
        <div>
            {ChatPrompts.map((prompt, index) => (
                selectedPrompts.includes(prompt) ? null : 
                    <button
                        key={index}
                        className="bg-white justify-end rounded-xl mx-4 px-2 py-1 text-left text-teal-600 my-4 w-2/3 hover:bg-teal-800 hover:text-white"
                        onClick={() => { handlePromptClick(prompt) }}
                    >
                        {prompt}
                    </button>
                
            ))}
        </div>
    )}
    {isChatLoading && <ChatLoading />}
</div>

</section>
<section>
            <div className="flex p-2 justify-center items-center bg-gray-300">
                <input
                    type="text"
                    id="inputText"
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
            </section>
        </div>
    );
};

export default StartChat;
