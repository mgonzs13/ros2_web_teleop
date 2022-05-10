import { RosConnect } from "roslib-reactjs";
import CameraViewer from "./components/CameraViewer";
import TwistTeleop from "./components/TwistTeleop";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RosConnect url="ws://localhost:9090" autoconnect timeout={2000}>
        <CameraViewer />
        <TwistTeleop />
      </RosConnect>
    </div>
  );
}

export default App;
