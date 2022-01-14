import SiteHeader from './components/SiteHeader/SiteHeader';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <body className="App__body">
        <HomePage />
      </body>
    </div>
  );
}

export default App;
