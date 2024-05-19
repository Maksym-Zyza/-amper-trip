import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Loader from './UI/Loader/Loader';
import MainLayout from 'layouts/MainLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CataloguePage = lazy(() => import('pages/CataloguePage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CataloguePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
