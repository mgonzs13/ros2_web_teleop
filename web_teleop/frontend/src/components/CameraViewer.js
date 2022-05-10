import { ImageDisplay } from "roslib-reactjs";
import React, { useState } from "react";

function CameraViewer() {
  const [cameraTopic, setCameraTopic] = useState("/camera/image_raw");

  return (
    <div
      style={{
        marginTop: 20,
      }}
    >
      <input
        value={cameraTopic}
        onChange={(e) => {
          setCameraTopic(e.target.value);
        }}
        type="text"
      />

      <figure>
        <ImageDisplay
          host="http://localhost"
          port={8080}
          topic={cameraTopic}
          transport="mjpeg"
          defaultTransport="raw"
          height={480}
          width={640}
        />
      </figure>
    </div>
  );
}

export default CameraViewer;
