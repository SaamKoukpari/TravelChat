import "stream-chat-react/dist/css/index.css";
import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
  Window
} from "stream-chat-react";
import MessagingChannelPreview from "./MessagingChannelPreview";
import MessagingChannelHeader from "./MessagingChannelHeader";
import MessagingChannelList from "./MessagingChannelList";
import CreateChannel from "./CreateChannel";

const stream = require("getstream");
const secret = process.env.REACT_APP_SECRET_KEY;
const key = process.env.REACT_APP_KEY;
const chatClient = StreamChat.getInstance(key);

export default function Application() {
  const [channel, setChannel] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const loadChat = async (id) => {
      await chatClient.connectUser({
        id: id, 
        name: id,
        image: "https://64.media.tumblr.com/244d07f72f855a9aa16694944eeaec9a/184becad82a964a0-32/s640x960/2657b319f38c652b9b393cdbefbe934c81b456ce.jpg"
        },
        chatClient.devToken(id)
      );
      
      const channel = chatClient.channel("messaging", "convoID", {
        name: "Super Safaris"
      })
      await channel.create("convoID");

      if (!channel.state.members[id]) await channel.addMembers([id]);

      await channel.watch();
      setChannel(channel);
    }

    loadChat("Lucy");
    return () => chatClient.disconnectUser();
  }, []);

  // const initChat = async function (id) { //this function creates users, that's stored in the API
  //   // await chatClient.disconnectUser(); 
  //   await chatClient.connectUser(
  //     {
  //       id: id,
  //       name: id,
  //       image: "https://bit.ly/2u9Vc0r"
  //     },
  //     chatClient.devToken(id)
  //   );
  //   return chatClient;
  // };

  // //clients that have been created: Lucy, Ramon, Jackie, Violet, Carrie, Melissa, Kamil, Alexis, Aaron, Toby
  // initChat("Aaron"); //right now this is who is online

  // chatClient.disconnectUser("Lucy"); // this only works in a useeffect? must be await

  //channelIds created: nothing, convoID, convo2, convo3, convo4, elephant-lovers

  // const channel = chatClient.channel("messaging", "convo4", {
  //   name: "Yoga Retreat TEAM",
  //   members: [ "Ramon", "Jackie", "Violet", "Carrie", "Melissa", "Kamil", "Alexis"], //these members were all "created" when called> initChat("name")
  //   }  
  // );
  // channel.create("convo4"); //call function that generates the convo, based on the 2nd param
  // channel.addMembers(["Aaron"]) //clients must be created before they are added, run initChat FIRST with this commented out, then run it again with this line


  // const channel = chatClient.channel("messaging", { //cannot "add members" to this type, this is one on one convo
  //   members: ["Ramon", "Melissa"],
  // });
  // channel.create()

  const sort = { last_message_at: -1 };

  return (
    <Chat client={chatClient} theme="messaging light">
      <ChannelList 
        sort={sort} 
        List={(props) => (
          <MessagingChannelList {...props} onCreateChannel={() => setIsCreating(!isCreating)} />
        )}
        Preview={(props) => <MessagingChannelPreview {...props} {...{ setIsCreating }} />}
      />
      <Channel>
        {isCreating && (
            <CreateChannel onClose={() => setIsCreating(false)} />
          )}
          
        <Window>
          <MessagingChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  );
}
