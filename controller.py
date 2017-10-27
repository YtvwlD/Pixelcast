from pychromecast.controllers import BaseController

class PixelController(BaseController):
    def __init__(self):
        super(PixelController, self).__init__("urn:x-cast:de.ytvwld.pixelcast")

    def receive_message(self, message, data):
        print("Received message: {}".format(data))
        return True

    def draw(self, x, y, r, g, b):
        self.send_message({
            "command": "draw",
            "x": x,
            "y": y,
            "r": r,
            "g": g,
            "b": b
            })
