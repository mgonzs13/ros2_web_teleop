import os
from ament_index_python.packages import get_package_share_directory

from launch import LaunchDescription
from launch.actions import IncludeLaunchDescription
from launch.launch_description_sources import AnyLaunchDescriptionSource
from launch_ros.actions import Node


def generate_launch_description():

    rosbridge_websocket = IncludeLaunchDescription(
        AnyLaunchDescriptionSource(
            os.path.join(
                get_package_share_directory("rosbridge_server"),
                "launch",
                "rosbridge_websocket_launch.xml")
        )
    )

    web_video_server = Node(
        package="web_video_server",
        executable="web_video_server",
        name="web_video_server")

    backend = Node(
        package="web_teleop",
        executable="backend",
        name="backend")

    ld = LaunchDescription()
    ld.add_action(rosbridge_websocket)
    ld.add_action(web_video_server)
    ld.add_action(backend)

    return ld
