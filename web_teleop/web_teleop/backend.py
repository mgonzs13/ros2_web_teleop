#!/usr/bin/env python3

# Copyright (C) 2023  Miguel Ángel González Santamarta

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.


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
