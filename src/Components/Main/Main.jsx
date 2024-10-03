import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  // Function to handle card click and set the input prompt
  const handleCardClick = (promptText) => {
    setInput(promptText); // Set the clicked card text as the input
    onSent(); // Trigger the function to process the prompt
  };

  return (
    <div className="container">
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <a
            href="https://github.com/omkarkhot0500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.user_icon} alt="Omkar" /> {/* User photo */}
          </a>
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Omkar</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "Suggest beautiful places to see in Bengaluru"
                    )
                  }
                >
                  <p>
                    Suggest beautiful places to see on my upcoming road trip
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "Briefly summarise the concept: urban planning"
                    )
                  }
                >
                  <p>Briefly summarise the concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "Brainstorm team bonding activities for our work retreat"
                    )
                  }
                >
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div
                  className="card"
                  onClick={() => handleCardClick("What is JJK")}
                >
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p> {/* Prompt */}
              </div>
              {loading ? (
                <div className="result-data">
                  <img src={assets.gemini_icon} alt="" />
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                </div>
              ) : (
                <div className="result-data">
                  <img src={assets.gemini_icon} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(event) => setInput(event.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
            <button
              className="icon-button"
              onClick={() => input && onSent()}
              disabled={!input}
            >
              {input && <img src={assets.send_icon} alt="Send" />}
            </button>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
