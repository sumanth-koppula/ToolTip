import ToolTip from './ToolTip';
import './style/App.css'

function App() {
  return (
    <div className="App">
      <div>
        <ToolTip position='top' />
        <ToolTip position='bottom' />
      </div>
      <div>
        <ToolTip position='left' />
        <ToolTip position='right' />
      </div>
    </div>
  );
}

export default App;
