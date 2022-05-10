import { Publisher } from "roslib-reactjs";
import React, { useState, useEffect } from "react";
import { Joystick } from "react-joystick-component";

function TwistPublisher({ cmdVelTopic }) {
  const [twistMsg, setTwistMsg] = useState({
    linear: { x: 0, y: 0, z: 0 },
    angular: { x: 0, y: 0, z: 0, w: 0 },
  });

  return (
    <div>
      <Publisher
        name={cmdVelTopic}
        type="geometry_msgs/msg/Twist"
        rate={10.0}
        queue_size={1}
        message={twistMsg}
      />

      <figure>
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
      </figure>
    </div>
  );
}

function TwistTeleop() {
  const [cmdVelTopic, setCmdVelTopic] = useState("/cmd_vel");
  const [pub, setPub] = useState(<TwistPublisher cmdVelTopic={cmdVelTopic} />);

  useEffect(() => {
    if (pub == null) {
      setPub(<TwistPublisher cmdVelTopic={cmdVelTopic} />);
    }
  }, [pub]);

  useEffect(() => {
    setPub(null);
  }, [cmdVelTopic]);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        value={cmdVelTopic}
        onChange={(e) => setCmdVelTopic(e.target.value)}
        type="text"
      />
      {pub}
    </div>
  );
}

export default TwistTeleop;
