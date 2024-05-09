import { useEffect, useState } from "react";
import FooterDetail from "../chatDetail/footerDetail";

export default function Support() {
  const [isAksi, setAksi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const hanleAksi = () => {
    setAksi(!isAksi);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="chats" style={{ maxHeight: "60%", overflowY: "auto" }}>
        <div>
          <p
            style={{
              color: "#E5A443",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            FastVisa Support
          </p>
          <span className="d-flex justify-content-start">
            <section className="supporte">
              <p style={{ color: "#4F4F4F", marginBottom: "5px" }}>
                Hey there. Welcome to your inbox! Contact us for more
                information and help about anything! Well send you a response as
                soon as possible.
              </p>
              <p style={{ color: "gray", fontSize: "11px" }}>19.32</p>
            </section>
          </span>
        </div>
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
            {/* <div className="">
              <span style={{ margin: "0 5px" }}>...</span>
              <div className="aksi">
                <p style={{ color: "blue" }}>Edit</p>
                <hr style={{ margin: "0" }} />
                <p style={{ color: "red" }}>Delete</p>
              </div>
            </div> */}
            <section className="chat">
              <p style={{ color: "#4F4F4F", marginBottom: "5px" }}>
                Hi, I need help with something can you help me ?
              </p>
              <p style={{ color: "gray", fontSize: "11px" }}>19.32</p>
            </section>
          </span>
        </div>
      </div>
      <div>
        {isLoading && (
          <div
            className="d-flex align-items-center justify-content-start"
            style={{ height: "320px" }}
          >
            <div
              className="loading-spinner-container my-auto mx-auto rounded justify-content-start ps-2"
              style={{
                height: "50px",
                width: "90%",
                backgroundColor: "#e9f3ff",
                flexDirection: "row",
              }}
            >
              <div
                className="loading-spinner me-2 "
                style={{
                  width: "30px",
                  height: "30px",
                  borderLeftColor: "blue",
                }}
              ></div>
              <p className="my-auto">
                Please wait while we connect you with one of our team...
              </p>
            </div>
          </div>
        )}
        <FooterDetail />
      </div>
    </>
  );
}
