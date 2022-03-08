import Home from '../views/Home'
import NotFound from '../views/NotFound'

import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'

function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default App