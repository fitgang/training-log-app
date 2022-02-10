class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav></nav>
        <section>
          <header>
            <h1>{/*routineName|Day-N*/}</h1>
            <h2>{/*split|n-day-cycle */}</h2>
          </header>
          <main>
            <div>
              <buttons>add exercise</buttons>
              <buttons>change routine</buttons>
            </div>
            <table>
              <thead></thead>
              <tbody></tbody>
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

// Collection of all sections
/* Format -
  'section-name' : {
    iconClass: 'font-awesome icon classname',
    comp: <React Component />
  }
*/
const sections = {
  log: {
    iconClass: "a",
    // comp: <Log/>
  },
  progress: {
    iconClass: "a",
    // comp: <Progress/>
  },
  goals: {
    iconClass: "a",
    // comp: <Goals/>
  },
  cycle: {
    iconClass: "a",
    // comp: <Cycle/>
  },
  nutrition: {
    iconClass: "a",
    // comp: <Nutrition/>
  },
  settings: {
    iconClass: "a",
    // comp: <Settings/>
  },
};

class App extends React.Component {

  // Stateful
  // Will control the view in viewbox
  constructor(props) {
    super(props);
    this.state = { inView: "log" };
  }

  render() {
    const sections = this.props.sections;
    let navItems = {};
    for (let section in sections) navItems[section] = sections[section.iconClass];
    return (
      <div>
        <h1>Training log</h1>
        <NavBar navItems={navItems} inView={this.state.inView} />
        {
          // ViewBox component goes here
          // A particular component will be rendered according to 'App's state
          // Every ViewBox component will contain a state of its own
          sections[this.state.inView].comp
        }
      </div>
    );
  }
}
ReactDOM.render(<App sections={sections} />, document.getElementById("app"));