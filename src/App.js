import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import UrlPost from './Components/UrlPost/UrlPost';
import AllUrls from './Components/AllUrls/AllUrls';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UrlPost />
      <AllUrls />
      <Footer />
    </div>
  );
}

export default App;
