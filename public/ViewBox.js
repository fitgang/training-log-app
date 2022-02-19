import Log from "./Log.js";

const ViewBox = props => {
  switch (props.inView) {
    case 'progress':
      return /*#__PURE__*/React.createElement(Progress, null);

    case 'goals':
      return /*#__PURE__*/React.createElement(Goals, null);

    case 'cycle':
      return /*#__PURE__*/React.createElement(Cycle, null);

    case 'nutrition':
      return /*#__PURE__*/React.createElement(Nutrition, null);

    case 'settings':
      return /*#__PURE__*/React.createElement(Settings, null);

    default:
      return /*#__PURE__*/React.createElement(Log, null);
  }
};

export default ViewBox;