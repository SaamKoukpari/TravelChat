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
import './chat.scss'

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
        image: "https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w"
        },
        chatClient.devToken(id)
      );
      
      const channel = chatClient.channel("messaging", "convo6", {
        name: "Let's go to LA"
      })
      await channel.create("convo6");

      if (!channel.state.members[id]) await channel.addMembers([id]);

      await channel.watch();
      setChannel(channel);
    }

    loadChat("Kamil");
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
    <div className="chatcontainer">
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
    </div>
  );
}