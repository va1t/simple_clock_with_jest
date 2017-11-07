// simple_clock.js
// Create a clock the displays the time

// Get current time
class Time {
  constructor() {
    //holder for time callbacks
    this.timeCallbacks = [];
    
    //call timebacks every second
    setInterval(this.runTimeCallbacks.bind(this), 1000);
  }

  setNewCallback(cb) {
    //push a new calback to the stack
    this.timeCallbacks.push(cb);
  }

  runTimeCallbacks() {
    //loop through all callbacks and pass back new time
    this.timeCallbacks.forEach(callback => {
      callback(new Date());
    });
  }

};


//display time
class Displaytime {
  constructor() {
    //get an instance of time to run our callback
    let time = new Time();

    //add a new time callback to the time class
    time.setNewCallback(this.updateTimeUI);
  }

  //update the time to the UI
  updateTimeUI(newTime) {
    console.log(newTime);
  }
  
};

module.exports = {
  Time: Time,
  Displaytime: Displaytime
};

let newUI = new Displaytime();