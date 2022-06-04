import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import PlaylistPage from './modules/musicPlayer/components/playlists';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/playlists' component={PlaylistPage} />
        <Redirect to="/playlists" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
