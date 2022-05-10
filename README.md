# ros2_web_teleop

This is a simple web teleop app for ROS 2 (Foxy).

## Dependencies

```shell
$ cd ~/ros2_ws/src
$ git@github.com:mgonzs13/ros2_web_teleop.git
$ cd ros2_web_teleop
$ pip3 install -r requirements.txt
$ cd ~/ros2_ws
$ rosdep install --from-paths src -r -y
$ colcon build
```

## Usage

```shell
$ ros2 launch web_teleop teleop.launch.py
```

http://localhost:5000/
