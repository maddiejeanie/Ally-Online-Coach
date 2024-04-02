import React, { useState, useEffect, useRef } from "react";
import { ChatPrompts } from "./ChatPrompts";
import { ChatLoading } from "./ChatLoading";
import OpenAI from "openai";

const StartChat = ({ selectedTrainer, goBack }) => {
    const [inputText, setInputText] = useState("");
    const [hidePrompts, setHidePrompts] = useState(false);
    const [isChatLoading, setChatLoading] = useState(false);
    const [messages, setMessages] = useState([
        {
            "role": "system",
            "content": `you are a chatbot designed to assist a personal trainers clients with their motivation to follow the trainers guides on nutrition and fitness, The user has chosen you to embody ${selectedTrainer.name} who has a style of ${selectedTrainer.promptNotesforTrainer.style} and her answers feature that she ${selectedTrainer.promptNotesforTrainer.features}. Give concise, one or two sentence responses. `
        },
    ]);

    const chatContainerRef = useRef(null);

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
                setTimeout(() => {
                    setMessages([...messages, resp.choices[0].message]);
                    setChatLoading(false);
                }, 4000);
                
            } catch (error) {
                console.error("Error fetching response:", error);
                setChatLoading(false);
            }
        };

        if (messages.length > 0 && messages[messages.length - 1].role === "user") {
            fetchResponse();
        }
    }, [messages]);

    const initiateChat = () => {
        setHidePrompts(true);
        setMessages([...messages, { role: "user", content: inputText }]);
        setInputText("");
    };

    useEffect(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="flex flex-col h-[700px] bg-gray-100">
            <header className="flex items-center justify-between px-4 py-2 bg-gradient-to-t from-green-700 to-green-900 text-white">
                <button onClick={goBack} className="hover:bg-green-900 rounded px-2 py-1">
                    <span className="mr-2">◄</span>
                    <span>Back</span>
                </button>
                <h2 className="text-xl font-semibold">{selectedTrainer.name}</h2>
                <div className="relative">
                    <img
                        className="h-24 w-24 rounded-full object-cover"
                        src={selectedTrainer.image}
                        alt={selectedTrainer.name}
                    />
                    <div className="absolute top-0 right-0 mt-1 mr-1">
                        <div className="h-4 w-4 bg-green-300 rounded-full animate-pulse delay-1000"></div>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col justify-between overflow-y-auto" ref={chatContainerRef}>
                <div className="flex flex-col p-4">
                    {messages.map((message, index) => (
                        message.role !== "system" && (
                            <div
                                key={index}
                                className={`p-2 rounded-2xl my-2 ${
                                    message.role === "user"
                                        ? " bg-green-700 text-white self-end rounded-br-none"
                                        : "self-start"
                                }`}
                            >
                                {message.role !== "user" && (
                                    <div className="flex items-end">
                                        <img
                                            className="h-16 w-16 rounded-full object-cover "
                                            src={selectedTrainer.image}
                                            alt={selectedTrainer.name}
                                        />
                                        <div className="ml-4  bg-gray-300 text-green-800 self-start rounded-bl-none p-2 rounded-2xl ">{message.content}</div>
                                    </div>
                                )}
                                {message.role === "user" && <p>{message.content}</p>}
                            </div>
                        )
                    ))}

                    {!hidePrompts && (
                        <div className="flex flex-col self-end w-4/5">
                            {ChatPrompts.map(
                                (prompt, index) =>
                                    <button
                                        key={index}
                                        className="bg-green-700  text-white rounded-2xl px-2 py-1 m-1 text-right
                                             hover:bg-green-800 rounded-br-none"
                                        onClick={() => setInputText(prompt)}
                                    >
                                        {prompt}
                                    </button>
                            )}
                        </div>
                    )}
                    {isChatLoading && <ChatLoading />}
                </div>
            </main>
            <div className="flex items-center p-2 bg-gray-200">
                <input
                    type="text"
                    id="inputText"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="flex-1 p-2 rounded-lg bg-white text-green-900"
                    placeholder="Type your message..."
                />
                <button
                    className="ml-2 w-1/4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                    onClick={initiateChat}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default StartChat;
