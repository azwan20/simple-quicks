export default function HeaderDetail({ handleBackToChats, users }) {
  console.log("nama", users);
  return (
    <>
      <span className="d-flex justify-content-between align-items-center details">
        <span className="d-flex align-items-center">
          <svg
            width="22"
            height="21"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleBackToChats}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M25.9883 13.8304H10.6868L17.7152 6.80204L15.9298 5.02924L5.87134 15.0877L15.9298 25.1462L17.7026 23.3734L10.6868 16.345H25.9883V13.8304Z"
              fill="#000"
            />
          </svg>
          <span className="ms-2">
            <p style={{ color: "#2F80ED", fontSize: "16px" }}>
              1-589 - {users?.firstName || ""}, {users?.lastName || ""}{" "}
              [Affirmative Filling with ZHN]
            </p>
            <p style={{ color: "gray", fontSize: "14px" }}>3 Participants</p>
          </span>
        </span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          onClick={handleBackToChats}
        >
          <path
            d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z"
            fill="#000"
          />
        </svg>
      </span>
    </>
  );
}
