// import React, { useEffect, useState } from 'react';

// const fetchData = async () => {
//   const appId = '66382172ad901e170999d8bc'; // Ganti dengan ID Aplikasi Anda
//   const endpoint = 'https://dummyapi.io/data/v1/user';
//   const page = 0; // Nomor halaman dimulai dari 0
//   const limit = 10; // Batas jumlah item

//   try {
//     const response = await fetch(`${endpoint}?page=${page}&limit=${limit}`, {
//       headers: {
//         'app-id': appId
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// };

// const MyComponent = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchDataAsync = async () => {
//       const data = await fetchData();
//       setUserData(data);
//     };

//     fetchDataAsync();
//   }, []);

//   console.log("data", userData);

//   return (
//     <div>
//       {userData ? (
//         <ul>
//           {userData.data.map((user, index) => (
//             <li key={index}>
//               <p>{user.firstName} {user.lastName}</p>
//               <img src={user.picture} alt={`${user.firstName} ${user.lastName}`} />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default MyComponent;

import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const replyMessages = ["helo", "terima kasih", "gamapapa", "paniya", "devani"];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const userMessage = {
        text: message,
        timestamp: new Date().toLocaleTimeString(),
        isReply: false,
      };
      setChatMessages((prevMessages) => [...prevMessages, userMessage]);
      setMessage('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleReceiveMessage = () => {
    setTimeout(() => {
      // Dapatkan balasan secara acak dari array replyMessages
      const randomIndex = Math.floor(Math.random() * replyMessages.length);
      const replyMessage = {
        text: replyMessages[randomIndex],
        timestamp: new Date().toLocaleTimeString(),
        isReply: true,
      };
      setChatMessages((prevMessages) => [...prevMessages, replyMessage]);
    }, 1000);
  };

  return (
    <div>
      <div className="chat">
        {chatMessages.map((msg, index) => (
          <div key={index}>
            {msg.isReply ? (
              // Pesan dari server
              <div style={{ textAlign: "left" }}>
                <p style={{ color: "#E5A443", fontSize: "14px" }}>Mary Hilda</p>
                <span className="d-flex justify-content-start">
                  <section className="chatRepl">
                    <p style={{ color: "#4F4F4F", marginBottom: "5px" }}>{msg.text}</p>
                    <p style={{ color: "gray", fontSize: "11px" }}>{msg.timestamp}</p>
                  </section>
                </span>
              </div>
            ) : (
              // Pesan dari pengguna
              <div style={{ textAlign: "right" }}>
                <p style={{ color: "#9B51E0", fontSize: "14px" }}>You</p>
                <span className="d-flex justify-content-end">
                  <section className="chat">
                    <p style={{ color: "#4F4F4F", marginBottom: "5px" }}>{msg.text}</p>
                    <p style={{ color: "gray", fontSize: "11px" }}>{msg.timestamp}</p>
                  </section>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="searching">
        <div className="container-fluid">
          <form className="d-flex" onSubmit={handleSendMessage}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Type a new message"
              aria-label="Search"
              value={message}
              onChange={handleMessageChange}
            />
            <button className="btn bg-primary text-light" type="submit" onClick={handleReceiveMessage}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
