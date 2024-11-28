import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ComparisonPage } from './pages/ComparisonPage';
import { AiFuturePage } from './pages/AiFuturePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/ai-future" element={<AiFuturePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;