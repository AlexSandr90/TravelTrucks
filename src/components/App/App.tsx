import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import { lazy, Suspense } from 'react';
import Header from '../Header/Header';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const CamperDetail = lazy(
  () => import('../../pages/CamperDetail/CamperDetail')
);

const App = () => {
  return (
    <Router>
      <div className={css.container}>
        <Suspense fallback={null}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CamperDetail />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
