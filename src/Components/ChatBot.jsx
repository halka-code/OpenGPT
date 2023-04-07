import React from 'react';
import { SyncLoader } from 'react-spinners';
const ChatBot = ({ msg, loading , userMessage }) => {

    return (
        <div>
            {
                <div className="user mb-4 rounded-lg text-right ">
                    <span className='bg-green-500 text-white  px-3 py-2 m-2 rounded-lg'>{msg.userMessage ? msg.userMessage  : userMessage}</span>
                </div>
            }
            <div className="bot rounded-lg text-left bg-blue-500 text-white w-[fit-content] px-3 py-2 my-4">
                <span className='leading-5'>{msg.text}</span>
            </div>
        </div>
    );
};

export default ChatBot;