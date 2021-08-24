import NavBar from './NavBar'
import { Switch, Route, useHistory } from "react-router-dom";
import { Themeprovider } from '@material-ui/core/styles'
import '@fontsource/roboto'


function App() {
  return (
      <div>
        <NavBar />
        <Switch>
          {/* routes to other components */}
        </Switch>
      </div>
  )
}

export default App;
