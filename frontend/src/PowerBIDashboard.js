import React from 'react';

function PowerBIDashboard() {
  return (
    <div>
      <h1>Dashboard de Power BI</h1>
      <img src="/reports/visualization1.png" alt="Visualització 1" />
      <img src="/reports/visualization2.png" alt="Visualització 2" />
      <embed src="/reports/visualization3.pdf" width="600" height="400" type="application/pdf" />
    </div>
  );
}

export default PowerBIDashboard;