import { useEffect, useState } from "react";

const Chatbot = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const scriptId = "df-messenger-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);
    }

    const interval = setInterval(() => {
      const dfMessenger = document.querySelector("df-messenger");
      if (dfMessenger && dfMessenger.shadowRoot) {
        const chatWindow = dfMessenger.shadowRoot.querySelector("df-messenger-chat");
        if (chatWindow && chatWindow.hasAttribute("opened")) {
          chatWindow.removeAttribute("opened");
          clearInterval(interval);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const closeChatbot = () => {
    setHidden(true);
  };

  return (
    <>
      <style>{`
        .close-chatbot-btn {
          position: fixed;
          bottom: 80px;
          right: 27px;
          background-color: #dc2626;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 30px;
          font-weight: bold;
          cursor: pointer;
          z-index: 999999999;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .close-chatbot-btn {
            bottom: 80px;
            right: 29px;
            padding: 8px 12px;
            font-size: 14px;
          }
        }

        df-messenger {
          z-index: 999 !important;
        }
      `}</style>

      {!hidden && (
        <>
          <button className="close-chatbot-btn" onClick={closeChatbot}>
            X
          </button>
          <df-messenger
            intent="WELCOME"
            chat-title="D'Andalimans_ChatBot"
            agent-id="5f39a0be-070b-4185-aca3-db2b8685dad7"
            language-code="id"
          ></df-messenger>
        </>
      )}
    </>
  );
};

export default Chatbot;
