import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { CREATE_MESSAGE, MESSAGES, MESSAGE_SUB } from "../queries";

const classType = ["message my-message", "message other-message"];

const Message = ({ msg }) => {
  const _date = new Date(parseInt(msg.createdAt));

  return (
    <li>
      <div class="message-data">
        <span class="message-data-name">
          <i class="fa fa-circle online"></i> {msg.user.firstName}{" "}
          {msg.user.lastName}
        </span>
        <span class="message-data-time">
          {/* {_date.getHours()}:{_date.getMinutes()} {_date.get}, {_date.getDate()}
          /{_date.getFullYear()} */}
        </span>
      </div>
      <div class={msg.me ? "message other-message" : "message my-message"}>
        {msg.text}
      </div>
    </li>
  );
};

const Chat = ({ user }) => {
  const [message, setMessage] = useState("");
  console.log(user);
  const { loading, error, data, subscribeToMore } = useQuery(MESSAGES, {
    variables: {
      groupId: parseInt(user?.group.id),
      userId: parseInt(user?.user.id),
    },
    //need to fetch from server for realtime communication
    fetchPolicy: "network-only",
  });
  const [createMessage] = useMutation(CREATE_MESSAGE);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = subscribeToMore({
      document: MESSAGE_SUB,
      variables: {
        groupId: parseInt(user?.group.id),
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data.newMessage) return prev;
        const newMessage = subscriptionData.data.newMessage;
        return {
          ...prev,
          messages: [...prev.messages, newMessage],
        };
      },
    });
    //unsubscribe on dismount
    return () => unsubscribe();
  }, [user, subscribeToMore]);

  useEffect(() => {
    scrollToBottom();
  }, [data]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMessageSend = async () => {
    const response = await createMessage({
      variables: {
        userId: user?.user.id,
        text: message,
      },
      refetchQueries: [
        {
          query: MESSAGES,
          variables: {
            groupId: parseInt(user?.group.id),
            userId: parseInt(user?.user.id),
          },
        },
      ],
    });
  };
  return (
    <div class="chat-page">
      <div class="chat">
        <div class="chat-header clearfix">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
            alt="avatar"
          />
          <div class="chat-about">
            <div class="chat-with">{user?.group.groupName}</div>
            {/* <div class="chat-num-messages">already 1 902 messages</div> */}
          </div>
          <i class="fa fa-star"></i>
        </div>

        <div class="chat-history">
          <ul class="chat-history-list">
            {data?.messages.map((message) => (
              <Message msg={message} key={message.id} />
            ))}
            <div ref={messagesEndRef} />
          </ul>
        </div>
        <div class="chat-message clearfix">
          <textarea
            name="message-to-send"
            id="message-to-send"
            placeholder="Type your message"
            rows="3"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
          <i class="fa fa-file-image-o"></i>
          <button onClick={handleMessageSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
