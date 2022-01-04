import Dogs from './views/Dogs/Dogs';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <NavLink to="/Dogs">Home</NavLink>
        <Switch>
          <Route path="/Dogs" component={Dogs} />
          <Route path="/Dogs/:id" component={Dog}
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
