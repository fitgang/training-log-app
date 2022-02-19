const NavBar = props => {
  // A click handler on all list items which will change the 'App' state
  // According to the 'App's state, the required list will get in focus by changing styles
  const inView = props.inView;
  let listItems = [];

  for (let item in props.navItems) {
    let className = "";
    if (item === inView) className = "active";
    listItems.push( /*#__PURE__*/React.createElement("li", {
      key: item,
      className: className
    }, item));
  }

  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, listItems));
};

export default NavBar;