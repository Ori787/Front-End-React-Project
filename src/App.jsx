import logo from './logo.svg';
import './App.css';
import Layout from './App Layout/layout';
import MyCard from './components/cards';
import HomePage from './pages/homepage';
import Router from './routes/router';




const App = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
