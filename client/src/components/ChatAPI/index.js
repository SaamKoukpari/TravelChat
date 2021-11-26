import "stream-chat-react/dist/css/index.css";
import React, { useEffect, useState } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  useMessageContext,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";

const stream = require("getstream");
const key = process.env.REACT_APP_KEY;
const secret = process.env.REACT_APP_SECRET_KEY;
const chatClient = StreamChat.getInstance(key);

// useEffect(() => {
//   const initChat = async () => {
//     const client = StreamChat.getInstance(apiKey, { enableInsights: true });
//     await client.connectUser(userToConnect, userToken);
//     setChatClient(client);
//   };

//   initChat();

//   return () => chatClient?.disconnectUser();
// }, []); 

export default function Application() {
  // const [chatchatClient, setChatchatClient] = useState(null);

  // useEffect(() => {
  //   const initChat = async () => {
  //     const chatClient = StreamChat.getInstance('dz5f4d5kzrue');

  //     await chatClient.connectUser(
  //       {
  //         id: 'little-tooth-2',
  //         name: 'little',
  //         image: 'https://getstream.io/random_png/?id=little-tooth-2&name=little',
  //       },
  //       userToken,
  //     );

  //     setChatchatClient(chatClient);
  //   };

  //   initChat();
  // }, []);

  // if (!chatClient) {
  //   return <LoadingIndicator />;
  // }
  const streamTest = async function (id) {
    await chatClient.connectUser(
      {
        id: id,
        name: id,
        image: "https://bit.ly/2u9Vc0r",
      },
      chatClient.devToken(id)
    );

    console.log("chatClient:", chatClient);
    return chatClient;
  };

  
  streamTest("Lucy");
  // chatClient.disconnectUser("Lucy")
  // streamTest("Thierry");
  

  console.log("hit");
  const channel = chatClient.channel("messaging", "nothing", {
    // add as many custom fields as you'd like
    name: "Talk about React",
    members: ["Lucy"],
  });
  channel.create();
  // channel.addMembers(["Thierry", "Josh"]);

  return (
    <Chat client={chatClient} theme="messaging light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
