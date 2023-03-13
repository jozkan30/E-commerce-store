import Home from './screens/Home.jsx';
import './app.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav.jsx';
import ListingDetail from './screens/ListingDetail.jsx';



function App() {
  return (
    <div className='main'>
    <Nav />
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="items/:id" element={<ListingDetail />} />
    </Routes>
    </main>
    </div>
  );
}

export default App;
