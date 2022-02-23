import { getDateString } from "./helpers";

const LogNav = props => {
  return /*#__PURE__*/React.createElement("nav", null, "gygygyg");
};

const LogMain = props => {
  const routine = props.routine;

  if (routine == "REST") {
    return /*#__PURE__*/React.createElement("section", null, "REST");
  }

  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, routine.name), /*#__PURE__*/React.createElement("h2", null, routine.split + routine.cycle.length + "day cycle")), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "add exercise"), /*#__PURE__*/React.createElement("button", null, "change routine")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null))))));
};

class Log extends React.Component {
  constructor(props) {
    super(props); // Current date

    const curDateInst = new Date(),
          curDateStr = getDateString(curDateInst);
    this.state = {
      log: props.log,
      inView: curDateStr
    }; // If log does not contain today's routine

    if (!this.state.log.hasOwnProperty(curDateStr)) {
      // Create today's routine and store it in log
      this.state.log[curDateStr] = createTodayRoutine(this.state.log, props.cycle, curDateInst);
    }
  }

  render() {
    const routine = this.state.log[this.state.inView];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LogNav, null), /*#__PURE__*/React.createElement(LogMain, {
      routine: routine
    }));
  }

}

export default Log;

function createTodayRoutine(log, cycle, curDateInst) {// Find the template
  // Find the last date of workout
  // Check if the cycle is same as the last one 
  // If same , then find the current day acc. and cycle
  // Else today is the first day of the new cycle
  // Create routine from template
}