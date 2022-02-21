import Log from "./Log.js";

const ViewBox = props => {
  const userData = props.userData,
        log = userData.log,
        goals = userData.goals,
        cycle = userData.cycle;

  switch (props.inView) {
    case 'progress':
      return /*#__PURE__*/React.createElement(Progress, null);

    case 'goals':
      return /*#__PURE__*/React.createElement(Goals, {
        goals: goals
      });

    case 'cycle':
      return /*#__PURE__*/React.createElement(Cycle, {
        cycle: cycle
      });

    case 'nutrition':
      return /*#__PURE__*/React.createElement(Nutrition, null);

    case 'settings':
      return /*#__PURE__*/React.createElement(Settings, null);

    default:
      return /*#__PURE__*/React.createElement(Log, {
        log: log
      });
  }
};

export default ViewBox;