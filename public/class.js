class Exercise {
  constructor(obj) {
    this.name = obj.name;
    this.sets = obj.sets;
    this.reps = obj.reps;
    this.rest = obj.rest;
  }

  update(this, prop, val) {
    this[prop] = val;
  }
}

class Routine {
  constructor(obj) {
    this.name = obj.name;
    this.status = obj.status;
    this.split = obj.split;
    this.cycle = obj.cycle;
    this.date = obj.date;

    // Object literal
    /* Format -
      exercise-name: Exercise {}
    */
    this.exercises = obj.exercises;
    if (obj.remarks) this.remarks = obj.remarks;
  }

  // Remove a particular exercise
  removeExercise(this, exerName) {

  }

  // Add a particular exercise
  addExercise(this, exerName, stats) {

  }

  // Change stat of a particular exercise
  updateExercise(this, exerName, stat) {

  }

  addRemarks(this, str) {
    this.remarks = str;
  }
}