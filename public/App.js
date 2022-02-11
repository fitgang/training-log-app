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

// User data


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