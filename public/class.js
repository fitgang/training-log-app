export class Exercise {
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

export class Template {
  constructor(obj) {
    this.name = obj.name;
    this.split = obj.split;
    this.cycle = obj.cycle;
    this.exercises = obj.exercises;
  }
}

export class Routine extends Template {
  constructor(obj) {
    super(obj);
    this.status = obj.status;
    this.date = obj.date;
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