import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typewriter
        options={{
          strings: [
            "Front-End Developer",
            "Open Source Contributor",
            "UI/UX Designer",
            "Back-End Enthusiast",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      <br />
      <div style={{ marginTop: "20px" }}>
      </div>
    </div>
  );
}

export default Type;
