import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

import Layout from "./layouts/Layout";
import HomePage from './routes/Home';
import PublishPage from "./routes/Publish";
import Articles from './routes/Articles';
import Meteo from './routes/Meteo';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Header/>
  <main>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publier" element={<PublishPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/meteo" element={<Meteo />} />
      </Routes>
    </Layout>
  </main>
  <Footer/>
</BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
