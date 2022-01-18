const EventEmitter = require("events");
const emitter = EventEmitter();

emitter.on("messageLogged", function (arg) {
  console.log("listener called", arg);
});
emitter.emit("messagelogged", { id: 1, url: "http://" });
