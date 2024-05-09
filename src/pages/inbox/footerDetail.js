export default function FooterDetail({
  handleSendMessage,
  message,
  handleMessageChange,
  handleReceiveMessage,
  addNewMessage,
}) {

  const handleNewTaskKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewMessage();
    }
  };
  return (
    <>
      <div class="searching">
        <div class="container-fluid">
          <form className="d-flex" onSubmit={handleSendMessage}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Type a new message"
              aria-label="Search"
              value={message}
              onChange={handleMessageChange}
            />
            <button
              class="btn bg-primary text-light"
              type="submit"
              onClick={handleReceiveMessage}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
