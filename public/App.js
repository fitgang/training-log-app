// Array of navigation titles
const navTitles = ["log", "progress", "goals", "cycle", "nutrition", "settings"];

// nav titles : font-awesome icon classname
const navIcons = {

}

function NavBar() {
  // A click handler on all list items which will change the 'App' state
  // According to the 'App's state, the required list will get in focus by changing styles
  return <ul>
    <li></li>
    <li></li>
  </ul>
}

function ViewBox() {
  // A particular component will be returned according to 'App's state
  // Every component to be viewed will contain a state of its own
  return <section>
  </section>
}

class App extends React.Component {
  // Stateful
  // Will control the view in viewbox
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h1>ji</h1>
    <NavBar/>
    <ViewBox/>
    </div>
  }
}
ReactDOM.render(<App />, document.getElementById("app"));