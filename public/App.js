import NavBar from './NavBar.js';
import ViewBox from './ViewBox.js'; // User data will be fetched from the backend

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
}; // Collection of all sections
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
    this.state = {
      inView: "log"
    };
  }

  render() {
    const inView = this.state.inView;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Training log"), /*#__PURE__*/React.createElement(NavBar, {
      navItems: this.props.sections,
      inView: inView
    }), /*#__PURE__*/React.createElement(ViewBox, {
      inView: inView
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, {
  sections: sections,
  user: userData
}), document.getElementById("app"));