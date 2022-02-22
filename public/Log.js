import { getCurrentDate } from "./helpers";

const LogNav = props => {
  return /*#__PURE__*/React.createElement("nav", null, "gygygyg");
};

class Log extends React.Component {
  constructor(props) {
    super(props); // Current date

    const curDate = getCurrentDate();
    this.state = {
      log: props.log,
      inView: curDate
    }; // If log does not contain today's routine

    if (!this.state.log.hasOwnProperty(curDate)) {
      // Create today's routine and store it in log
      this.state.log.curDate = createRoutine(curDate);
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LogNav, null), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null), /*#__PURE__*/React.createElement("h2", null)), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "add exercise"), /*#__PURE__*/React.createElement("button", null, "change routine")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null)))))));
  }

}

export default Log;

function createTodayRoutine(dateStr) {// Find the current day acc. to the split and cycle
  // Create routine from template
}