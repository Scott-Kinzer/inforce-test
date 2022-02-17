import './App.css';
import 'antd/dist/antd.css';
import ListPage from './components/ListPage/ListPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductView from './components/ProductView/ProductView';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path="/product/:id" element={<ProductView />} />

      </Route>
    </Routes>


    </div>
  );
}

export default App;
