import { useState } from "react";
import FooterDetail from "./footerDetail";

export default function ChatDetail({
  chatMessages,
  newMessages,
  // handleSendMessage,
  // handleMessageChange,
  // message,
  // handleReceiveMessage,
  // users,
  isTyping,
  // addNewMessage,
}) {
  const [isAksi, setAksi] = useState(false);
  const details = chatMessages;
  const newMess = newMessages;
  // const handleSned = handleSendMessage;
  // const handleChange = handleMessageChange;
  // const mess = message;
  // const handleReceive = handleReceiveMessage;
  const isType = isTyping;
  // const addNew = addNewMessage;

  const hanleAksi = () => {
    setAksi(!isAksi);
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="chats" style={{ maxHeight: "60%", overflowY: "auto" }}>
        <div className="d-flex garis justify-content-between">
          <section></section>
          <p className="m-auto">{formatDate(new Date())}</p>
          <section></section>
        </div>
        {details.map((msg, index) => (
          <div key={index}>
            {msg.isReply ? (
              <div>
                <p
                  style={{
                    color: "#E5A443",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  {/* {users.firstName} */}
                  zani
                </p>
                <span className="d-flex justify-content-start">
                  <section className="chatRepl">
                    <p style={{ color: "#4F4F4F", marginBottom: "5px" }}>
                      {msg.text}
                    </p>
                    <p style={{ color: "gray", fontSize: "11px" }}>
                      {msg.timestamp}
                    </p>
                  </section>
                  <span style={{ margin: "0 5px" }}>...</span>
                </span>
              </div>
            ) : (
              <div>
                <p
                  style={{
                    color: "#9B51E0",
                    fontSize: "14px",
                    textAlign: "right",
                  }}
                >
                  You
                </p>
                <span className="d-flex justify-content-end">
                  <div className="">
                    <span
                      style={{ margin: "0 5px", textAlign: "end" }}
                      onClick={hanleAksi}
                    >
                      ...
                    </span>
                    {isAksi && (
                      <div className="aksi">
                        <p style={{ color: "blue" }}>Edit</p>
                        <hr style={{ margin: "0" }} />
                        <p style={{ color: "red" }}>Delete</p>
                      </div>
                    )}
                  </div>
                  <section className="chat">
                    <p style={{ color: "#4F4F4F", marginBottom: "5px" }}>
                      {msg.text}
                    </p>
                    <p style={{ color: "gray", fontSize: "11px" }}>
                      {msg.timestamp}
                    </p>
                  </section>
                </span>
              </div>
            )}
          </div>
        ))}
        {isType && (
          <span>
            <div className="d-flex garis justify-content-between">
              <section></section>
              <p className="m-auto text-danger">New Message</p>
              <section></section>
            </div>
            {newMess.map((msg, index) => (
              <div key={index}>
                <p
                  style={{
                    color: "#43B78D",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  {/* {users.lastName} */}
                  mere
                </p>
                <span className="d-flex justify-content-start">
                  <section className="chatNew">
                    <p style={{ color: "#4F4F4F", marginBottom: "5px" }}>
                      {msg.textNew}
                    </p>
                    <p style={{ color: "gray", fontSize: "11px" }}>19.32</p>
                  </section>
                  <span style={{ margin: "0 5px" }}>...</span>
                </span>
              </div>
            ))}
          </span>
        )}
      </div>
      
    </>
  );
}
