import { Template, Routine } from './class.js';
import NavBar from './NavBar.js';
import ViewBox from './ViewBox.js'; // Collection of all sections
// Format - 'section-name' : 'font-awesome icon classname for nav bar'

const sections = {
  log: "a",
  progress: "a",
  goals: "a",
  cycle: "a",
  nutrition: "a",
  settings: "a"
};
let userData;

try {
  // Get data from backend
  userData = await getUserData();
} catch (err) {
  console.log(err);
  alert("Error occured.\nPlease refresh the page.");
} // Organize data as per classes used


userData.cycle = userData.cycle.map(temp => new Template(temp));
const log = userData.log;

for (let date in log) {
  userData.log[date] = new Routine(log[date], date);
}

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
      inView: inView,
      userData: this.props.userData
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, {
  sections: sections,
  userData: userData
}), document.getElementById("app"));

async function getUserData() {
  const r = await fetch("/user"),
        d = await r.json();
  return d.userData;
}