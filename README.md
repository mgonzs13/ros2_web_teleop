# ros2_web_teleop

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

```shell
pip3 install -r requirements.txt
```

## Usage

```shell
$ ros2 launch web_teleop teleop.launch.py
```

http://localhost:5000/
