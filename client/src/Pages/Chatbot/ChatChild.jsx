import React, { useEffect, useState } from "react";
import { textQueryAction, eventQueryAction } from "../../actions/queries";
import { useDispatch, useSelector } from "react-redux";
import "./Chatbot.css";
import Message from "../../components/Message/Message";
import Card from "../../components/Card/Card";

const ChatChild = () => {
  const dispatch=useDispatch()

  useEffect(() => {
    eventQuery("welcomeToMyBot");
  }, []);

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // with the help of redux toolkit - pulling out the data from redux
  const msgs = useSelector((state) => state?.queriesReducer.messages);
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [msgs]);
  useEffect(() => {
    setIsTyping(false);
  }, [msgs.length]);

  const textQuery = async (text) => {
    // called an action
    setIsTyping(true);
    dispatch(textQueryAction(text));
  };

  const eventQuery = async (event) => {
    // called an action
    setIsTyping(true);
    dispatch(eventQueryAction(event));
  };

  const handleSubmit = (e) => {
    setIsTyping(true);
    e.preventDefault();
    if (text == "") {
      return alert("Type something first");
    } else {
      // send request to text query route
      textQuery(text);
    }
    setText("");
  };

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />);
  };

  const renderOneMsg = (msg, i) => {
    // we need some condn to separate msgs kind

    // template for normal text
    if (msg.content && msg.content.text && msg.content.text.text) {
      return (
        <Message key={i} title={msg.who} description={msg.content.text.text} />
      );
    }
    // template for card or custom payload
    else if (
      msg.content &&
      msg.content.payload &&
      msg.content.payload.fields.card
    ) {
      return (
        <div>
          {renderCards(msg.content.payload.fields.card.listValue.values)}
        </div>
      );
    }
  };

  const renderMsg = (msgs) => {
    if (msgs) {
      return msgs.map((msg, i) => {
        return renderOneMsg(msg, i);
      });
    } else {
      return null;
    }
  };

  return (
    <>
    <main style={{margin:"35px 2px"}} className="chatbot-main"> 
      <section className="chatbot-section">{renderMsg(msgs)}</section>
      <div className={isTyping ? "" : "hide"}>
        <p className="chatbot-p">
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>
      <form className="chatbot-form" onSubmit={handleSubmit}>
        <input 
          style={{ color: "white" }}
          className="form-input chatbot-input"
          placeholder="Send a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </form>
    </main>
    </>
  );
};

export default ChatChild;
