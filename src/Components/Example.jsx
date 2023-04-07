import React from 'react';

const Example = ({ text }) => {
    return (
        <div>
            <div className="bg-blue-400 duration-100 hover:cursor-pointer hover:bg-blue-600 hover:text-white h-full mt-2 w-[250px] rounded-lg py-2 px-3">
                <p className='text-[15px]'>{text ? text : 'How do I make an HTTP request in Javascript?'}</p>
            </div>
        </div>
    );
};

export default Example;