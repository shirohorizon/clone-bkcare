import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Modal from './components/Modal';

const App = () => {
  const { language, message } = useSelector((state) => state.intl);

  return (
    <IntlProvider messages={message} locale={language} defaultLocale="vi-VN">
      <Modal />
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = Fragment;

              if (route.layout) {
                Layout = route.layout;
              }

              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </IntlProvider>
  );
};

export default App;
