import SiteHeader from './components/SiteHeader/SiteHeader';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <div className="App__main-page">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
