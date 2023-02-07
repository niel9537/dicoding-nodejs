const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

eventEmitter.on("birthday-event", birthdayEventListener);

eventEmitter.emit("birthday-event", "Niel");
