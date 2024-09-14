import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Simulating fetching initial messages
    const initialMessages = [
      { id: 1, text: 'Hello!', sender: 'user', avatar: 'https://github.com/shadcn.png' },
      { id: 2, text: 'Hi there!', sender: 'other', avatar: 'https://github.com/radix-ui.png' },
    ];
    setMessages(initialMessages);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        avatar: 'https://github.com/shadcn.png',
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
      
      // Simulating a response after a short delay
      setTimeout(() => {
        const responseMsg = {
          id: messages.length + 2,
          text: 'Thanks for your message!',
          sender: 'other',
          avatar: 'https://github.com/radix-ui.png',
        };
        setMessages(prevMessages => [...prevMessages, responseMsg]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto border rounded-lg">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.sender !== 'user' && (
              <Avatar className="w-8 h-8 mr-2">
                <AvatarImage src={message.avatar} alt={message.sender} />
                <AvatarFallback>{message.sender[0].toUpperCase()}</AvatarFallback>
              </Avatar>
            )}
            <div className={`max-w-[70%] ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg py-2 px-4`}>
              {message.text}
            </div>
            {message.sender === 'user' && (
              <Avatar className="w-8 h-8 ml-2">
                <AvatarImage src={message.avatar} alt={message.sender} />
                <AvatarFallback>{message.sender[0].toUpperCase()}</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow mr-2"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
