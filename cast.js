"use strict";

var castReceiverManager = cast.receiver.CastReceiverManager.getInstance();

var messageBus = castReceiverManager.getCastMessageBus('urn:x-cast:de.ytvwld.pixelcast');
messageBus.onMessage = function(event) {
  if(event.data["command"] == "draw") {
    draw(
      event.data["x"],
      event.data["y"],
      event.data["r"],
      event.data["g"],
      event.data["b"]
    );
  }
}

castReceiverManager.start();

