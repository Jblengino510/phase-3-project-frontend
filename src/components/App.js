import LandingPage from './LandingPage';
import NavBar from './NavBar'
import { Switch, Route, useHistory } from "react-router-dom";
import { Themeprovider } from '@material-ui/core/styles'
import '@fontsource/roboto'


function App() {
  return (
      <div style={{backgroundColor: '#333'}}>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
  )
}

export default App;
