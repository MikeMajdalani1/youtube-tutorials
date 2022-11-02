import React, { useState } from "react";
import "./react-copy-to-clipboard.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ReactCopyToClipboard() {
  const [clipboardState, setClipboardState] = useState(false);

  return (
    <div className="container">
      <h2>Copy address below and send transaction</h2>

      <CopyToClipboard
        text="0xaab27b150451726ec7738aa1d0a94505c8729bd1"
        onCopy={() => setClipboardState(true)}
      >
        <button>
          0xaab27b150451726ec7738aa1d0a94505c8729bd1
          {clipboardState && (
            <span style={{ color: "yellow" }}>
              <br></br>copied
            </span>
          )}{" "}
        </button>
      </CopyToClipboard>

      <h2>Paste it here</h2>
      <textarea></textarea>
    </div>
  );
}
export default ReactCopyToClipboard;
