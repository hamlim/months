import React from 'react';

export default () => (
  <aside className="aside">
    aside
    <style jsx>{`
      .aside {
        grid-row: 3 / 4;
      }
      @media screen and (min-width: 1200px) {
        .aside {
          grid-row: 1 / 2;
        }
      }
    `}</style>
  </aside>
)