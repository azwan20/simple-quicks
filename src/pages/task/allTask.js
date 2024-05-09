import { useEffect, useState } from "react";

export default function AllTask({ newTask, urgentToDo, isLoadings }) {
  const [downDetails, setDownDetails] = useState([false]);
  const [delteDetails, setDeleteDetails] = useState([false]);
  // const [checkedItems, setCheckedItems] = useState({});
  const [arrowClicked, setArrowClicked] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [checkedItems, setCheckedItems] = useState(new Array(6).fill(false));
  const [deskripsi, setDeskripsi] = useState(true);
  const [dates, setDates] = useState(true);
  const [desc, setDesc] = useState(true);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [contentTask, setContentTask] = useState([
    {
      id: 1,
      text: "Close off Case #012920-RODRIGUES, AMIGUEL",
      date: "2024-05-06",
      description:
        "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
    },
    {
      id: 2,
      text: "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
      date: "2024-05-10",
      description:
        "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    },
    {
      id: 3,
      text: "Set up appointment with Dr Blake",
      date: "2024-05-07",
      description: "No description",
    },
  ]);

  // Fungsi untuk menambah task baru
  const addNewTask = () => {
    if (!newTaskTitle || !newTaskDate) return; // Pastikan judul dan tanggal task tidak kosong

    const newTaskObj = {
      id: contentTask.length + 1,
      text: newTaskTitle,
      date: newTaskDate,
      description: newTaskDescription || "No Description",
    };

    setContentTask((prevContentTask) => [...prevContentTask, newTaskObj]);
    setNewTaskTitle("");
    setNewTaskDate("");
    setNewTaskDescription("");
  };

  console.log("task ini", contentTask);

  // const handleCheckboxChange = (index) => {
  //   const newCheckedItems = [...checkedItems];
  //   newCheckedItems[index] = !newCheckedItems[index];
  //   setCheckedItems(newCheckedItems);
  // };

  const calculateDaysLeft = (taskId) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date().setHours(0, 0, 0, 0); // Mengatur waktu saat ini ke tengah malam
    const task = contentTask.find((task) => task.id === taskId);
    const selectedDateTime = task.date
      ? new Date(task.date).setHours(0, 0, 0, 0) // Mengatur waktu tanggal tugas ke tengah malam
      : 0;
    const diffDays = Math.round((selectedDateTime - currentDate) / oneDay);

    // return Math.max(0, diffDays) + " Days Left";
    if (diffDays < 0) {
      return "";
    } else if (diffDays === 0) {
      return "";
    } else {
      return diffDays + " Days Left";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return ""; // Handle jika tanggal tidak ada
    const date = new Date(dateString);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("id-ID", options).replace(/\//g, "/");
  };

  const handleDateChange = (index, date) => {
    const newContentTask = [...contentTask]; // Menghindari perubahan langsung pada state
    newContentTask[index] = { ...newContentTask[index], date: date };
    setContentTask(newContentTask);
  };

  const handleDescChange = (index, description) => {
    const newContentTask = [...contentTask]; // Menghindari perubahan langsung pada state
    newContentTask[index] = {
      ...newContentTask[index],
      description: description,
    };
    setContentTask(newContentTask);
  };

  useEffect(() => {
    const savedCheckedItems =
      JSON.parse(localStorage.getItem("checkedItems")) || {};
    setCheckedItems(savedCheckedItems);
  }, []);

  const handleDownDetail = (index) => {
    const updatedDownDetails = [...downDetails];
    updatedDownDetails[index] = !downDetails[index];
    setDownDetails(updatedDownDetails);
  };

  const handleDelteDetail = (index) => {
    const updatedDeleteDetails = [...delteDetails];
    updatedDeleteDetails[index] = !delteDetails[index];
    setDeleteDetails(updatedDeleteDetails);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = { ...checkedItems };
    updatedCheckedItems[index] = !checkedItems[index];
    setCheckedItems(updatedCheckedItems);
    localStorage.setItem("checkedItems", JSON.stringify(updatedCheckedItems));
  };

  const handleArrowClick = (index) => {
    const updatedArrowClicked = { ...arrowClicked };
    updatedArrowClicked[index] = !arrowClicked[index];
    setArrowClicked(updatedArrowClicked);
  };

  const handleNewTaskTitleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleNewTaskDateChange = (e) => {
    setNewTaskDate(e.target.value);
  };

  const handelNewTaskDescription = (e) => {
    setNewTaskDescription(e.target.value || "No description");
  };

  const handleAddNewTask = () => {
    // Lakukan sesuatu dengan newTaskTitle dan newTaskDate
    // Misalnya, tambahkan ke state atau kirim ke server
    // Di sini Anda dapat menambahkan logika untuk menangani data baru
    console.log("New Task Title:", newTaskTitle);
    console.log("New Task Date:", newTaskDate);
  };

  const handleDeskripsi = () => {
    setDeskripsi(!deskripsi);
  };

  const handleDates = () => {
    setDates(!dates);
  };

  const handleDesc = () => {
    setDesc(!desc);
  };

  const handleNewTaskKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewTask();
    }
  };

  const sortedTasks = [...contentTask].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <>
      <div className="task" style={{ maxHeight: "90%", overflowY: "auto" }}>
            {!urgentToDo
              ? contentTask.map((task, index) => (
                  <div className="contentTask" key={index}>
                    <section className="d-flex justify-content-between align-items-center up px-3">
                      <span className="d-flex" style={{ width: "60%" }}>
                        <input
                          className="me-4"
                          type="checkbox"
                          checked={checkedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <p>
                          <b
                            style={{
                              textDecoration: checkedItems[index]
                                ? "line-through"
                                : "none",
                              color: checkedItems[index] ? "grey" : "inherit",
                            }}
                          >
                            {task.text}
                          </b>
                        </p>
                      </span>
                      <span className="d-flex">
                        {!checkedItems[index] && (
                          <span>
                            {task.date && (
                              <p className="text-danger">
                                {calculateDaysLeft(task.id)}
                              </p>
                            )}
                          </span>
                        )}
                        <p>{formatDate(task.date)}</p>
                        <p
                          onClick={() => handleDownDetail(index)}
                          style={{ cursor: "pointer" }}
                        >
                          {downDetails[index] ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10L12 15L17 10"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 14L12 9L7 14"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </p>
                        <section>
                          <p>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 31 31"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => handleDelteDetail(index)}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.73685 12.5731C6.35381 12.5731 5.22223 13.7046 5.22223 15.0877C5.22223 16.4707 6.35381 17.6023 7.73685 17.6023C9.11989 17.6023 10.2515 16.4707 10.2515 15.0877C10.2515 13.7046 9.11989 12.5731 7.73685 12.5731ZM22.8246 12.5731C21.4415 12.5731 20.3099 13.7046 20.3099 15.0877C20.3099 16.4707 21.4415 17.6023 22.8246 17.6023C24.2076 17.6023 25.3392 16.4707 25.3392 15.0877C25.3392 13.7046 24.2076 12.5731 22.8246 12.5731ZM12.7661 15.0877C12.7661 13.7046 13.8977 12.5731 15.2807 12.5731C16.6637 12.5731 17.7953 13.7046 17.7953 15.0877C17.7953 16.4707 16.6637 17.6023 15.2807 17.6023C13.8977 17.6023 12.7661 16.4707 12.7661 15.0877Z"
                                fill="#4F4F4F"
                              />
                            </svg>
                          </p>
                          {delteDetails[index] && (
                            <button
                              className="position-absolute border-1 ps-3 pe-5 py-1 text-danger bg-white rounded"
                              style={{
                                right: "18px",
                                zIndex: "99",
                                fontWeight: "200",
                              }}
                            >
                              Delete
                            </button>
                          )}
                        </section>
                      </span>
                    </section>
                    {downDetails[index] && (
                      <div>
                        <section className="px-5 my-2 d-flex justify-content-start align-items-center">
                          <svg
                            style={{ width: "4%" }}
                            height="21"
                            viewBox="0 0 31 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-3"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.2508 2.51465C8.31048 2.51465 2.69031 8.1474 2.69031 15.0877C2.69031 22.0281 8.31048 27.6608 15.2508 27.6608C22.2038 27.6608 27.8365 22.0281 27.8365 15.0877C27.8365 8.1474 22.2038 2.51465 15.2508 2.51465ZM15.2637 25.1462C9.70636 25.1462 5.20519 20.6451 5.20519 15.0878C5.20519 9.53045 9.70636 5.02928 15.2637 5.02928C20.821 5.02928 25.3221 9.53045 25.3221 15.0878C25.3221 20.6451 20.821 25.1462 15.2637 25.1462ZM14.0061 8.80121H15.8921V15.4021L21.55 18.7591L20.607 20.3056L14.0061 16.3451V8.80121Z"
                              fill="#2F80ED"
                            />
                          </svg>
                          <input
                            type="date"
                            value={contentTask[index].date || ""}
                            onChange={(e) =>
                              handleDateChange(index, e.target.value)
                            }
                            style={{ width: "27%" }}
                          />
                        </section>
                        <section className="d-flex px-5 justify-content-start">
                          <svg
                            style={{ width: "4%" }}
                            height="30"
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-3"
                            onClick={handleDesc}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.3092 0C18.9949 0 18.668 0.125731 18.4291 0.36462L16.1282 2.6655L20.8431 7.38041L23.144 5.07953C23.6343 4.58918 23.6343 3.79708 23.144 3.30673L20.2019 0.36462C19.9504 0.113158 19.6361 0 19.3092 0ZM14.7831 7.569L15.9398 8.72573L4.54857 20.117H3.39185V18.9602L14.7831 7.569ZM0.877197 17.9167L14.783 4.01081L19.498 8.72572L5.59211 22.6316H0.877197V17.9167Z"
                              fill="#2F80ED"
                            />
                          </svg>
                          {desc ? (
                            <p style={{ width: "87%", margin: "auto 0" }}>
                              {task.description}
                            </p>
                          ) : (
                            <textarea
                              value={task.description}
                              onChange={(e) =>
                                handleDescChange(index, e.target.value)
                              }
                              style={{ width: "70%" }}
                            />
                          )}
                        </section>
                      </div>
                    )}
                    <hr />
                  </div>
                ))
              : sortedTasks.map((task, index) => (
                  <div className="contentTask" key={index}>
                    <section className="d-flex justify-content-between align-items-center up px-3">
                      <span className="d-flex" style={{ width: "60%" }}>
                        <input
                          className="me-4"
                          type="checkbox"
                          checked={checkedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <p>
                          <b
                            style={{
                              textDecoration: checkedItems[index]
                                ? "line-through"
                                : "none",
                              color: checkedItems[index] ? "grey" : "inherit",
                            }}
                          >
                            {task.text}
                          </b>
                        </p>
                      </span>
                      <span className="d-flex">
                        {!checkedItems[index] && (
                          <span>
                            {task.date && (
                              <p className="text-danger">
                                {calculateDaysLeft(task.id)}
                              </p>
                            )}
                          </span>
                        )}
                        <p>{formatDate(task.date)}</p>
                        <p
                          onClick={() => handleDownDetail(index)}
                          style={{ cursor: "pointer" }}
                        >
                          {downDetails[index] ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10L12 15L17 10"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 14L12 9L7 14"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </p>
                        <section>
                          <p>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 31 31"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => handleDelteDetail(index)}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.73685 12.5731C6.35381 12.5731 5.22223 13.7046 5.22223 15.0877C5.22223 16.4707 6.35381 17.6023 7.73685 17.6023C9.11989 17.6023 10.2515 16.4707 10.2515 15.0877C10.2515 13.7046 9.11989 12.5731 7.73685 12.5731ZM22.8246 12.5731C21.4415 12.5731 20.3099 13.7046 20.3099 15.0877C20.3099 16.4707 21.4415 17.6023 22.8246 17.6023C24.2076 17.6023 25.3392 16.4707 25.3392 15.0877C25.3392 13.7046 24.2076 12.5731 22.8246 12.5731ZM12.7661 15.0877C12.7661 13.7046 13.8977 12.5731 15.2807 12.5731C16.6637 12.5731 17.7953 13.7046 17.7953 15.0877C17.7953 16.4707 16.6637 17.6023 15.2807 17.6023C13.8977 17.6023 12.7661 16.4707 12.7661 15.0877Z"
                                fill="#4F4F4F"
                              />
                            </svg>
                          </p>
                          {delteDetails[index] && (
                            <button
                              className="position-absolute border-1 ps-3 pe-5 py-1 text-danger bg-white rounded"
                              style={{
                                right: "18px",
                                zIndex: "99",
                                fontWeight: "200",
                              }}
                            >
                              Delete
                            </button>
                          )}
                        </section>
                      </span>
                    </section>
                    {downDetails[index] && (
                      <div>
                        <section className="px-5 my-2 d-flex justify-content-start align-items-center">
                          <svg
                            style={{ width: "4%" }}
                            height="21"
                            viewBox="0 0 31 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-3"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.2508 2.51465C8.31048 2.51465 2.69031 8.1474 2.69031 15.0877C2.69031 22.0281 8.31048 27.6608 15.2508 27.6608C22.2038 27.6608 27.8365 22.0281 27.8365 15.0877C27.8365 8.1474 22.2038 2.51465 15.2508 2.51465ZM15.2637 25.1462C9.70636 25.1462 5.20519 20.6451 5.20519 15.0878C5.20519 9.53045 9.70636 5.02928 15.2637 5.02928C20.821 5.02928 25.3221 9.53045 25.3221 15.0878C25.3221 20.6451 20.821 25.1462 15.2637 25.1462ZM14.0061 8.80121H15.8921V15.4021L21.55 18.7591L20.607 20.3056L14.0061 16.3451V8.80121Z"
                              fill="#2F80ED"
                            />
                          </svg>
                          <input
                            type="date"
                            value={contentTask[index].date || ""}
                            onChange={(e) =>
                              handleDateChange(index, e.target.value)
                            }
                            style={{ width: "27%" }}
                          />
                        </section>
                        <section className="d-flex px-5 justify-content-start">
                          <svg
                            style={{ width: "4%" }}
                            height="30"
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-3"
                            onClick={handleDesc}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.3092 0C18.9949 0 18.668 0.125731 18.4291 0.36462L16.1282 2.6655L20.8431 7.38041L23.144 5.07953C23.6343 4.58918 23.6343 3.79708 23.144 3.30673L20.2019 0.36462C19.9504 0.113158 19.6361 0 19.3092 0ZM14.7831 7.569L15.9398 8.72573L4.54857 20.117H3.39185V18.9602L14.7831 7.569ZM0.877197 17.9167L14.783 4.01081L19.498 8.72572L5.59211 22.6316H0.877197V17.9167Z"
                              fill="#2F80ED"
                            />
                          </svg>
                          {desc ? (
                            <p style={{ width: "87%", margin: "auto 0" }}>
                              {task.description}
                            </p>
                          ) : (
                            <textarea
                              value={task.description}
                              onChange={(e) =>
                                handleDescChange(index, e.target.value)
                              }
                              style={{ width: "70%" }}
                            />
                          )}
                        </section>
                      </div>
                    )}
                    <hr />
                  </div>
                ))}
          {/* <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "450px" }}
          >
            <div className="loading-spinner-container my-auto">
              <div className="loading-spinner"></div>
              <p>Loading Chats...</p>
            </div>
          </div> */}
        {newTask && (
          <div className="mb-5">
            <div>
              <div className="d-flex justify-content-between px-3">
                <section className="d-flex">
                  <input className="me-4" type="checkbox" />
                  <input
                    className=""
                    type="text"
                    placeholder="Type Task Tittle"
                    style={{ width: "350px", outlineColor: "green" }}
                    value={newTaskTitle}
                    onChange={handleNewTaskTitleChange}
                    onKeyPress={handleNewTaskKeyPress}
                  />
                </section>
                <section className="d-flex">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 14L12 9L7 14"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ms-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.73685 12.5731C6.35381 12.5731 5.22223 13.7046 5.22223 15.0877C5.22223 16.4707 6.35381 17.6023 7.73685 17.6023C9.11989 17.6023 10.2515 16.4707 10.2515 15.0877C10.2515 13.7046 9.11989 12.5731 7.73685 12.5731ZM22.8246 12.5731C21.4415 12.5731 20.3099 13.7046 20.3099 15.0877C20.3099 16.4707 21.4415 17.6023 22.8246 17.6023C24.2076 17.6023 25.3392 16.4707 25.3392 15.0877C25.3392 13.7046 24.2076 12.5731 22.8246 12.5731ZM12.7661 15.0877C12.7661 13.7046 13.8977 12.5731 15.2807 12.5731C16.6637 12.5731 17.7953 13.7046 17.7953 15.0877C17.7953 16.4707 16.6637 17.6023 15.2807 17.6023C13.8977 17.6023 12.7661 16.4707 12.7661 15.0877Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </p>
                </section>
              </div>
            </div>
            <div className="mx-1">
              <section className="px-5 my-2">
                {dates ? (
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-3"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2508 2.51465C8.31048 2.51465 2.69031 8.1474 2.69031 15.0877C2.69031 22.0281 8.31048 27.6608 15.2508 27.6608C22.2038 27.6608 27.8365 22.0281 27.8365 15.0877C27.8365 8.1474 22.2038 2.51465 15.2508 2.51465ZM15.2637 25.1462C9.70636 25.1462 5.20519 20.6451 5.20519 15.0878C5.20519 9.53045 9.70636 5.02928 15.2637 5.02928C20.821 5.02928 25.3221 9.53045 25.3221 15.0878C25.3221 20.6451 20.821 25.1462 15.2637 25.1462ZM14.0061 8.80121H15.8921V15.4021L21.55 18.7591L20.607 20.3056L14.0061 16.3451V8.80121Z"
                      fill="gray"
                    />
                  </svg>
                ) : (
                  <svg
                    style={{ width: "4%" }}
                    height="21"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-3"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2508 2.51465C8.31048 2.51465 2.69031 8.1474 2.69031 15.0877C2.69031 22.0281 8.31048 27.6608 15.2508 27.6608C22.2038 27.6608 27.8365 22.0281 27.8365 15.0877C27.8365 8.1474 22.2038 2.51465 15.2508 2.51465ZM15.2637 25.1462C9.70636 25.1462 5.20519 20.6451 5.20519 15.0878C5.20519 9.53045 9.70636 5.02928 15.2637 5.02928C20.821 5.02928 25.3221 9.53045 25.3221 15.0878C25.3221 20.6451 20.821 25.1462 15.2637 25.1462ZM14.0061 8.80121H15.8921V15.4021L21.55 18.7591L20.607 20.3056L14.0061 16.3451V8.80121Z"
                      fill="#2F80ED"
                    />
                  </svg>
                )}
                <input
                  className="text-secondary"
                  type="date"
                  placeholder="Set Date"
                  value={newTaskDate}
                  onClick={handleDates}
                  onChange={handleNewTaskDateChange}
                  onKeyPress={handleNewTaskKeyPress}
                />
              </section>
              <section className="d-flex px-5">
                {deskripsi ? (
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-3 my-auto"
                    onClick={handleDeskripsi}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.3092 0C18.9949 0 18.668 0.125731 18.4291 0.36462L16.1282 2.6655L20.8431 7.38041L23.144 5.07953C23.6343 4.58918 23.6343 3.79708 23.144 3.30673L20.2019 0.36462C19.9504 0.113158 19.6361 0 19.3092 0ZM14.7831 7.569L15.9398 8.72573L4.54857 20.117H3.39185V18.9602L14.7831 7.569ZM0.877197 17.9167L14.783 4.01081L19.498 8.72572L5.59211 22.6316H0.877197V17.9167Z"
                      fill="gray"
                    />
                  </svg>
                ) : (
                  <svg
                    style={{ width: "4%" }}
                    height="30"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-3"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.3092 0C18.9949 0 18.668 0.125731 18.4291 0.36462L16.1282 2.6655L20.8431 7.38041L23.144 5.07953C23.6343 4.58918 23.6343 3.79708 23.144 3.30673L20.2019 0.36462C19.9504 0.113158 19.6361 0 19.3092 0ZM14.7831 7.569L15.9398 8.72573L4.54857 20.117H3.39185V18.9602L14.7831 7.569ZM0.877197 17.9167L14.783 4.01081L19.498 8.72572L5.59211 22.6316H0.877197V17.9167Z"
                      fill="#2F80ED"
                    />
                  </svg>
                )}
                {deskripsi ? (
                  <p
                    className="text-secondary my-auto"
                    onClick={handleDeskripsi}
                  >
                    No Description
                  </p>
                ) : (
                  <input
                    type="text"
                    className=""
                    placeholder="Type Task Tittle"
                    style={{ width: "350px", outlineColor: "green" }}
                    value={newTaskDescription}
                    onChange={handelNewTaskDescription}
                    onKeyPress={handleNewTaskKeyPress}
                  />
                )}
              </section>
            </div>
            {/* <button onClick={addNewTask}>Send</button> */}
          </div>
        )}
      </div>
    </>
  );
}
