import React, { createContext, useState } from "react";

// TODO: add more fields
// TODO: add games played, games won, etc.
// TODO: add friends list
// TODO: add chats list

interface UserProps {
  id: number;
  login: string;
  username: string;
  email: string;
  avatar: string;
}

interface MessageProps {
  id: number;
  user: UserProps;
  content: string;
  created_at: string;
}

interface ChatsProps {
  id: number;
  name: string;
  users: UserProps[];
  messages: MessageProps[];
}

interface ContextProps {
  user: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
  chats: ChatsProps[];
  setChats: React.Dispatch<React.SetStateAction<ChatsProps[]>>;
}

export const Context = createContext<ContextProps>({} as ContextProps);

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children
}) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [chats, setChats] = useState<ChatsProps[]>([] as ChatsProps[]);

  return (
    <Context.Provider value={{ user, setUser, chats, setChats }}>
      {children}
    </Context.Provider>
  );
};
