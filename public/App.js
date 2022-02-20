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