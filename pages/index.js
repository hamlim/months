import React from 'react';

import Aside from '../components/aside';
import Calendar from '../components/calendar';

export default () => (
  <main className="main">
    <Aside />
    <Calendar />
    <style jsx>{`
      .main {
        display: grid;
        grid-template-columns: 1fr;
      }

      @media screen and (min-width: 1200px) {
        .main {
          grid-template-columns: 300px 1fr;
        }
      }
    `}</style>
  </main>
);