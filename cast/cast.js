"use strict";

var castReceiverManager = cast.receiver.CastReceiverManager.getInstance();

var messageBus = castReceiverManager.getCastMessageBus('urn:x-cast:de.ytvwld.pixelcast');
messageBus.onMessage = function(event) {
  data = JSON.parse(event.data);
  if(data["command"] == "draw") {
    draw(
      data["x"],
      data["y"],
      data["r"],
      data["g"],
      data["b"]
    );
  }
}

castReceiverManager.start();

