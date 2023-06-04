import './NotFoundPage.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NotFoundPageProps {
  url: string;
  children: React.ReactNode;
}

const NotFoundPage = ({ url, children }: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__message">
        We&apos;re sorry, but the page you requested could not be found.
      </p>
      <button className="not-found__button" onClick={() => navigate(url)}>
        {children}
      </button>
    </div>
  );
};

export default NotFoundPage;
