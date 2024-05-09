// import { useEffect, useState } from "react";
import HeaderDetail from "../chatDetail/headerDetail";
import ChatDetail from "../chatDetail/chatDetail";
import FooterDetail from "../chatDetail/footerDetail";
import React, { useEffect, useState } from "react";

// const fetchData = async () => {
//   const appId = "66382172ad901e170999d8bc"; // Ganti dengan ID Aplikasi Anda
//   const endpoint = "https://dummyapi.io/data/v1/user";
//   const page = 0; // Nomor halaman dimulai dari 0
//   const limit = 10; // Batas jumlah item

//   try {
//     const response = await fetch(`${endpoint}?page=${page}&limit=${limit}`, {
//       headers: {
//         "app-id": appId,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// };

export default function AllChat({
  showDetailChat,
  selectedChatIndex,
  handleDetail,
  handleSupport,
  alreay,
  userData,
}) {
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchDataAsync = async () => {
  //     const data = await fetchData();
  //     setUserData(data);
  //   };

  //   fetchDataAsync();
  // }, []);
  return (
    <>
      {!showDetailChat && (
        <div className="chats" style={{ maxHeight: "80%", overflowY: "auto" }}>
          {userData ? (
            <div>
              {userData.data.map((user, index) => (
                <div key={index} onClick={() => handleDetail(user)}>
                  <div className="d-flex">
                    <span>
                      <svg
                        width="51"
                        height="34"
                        viewBox="0 0 51 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
                          fill="#E0E0E0"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17 11C15.3425 11 14 12.3425 14 14C14 15.6575 15.3425 17 17 17C18.6575 17 20 15.6575 20 14C20 12.3425 18.6575 11 17 11ZM18.5 14C18.5 13.175 17.825 12.5 17 12.5C16.175 12.5 15.5 13.175 15.5 14C15.5 14.825 16.175 15.5 17 15.5C17.825 15.5 18.5 14.825 18.5 14ZM21.5 21.5C21.35 20.9675 19.025 20 17 20C14.9825 20 12.6725 20.96 12.5 21.5H21.5ZM11 21.5C11 19.505 14.9975 18.5 17 18.5C19.0025 18.5 23 19.505 23 21.5V23H11V21.5Z"
                          fill="black"
                          fill-opacity="0.54"
                        />
                        <path
                          d="M51 17C51 26.3888 43.3888 34 34 34C24.6112 34 17 26.3888 17 17C17 7.61116 24.6112 0 34 0C43.3888 0 51 7.61116 51 17Z"
                          fill="#2F80ED"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M34 11C32.3425 11 31 12.3425 31 14C31 15.6575 32.3425 17 34 17C35.6575 17 37 15.6575 37 14C37 12.3425 35.6575 11 34 11ZM35.5 14C35.5 13.175 34.825 12.5 34 12.5C33.175 12.5 32.5 13.175 32.5 14C32.5 14.825 33.175 15.5 34 15.5C34.825 15.5 35.5 14.825 35.5 14ZM38.5 21.5C38.35 20.9675 36.025 20 34 20C31.9825 20 29.6725 20.96 29.5 21.5H38.5ZM28 21.5C28 19.505 31.9975 18.5 34 18.5C36.0025 18.5 40 19.505 40 21.5V23H28V21.5Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span
                      className="d-flex justify-content-between"
                      style={{ width: "100%" }}
                    >
                      <div className="d-flex">
                        <span className="mx-3">
                          <p style={{ color: "#2F80ED", fontSize: "16px" }}>
                            109220-{user.firstName}
                          </p>
                          <p style={{ color: "#4F4F4F", fontSize: "14px" }}>
                            <b>{user.lastName} :</b>
                          </p>
                          <p style={{ color: "gray", fontSize: "14px" }}>
                            Please check this out!
                          </p>
                        </span>
                        <span style={{ color: "gray", fontSize: "14px" }}>
                          January 1.2021 19:10
                        </span>
                      </div>
                      <span className="d-flex align-items-end pb-3">
                        {alreay && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 134 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M134 67C134 104.003 104.003 134 67 134C29.9969 134 0 104.003 0 67C0 29.9969 29.9969 0 67 0C104.003 0 134 29.9969 134 67Z"
                              fill="#EB5757"
                            />
                          </svg>
                        )}
                      </span>
                    </span>
                    <span></span>
                  </div>
                  <hr />
                </div>
              ))}
              <div className="d-flex" onClick={handleSupport}>
                <section
                  className="rounded-circle bg-primary d-flex align-items-center ms-2 text-light"
                  style={{ width: "40px", height: "40px" }}
                >
                  <p className="mx-auto my-auto text-align-center">F</p>
                </section>
                <div className="">
                  <span className="mx-3 d-flex">
                    <p style={{ color: "#2F80ED", fontSize: "16px" }}>
                      FastVisa Support
                    </p>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        margin: "auto 16px",
                      }}
                    >
                      01/06/2021 12:19
                    </p>
                  </span>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "14px",
                      marginLeft: "1rem",
                    }}
                  >
                    Hey there! Welcome to your inbox.
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "450px" }}
            >
              <div className="loading-spinner-container my-auto">
                <div className="loading-spinner"></div>
                <p>Loading Chats...</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
