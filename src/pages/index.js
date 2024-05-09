import { useEffect, useState } from "react";
import AllChat from "./inbox/allChat/allChat";
import ChatDetail from "./inbox/chatDetail/chatDetail";
import LoadingSpinner from "./loading";
import HeaderChat from "./inbox/allChat/header";
import HeaderDetail from "./inbox/chatDetail/headerDetail";
import FooterDetail from "./inbox/chatDetail/footerDetail";
import HeaderTask from "./task/header";
import AllTask from "./task/allTask";
import HeaderSupport from "./inbox/sopport/header";
import Support from "./inbox/sopport";

export default function Home() {
  const [showIcons, setShowIcons] = useState(false);
  const [showVisible, setShowVisible] = useState(true);
  const [showInbox, setShowInbox] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const [task, setTask] = useState(false);
  const [showDetailChat, setShowDetailChat] = useState(false);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [support, setSupport] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoadings, setIsLoadings] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [newMessages, setNewMessages] = useState([]);
  const [tanggal, setTanggal] = useState(false);
  const [users, setUsers] = useState([]);
  const [alreay, setAlready] = useState(true);
  const [urgentToDo, setUrgentToDo] = useState(false);
  const replyMessages = [
    "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
    "Sure thing, Claren",
    "Thanks you",
    "paniya",
    "devani",
  ];

  const newMessage = [
    "Morning. Ill try to do them. Thanks",
    "No worries. It will be complaecated ASAP. Ive asked him yesterday.",
    "thank you",
  ];

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const currentTime = new Date();
      const hour = currentTime.getHours().toString().padStart(2, "0");
      const minute = currentTime.getMinutes().toString().padStart(2, "0");
      const timestamp = `${hour}:${minute}`;

      const userMessage = {
        text: message,
        timestamp: timestamp,
        isReply: false,
      };
      setChatMessages((prevMessages) => [...prevMessages, userMessage]);
      setMessage("");
      setTanggal(true);
    }
  };

  const handleReceiveMessage = () => {
    // Tambahkan balasan pesan setelah penundaan 1 detik
    setTimeout(() => {
      const currentTime = new Date();
      const hour = currentTime.getHours().toString().padStart(2, "0");
      const minute = currentTime.getMinutes().toString().padStart(2, "0");
      const timestamp = `${hour}:${minute}`;

      const randomReplyIndex = Math.floor(Math.random() * replyMessages.length);
      const replyMessage = {
        text: replyMessages[randomReplyIndex],
        timestamp: timestamp,
        isReply: true,
      };
      setChatMessages((prevMessages) => [...prevMessages, replyMessage]);
      // Tambahkan pesan baru setelah penundaan tambahan 5 detik
      setTimeout(() => {
        setIsTyping(false); // Mengatur isTyping menjadi false setelah balasan muncul
        const randomNewIndex = Math.floor(Math.random() * newMessage.length);
        const newMessageItem = {
          textNew: newMessage[randomNewIndex], // Menggunakan key 'text' untuk pesan baru
          timestamp: timestamp,
          isNew: true,
        };
        setNewMessages((prevMessages) => [...prevMessages, newMessageItem]);
        setIsTyping(true); // Mengatur isTyping menjadi true sebelum menambahkan pesan baru
        console.log("new Message", newMessage)
      }, 5000); // Tunggu 5 detik untuk menambahkan pesan baru setelah balasan
    }, 1000); // Tunggu 1 detik sebelum memulai proses
  };

  const handleInboxClick = () => {
    setShowInbox(!showInbox);
  };

  const handleTaskClick = () => {
    setShowTask(!showTask);
  };

  const handleOkClick = () => {
    setShowIcons(true);
    setShowVisible(false);
  };

  const handleCLose = () => {
    setShowIcons(false);
    setShowVisible(true);
  };

  const handleComponent = () => {
    setShowComponent(!showComponent);
  };

  const handleNewTask = () => {
    setNewTask(!newTask);
  };

  const handleTask = () => {
    setTask(!task);
  };

  const handleDetail = (user) => {
    setSelectedChatIndex(user);
    setShowDetailChat(true);
    setUsers(user);
    setAlready(false);
  };

  const handleBack = () => {
    setShowDetailChat(true);
  };

  const handleBackToChats = () => {
    setShowDetailChat(false);
    setSelectedChatIndex(null);
  };

  const handleSupport = () => {
    setSupport(!support);
  };

  const handleUrgent = () => {
    setUrgentToDo(!urgentToDo);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadings(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Fungsi untuk menambahkan pesan baru
  // const addNewMessage = (msg) => {
  //   setChatMessages([...chatMessages, msg]);
  //   setIsTyping(false);

  //   // Setelah 5 detik, atur kembali isTyping menjadi false
  //   setTimeout(() => {
  //     setIsTyping(true);
  //   }, 5000); // Mengatur waktu menjadi 5000 untuk 5 detik
  // };

  return (
    <>
      <div className="home d-flex">
        <div className="sidebar"></div>
        <nav className="d-flex align-items-center">
          <svg
            width="22"
            height="21"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.1856 18.9783H22.5486L31.1579 27.6047L28.5872 30.1754L19.9607 21.5662V20.2032L19.4949 19.7201C17.528 21.4109 14.9746 22.4289 12.1968 22.4289C6.00304 22.4289 0.982422 17.4082 0.982422 11.2144C0.982422 5.02061 6.00304 0 12.1968 0C18.3907 0 23.4113 5.02061 23.4113 11.2144C23.4113 13.9922 22.3934 16.5456 20.7026 18.5124L21.1856 18.9783ZM4.433 11.2145C4.433 15.5104 7.90084 18.9783 12.1968 18.9783C16.4928 18.9783 19.9607 15.5104 19.9607 11.2145C19.9607 6.91846 16.4928 3.45062 12.1968 3.45062C7.90084 3.45062 4.433 6.91846 4.433 11.2145Z"
              fill="#F2F2F2"
            />
          </svg>
        </nav>
        <div className="ikon">
          {showIcons && (
            <span>
              <p
                className={`inbox-icon m-0 ${
                  showInbox || showTask ? "hide" : ""
                }`}
              >
                Task
              </p>
              <svg
                width="54"
                height="54"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(event) => {
                  handleTaskClick(event);
                  handleTask(event);
                }}
                className={`inbox-icon ${showTask ? "hide" : ""}`}
              >
                <g filter="url(#filter0_d_2_175)">
                  <path
                    d="M64 30C64 46.5685 50.5685 60 34 60C17.4315 60 4 46.5685 4 30C4 13.4315 17.4315 0 34 0C50.5685 0 64 13.4315 64 30Z"
                    fill="#F2F2F2"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.1111 21.6667H45.1111C46.3334 21.6667 47.3334 22.6667 47.3334 23.889V38.3334C47.3334 39.5556 46.3334 40.5556 45.1111 40.5556H25.1111C23.8889 40.5556 22.8889 39.5556 22.8889 38.3334V23.889C22.8889 22.6667 23.8889 21.6667 25.1111 21.6667ZM25.1111 23.889V38.3334H34V23.889H25.1111ZM45.1111 38.3334H36.2222V23.889H45.1111V38.3334ZM44 27.7779H37.3334V29.4445H44V27.7779ZM37.3334 30.5556H44V32.2223H37.3334V30.5556ZM44 33.3334H37.3334V35.0001H44V33.3334Z"
                  fill="#F8B76B"
                />
                <defs>
                  <filter
                    id="filter0_d_2_175"
                    x="0"
                    y="0"
                    width="68"
                    height="68"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_175"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_175"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="54"
                height="54"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(event) => {
                  handleCLose(event);
                  handleTaskClick(event);
                }}
                className={`inbox-content ${showTask ? "show" : ""}`}
                style={{ zIndex: "999" }}
              >
                <g filter="url(#filter0_d_2_188)">
                  <path
                    d="M64 30C64 46.5685 50.5685 60 34 60C17.4315 60 4 46.5685 4 30C4 13.4315 17.4315 0 34 0C50.5685 0 64 13.4315 64 30Z"
                    fill="#F2F2F2"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.4443 21.1107H23.9999C23.3888 21.1107 22.8888 21.6107 22.8888 22.2218V37.7774L27.3332 33.3329H38.4443C39.0555 33.3329 39.5555 32.8329 39.5555 32.2218V22.2218C39.5555 21.6107 39.0555 21.1107 38.4443 21.1107ZM37.3332 23.3329V31.1106H26.411L25.7555 31.7662L25.111 32.4106V23.3329H37.3332ZM41.7777 25.5552H43.9999C44.611 25.5552 45.111 26.0552 45.111 26.6663V43.333L40.6666 38.8885H28.4443C27.8332 38.8885 27.3332 38.3885 27.3332 37.7774V35.5552H41.7777V25.5552Z"
                  fill="#8885FF"
                />
                <defs>
                  <filter
                    id="filter0_d_2_188"
                    x="0"
                    y="0"
                    width="68"
                    height="68"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_188"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_188"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          )}
          {showIcons && (
            <span className="mx-3">
              <p
                className={`inbox-icon m-0 ${
                  showInbox || showTask ? "hide" : ""
                }`}
              >
                Inbox
              </p>
              <div
                className={`rounded-circle position-absolute inbox-icon ${
                  showInbox || showTask ? "" : "hide"
                }`}
                style={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "#4F4F4F",
                }}
              ></div>
              <svg
                width="54"
                height="54"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(event) => {
                  handleInboxClick(event);
                  handleComponent(event);
                }}
                className={`inbox-icon ${showInbox || showTask ? "hide" : ""}`}
                style={{ zIndex: "999" }}
              >
                <g filter="url(#filter0_d_2_188)">
                  <path
                    d="M64 30C64 46.5685 50.5685 60 34 60C17.4315 60 4 46.5685 4 30C4 13.4315 17.4315 0 34 0C50.5685 0 64 13.4315 64 30Z"
                    fill="#F2F2F2"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.4443 21.1107H23.9999C23.3888 21.1107 22.8888 21.6107 22.8888 22.2218V37.7774L27.3332 33.3329H38.4443C39.0555 33.3329 39.5555 32.8329 39.5555 32.2218V22.2218C39.5555 21.6107 39.0555 21.1107 38.4443 21.1107ZM37.3332 23.3329V31.1106H26.411L25.7555 31.7662L25.111 32.4106V23.3329H37.3332ZM41.7777 25.5552H43.9999C44.611 25.5552 45.111 26.0552 45.111 26.6663V43.333L40.6666 38.8885H28.4443C27.8332 38.8885 27.3332 38.3885 27.3332 37.7774V35.5552H41.7777V25.5552Z"
                  fill="#8885FF"
                />
                <defs>
                  <filter
                    id="filter0_d_2_188"
                    x="0"
                    y="0"
                    width="68"
                    height="68"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_188"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_188"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="54"
                height="54"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(event) => {
                  handleCLose(event);
                  handleInboxClick(event);
                  handleComponent(event);
                }}
                className={`inbox-content ${showInbox ? "show" : ""}`}
                style={{ zIndex: "999" }}
              >
                <path
                  d="M68 34C68 52.7777 52.7777 68 34 68C15.2223 68 0 52.7777 0 34C0 15.2223 15.2223 0 34 0C52.7777 0 68 15.2223 68 34Z"
                  fill="#8785FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.0371 23.9261H22.6667C21.9741 23.9261 21.4075 24.4928 21.4075 25.1854V42.815L26.4445 37.778H39.0371C39.7297 37.778 40.2964 37.2113 40.2964 36.5187V25.1854C40.2964 24.4928 39.7297 23.9261 39.0371 23.9261ZM37.7779 26.4446V35.2594H25.3993L24.6564 36.0024L23.926 36.7327V26.4446H37.7779ZM42.8149 28.9632H45.3334C46.026 28.9632 46.5927 29.5299 46.5927 30.2225V49.1114L41.5556 44.0743H27.7038C27.0112 44.0743 26.4445 43.5077 26.4445 42.8151V40.2965H42.8149V28.9632Z"
                  fill="white"
                />
              </svg>
              <svg
                width="54"
                height="54"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(event) => {
                  handleCLose(event);
                  handleTaskClick(event);
                  handleTask(event);
                }}
                className={`inbox-content ${showTask ? "show" : ""}`}
              >
                <g filter="url(#filter0_d_2_266)">
                  <path
                    d="M72 34C72 52.7777 56.7777 68 38 68C19.2223 68 4 52.7777 4 34C4 15.2223 19.2223 0 38 0C56.7777 0 72 15.2223 72 34Z"
                    fill="#F8B76B"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.1111 24.6663H48.1111C49.3334 24.6663 50.3334 25.6663 50.3334 26.8885V41.3329C50.3334 42.5551 49.3334 43.5551 48.1111 43.5551H28.1111C26.8889 43.5551 25.8889 42.5551 25.8889 41.3329V26.8885C25.8889 25.6663 26.8889 24.6663 28.1111 24.6663ZM28.1111 26.8885V41.3329H37V26.8885H28.1111ZM48.1111 41.3329H39.2222V26.8885H48.1111V41.3329ZM47 30.7774H40.3334V32.444H47V30.7774ZM40.3334 33.5551H47V35.2218H40.3334V33.5551ZM47 36.3329H40.3334V37.9996H47V36.3329Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_2_266"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_266"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_266"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          )}
          {showVisible && (
            <span onClick={handleOkClick}>
              <svg
                width="56"
                height="56"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_2_260)">
                  <path
                    d="M72 34C72 52.7777 56.7777 68 38 68C19.2223 68 4 52.7777 4 34C4 15.2223 19.2223 0 38 0C56.7777 0 72 15.2223 72 34Z"
                    fill="#2F80ED"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.4427 18.3359C42.3618 18.9486 42.6101 20.1903 41.9974 21.1094L34.737 32H45C45.7376 32 46.4153 32.4059 46.7634 33.0563C47.1114 33.7066 47.0732 34.4957 46.6641 35.1094L37.3308 49.1094C36.7181 50.0284 35.4763 50.2768 34.5573 49.6641C33.6382 49.0514 33.3899 47.8096 34.0026 46.8906L41.263 36H31C30.2624 36 29.5847 35.594 29.2367 34.9437C28.8886 34.2934 28.9268 33.5043 29.3359 32.8906L38.6692 18.8906C39.2819 17.9715 40.5237 17.7232 41.4427 18.3359Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2_260"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_260"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_260"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
          )}
        </div>
        {showComponent && (
          <div className="component">
            <section className="search">
              {showDetailChat ? (
                <HeaderDetail
                  handleBackToChats={handleBackToChats}
                  users={users}
                />
              ) : support ? (
                <HeaderSupport handleSupport={handleSupport} />
              ) : (
                <HeaderChat
                  showDetailChat={showDetailChat}
                  selectedChatIndex={selectedChatIndex}
                  handleDetail={handleDetail}
                />
              )}

              <hr />
              {showDetailChat ? (
                <ChatDetail
                  chatMessages={chatMessages}
                  newMessages={newMessages}
                  isTyping={isTyping}
                  handleSendMessage={handleSendMessage}
                  tanggal={tanggal}
                  handleMessageChange={handleMessageChange}
                  message={message}
                  handleReceiveMessage={handleReceiveMessage}
                  users={users}
                  // addNewMessage={addNewMessage}
                />
              ) : support ? (
                <Support />
              ) : (
                <AllChat
                  showDetailChat={showDetailChat}
                  selectedChatIndex={selectedChatIndex}
                  handleDetail={handleDetail}
                  handleSupport={handleSupport}
                  alreay={alreay}
                />
              )}
            </section>
            <section></section>
          </div>
        )}
        {task && (
          <div className="component">
            <section className="search">
              <HeaderTask
                handleNewTask={handleNewTask}
                handleUrgent={handleUrgent}
                isLoadings={isLoadings}
              />
              <AllTask
                newTask={newTask}
                urgentToDo={urgentToDo}
                isLoadings={isLoadings}
              />
            </section>
            <section></section>
          </div>
        )}
      </div>
    </>
  );
}
