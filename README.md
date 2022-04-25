# ros2_react_teleop

## Dependencies

```shell
$ sudo apt install -y ros-foxy-rosbridge-library ros-foxy-rosbridge-msgs ros-foxy-rosbridge-server ros-foxy-rosbridge-suite
$ sudo apt install -y ros-foxy-async-web-server-cpp
```

```shell
$ cd ~/ros2_ws/src
$ git clone git@github.com:RobotWebTools/web_video_server.git
$ cd web_video_server
$ git checkout ros2
$ cd ~/ros2_ws
$ colcon build
```

## Usage

```shell
# 1 shell
$ ros2 launch rosbridge_server rosbridge_websocket_launch.xml

# 2 shell
$ ros2 run web_video_server web_video_server

# 3 shell
$ npm start
```
