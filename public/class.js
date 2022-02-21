export class Exercise {
  constructor(obj) {
    this.name = obj.name;
    this.sets = obj.sets;
    this.reps = obj.reps;
    this.rest = obj.rest;
  }

  update(prop, val) {
    this[prop] = val;
  }
}

export class Template {
  constructor(obj) {
    this.name = obj.name;
    this.split = obj.split;
    this.cycle = obj.cycle;
    this.exercises = obj.exercises.map(exer => new Exercise(exer));
  }
}

export class Routine extends Template {
  constructor(obj, date) {
    super(obj);
    this.status = obj.status;
    this.date = date;
    if (obj.remarks) this.remarks = obj.remarks;
  }

  // Remove a particular exercise
  removeExercise(exerName) {

  }

  // Add a particular exercise
  addExercise(exerName, stats) {

  }

  // Change stat of a particular exercise
  updateExercise(exerName, stat) {

  }

  addRemarks(str) {
    this.remarks = str;
  }
}