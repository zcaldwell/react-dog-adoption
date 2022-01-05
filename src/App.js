import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/Dogs/:id" component={Dog} />
          <Route path="/Dogs" component={Dogs} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
