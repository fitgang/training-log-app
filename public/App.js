const LogNav = (props) => {
  return <nav></nav>
}

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <LogNav/>
        <section>
          <header>
            <h1>{/*routineName|Day-N*/}</h1>
            <h2>{/*split|n-day-cycle */}</h2>
          </header>
          <main>
            <div>
              <button>add exercise</button>
              <button>change routine</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </main>
        </section>
      </div>
    )
  }
}

const NavBar = (props) => {

  // A click handler on all list items which will change the 'App' state
  // According to the 'App's state, the required list will get in focus by changing styles
  const inView = props.inView;
  let listItems = [];

  for (let item in props.navItems) {
    let className = "";

    if (item === inView) className = "active";

    listItems.push(
      <li key={item} className={className}>
        {item}
      </li>
    );
  }

  return <nav><ul>{listItems}</ul></nav>;
};

const ViewBox = (props) => {
  switch (props.inView) {
    case 'progress': return <Progress/>;
    case 'goals': return <Goals/>;
    case 'cycle': return <Cycle/>;
    case 'nutrition': return <Nutrition/>;
    case 'settings': return <Settings/>;
    default: return <Log/>
  }
}

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

// User data
let userData = {
  user: {
    name: "Ayush Gupta",
    age: 20,
    height: 5.9,
    weight: 75
  },
  split: "U/L",

  // cycle contains 'template routines' as object instances of class Routine
  cycle: ["U1", "L1", "U2", "L2", "U3"],
  goals: {
    "deadline-date1": ["goal1", "goal2"],
    "deadline-date2": ["goal1", "goal2"]
  },
  log: {
    "date1": "object instances of class Routine",
    "date2": "object instances of class Routine"
  }
}

// Collection of all sections
// Format - 'section-name' : 'font-awesome icon classname for nav bar'
const sections = {
  log: "a",
  progress: "a",
  goals: "a",
  cycle: "a",
  nutrition: "a",
  settings: "a"
};

class App extends React.Component {

  // Stateful
  constructor(props) {
    super(props);
    this.state = { inView: "log" };
  }

  render() {
    const inView = this.state.inView;
    return (
      <div>
        <h1>Training log</h1>
        <NavBar navItems={this.props.sections} inView={inView} />
        <ViewBox inView={inView}/>
      </div>
    );
  }
}
ReactDOM.render(<App sections={sections} />, document.getElementById("app"));