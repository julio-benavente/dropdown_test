import {
  DropdownMenu,
  Menu,
  Option,
  ToggleButton,
} from "./components/DropdownButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DropdownMenu>
        <ToggleButton />
        <Menu>
          <Option href="https://google.com" target="_blank">
            Rename
          </Option>
          <Option href="https://facebook.com">Delete</Option>
          <Option>Share</Option>
        </Menu>
      </DropdownMenu>
    </div>
  );
}

export default App;
