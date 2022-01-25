import React from 'react';
import DisplayPlayerTable from '../../components/Data_Tables/playersTable'

export default function index() {
  return (
    <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
      <DisplayPlayerTable />
    </div>
    
  );
}
