import React, { useState } from 'react';
// import openai from 'openai';
import { Configuration, OpenAIApi } from 'openai';
import { SyncLoader } from 'react-spinners';
import ChatBot from './ChatBot';
import Example from './Example';

// Set up OpenAI




function Chat() {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const handleMessageChange = (e) => {
        setUserMessage(e.target.value);
    }
    const openAi = new OpenAIApi(new Configuration({
        apiKey: 'API_KEY',
    }));
    const chat = () => {
        setIsLoading(true);
        setMessages([...messages, { type: 'system', text: 'Please wait', userMessage: userMessage }]);
        openAi.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }]
        }).then(res => {
            setIsLoading(false);
            let replay = res.data.choices[0].message.content;
            // console.log(replay)
            setMessages([...messages, { type: 'system', text: replay, userMessage: userMessage }]);
        });
        setUserMessage('');

    }
    const handelEnter = (e) => {
        if (e.key === 'Enter') {
            chat();
        }
    }
    // console.log(messages.length)
    return (

        <div className="flex flex-col h-screen bg-gray-100">
            {
                messages.length === 0 && <div className='w-[60%] hidden md:block mx-auto'>
                    <div className="title  mt-8 text-center">
                        <h1 className='text-5xl font-bold text-blue-500'>ChatGPT</h1>
                    </div>
                    <div className="flex mt-8 gap-3  justify-center items-center">
                        <div className="">
                            <div className="text-center mt-6">
                                <p className='text-3xl'><i className="fa-regular fa-sun"></i></p>
                                <h1 className='text-3xl'>Examples</h1>
                            </div>
                            <Example text={'Explain quantum computing in simple terms'} />
                            <Example text={'Got any creative ideas for a 10 year old’s birthday?'} />
                            <Example text={'How do I make an HTTP request in Javascript?'} />
                        </div>
                        <div className="mx-3">
                            <div className="text-center mt-6">
                                <p className='text-3xl'><i className="fa-solid fa-bolt"></i></p>
                                <h1 className='text-3xl'>Capabilities</h1>
                            </div>
                            <Example text={'Remembers what user said earlier in the conversation'} />
                            <Example text={'Allows user to provide follow-up corrections'} />
                            <Example text={'Trained to decline inappropriate requests'} />
                        </div>
                        <div className="">
                            <div className="">
                                <div className="text-center mt-6">
                                    <p className='text-3xl'><i className="fa-solid fa-triangle-exclamation"></i></p>
                                    <h1 className='text-3xl'>Limitations</h1>
                                </div>
                                <Example text={'May occasionally generate incorrect information'} />
                                <Example text={'May occasionally produce harmful instructions .'} />
                                <Example text={'Limited knowledge of world and events after 2021'} />
                            </div>
                        </div>
                    </div>
                </div>

            }
            <div className="flex-grow overflow-y-auto px-6 py-4">
                {/* Conversation thread */}
                {
                    messages.map((msg, index) => <ChatBot msg={msg} userMessage={userMessage} loading={isLoading} key={index} />)
                }
            </div>
            {
                isLoading && <div className='flex sticky top-0 gap-3 my-4 justify-center items-center'>
                    <h1 className='text-2xl font-bold text-blue-500'>Thinking</h1>
                    <SyncLoader  size={10} color="#3B82F6" />
                </div>
            }
            {/* Input section  */}
            <div className="flex items-center px-6 py-2">
                <input type="text" onKeyDown={handelEnter} placeholder='Send a message' value={userMessage} onChange={handleMessageChange} className="flex-grow border-gray-300 border outline-none focus:text-gray-500 rounded-full px-4 py-2 mr-2" />
                <button onClick={chat} className="bg-green-500 hover:bg-green-700 duration-200 text-white rounded-full px-4 py-2">Send</button>
            </div>

        </div>
    );
}

export default Chat;