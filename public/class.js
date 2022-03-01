import { getCurDateString } from "./helpers.js";

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
    this.day = obj.day;
    this.exercises = obj.exercises.map(exer => new Exercise(exer));
  }

  createRoutine() {
    return new Routine(this, getCurDateString());
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


}

export class Routine extends Template {
  constructor(obj, date) {
    super(obj);
    this.date = date;
    this.status = "ongoing";
  }

  updateRemarks(str) {
    this.remarks = str;
  }

  static create(obj) {
    let routine = new Routine(obj, obj.date);
    routine.name = obj.name;
    routine.status = obj.status;
    return routine
  }
}