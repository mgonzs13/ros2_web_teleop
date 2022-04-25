import "./App.css";
import { Publisher, RosConnect, ImageDisplay } from "roslib-reactjs";
import { Joystick } from "react-joystick-component";
import React, { useState } from "react";

function App() {
  const [twistMsg, setTwistMsg] = useState({
    linear: { x: 0, y: 0, z: 0 },
    angular: { x: 0, y: 0, z: 0, w: 0 },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <figure>
        <RosConnect url="ws://localhost:9090" autoconnect timeout={2000}>
          <Publisher
            name="/cmd_vel"
            type="geometry_msgs/msg/Twist"
            rate={10.0}
            queue_size={1}
            message={twistMsg}
          />

          <ImageDisplay
            host="http://localhost"
            port={8080}
            topic="/camera/image_raw"
            transport="ros_compressed"
            defaultTransport="compressed"
            height={480}
            width={640}
          />
        </RosConnect>
      </figure>

      <Joystick
        size={100}
        sticky={false}
        move={(e) => {
          setTwistMsg({
            linear: { x: e.y / 100 },
            angular: { z: e.x / -100 },
          });
        }}
        stop={(e) => {
          setTwistMsg({
            linear: { x: 0 },
            angular: { z: 0 },
          });
        }}
      ></Joystick>
    </div>
  );
}

export default App;
