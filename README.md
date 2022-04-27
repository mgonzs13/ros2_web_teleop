# ros2_web_teleop

This is a simple web teleop app created using rosbridge_server, web_video_server and roslib-reactjs.

## Dependencies

```shell
$ pip3 install -r requirements.txt
```

```shell
$ cd ~/ros2_ws/src
$ git clone git@github.com:RobotWebTools/web_video_server.git
$ cd web_video_server
$ git checkout ros2
```

```shell
$ cd ~/ros2_ws/src
$ rosdep install --from-paths src -r -y
$ colcon build
```

## Usage

```shell
$ ros2 launch web_teleop teleop.launch.py
```

http://localhost:5000/
