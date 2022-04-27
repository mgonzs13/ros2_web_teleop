#!/usr/bin/env python3

import ament_index_python
from flask import Flask
from waitress import serve


class Backend:

    def __init__(self):

        app = Flask("web_teleop",
                    static_folder=ament_index_python.get_package_share_directory(
                        "web_teleop") + "/frontend",
                    static_url_path="/")

        @app.route("/")
        def index():
            return app.send_static_file("index.html")

        serve(app, host="localhost", port=5000)


def main(args=None):
    Backend()


if __name__ == "__main__":
    main()
