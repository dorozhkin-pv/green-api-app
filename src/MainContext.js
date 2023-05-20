import React, { createContext, useContext, useState } from 'react';

const MainContext = createContext({});

export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [credentials, setCredentials] = useState(null);
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);

  const value = {
    credentials,
    setCredentials,
    chatId,
    setChatId,
    messages,
    setMessages,
  };

  console.log('MainContextProvider  value:', value);

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
