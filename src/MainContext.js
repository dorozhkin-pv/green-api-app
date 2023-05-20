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

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
