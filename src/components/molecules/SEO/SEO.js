import React from 'react';
import { Helmet } from 'react-helmet';

export const SEO = ({ directory }) => (
  <Helmet>
    <title>Study buddy - {directory}</title>
    <meta name="Study buddy" content="Study buddy" />
    <link rel="icon" type="image/png" href="sb-icon.png" />
  </Helmet>
);
