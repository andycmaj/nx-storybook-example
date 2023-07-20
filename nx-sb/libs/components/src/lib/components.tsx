import { useState } from 'react';
import { container } from './components.css';
import { AgGridReact } from '@ag-grid-community/react';
import { ColDef } from '@ag-grid-community/core';

/* eslint-disable-next-line */
export interface ComponentsProps {}

export function Components(props: ComponentsProps) {
  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);

  const [columnDefs] = useState<ColDef[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);

  return (
    <div className={container}>
      <h1>Welcome to Components!</h1>
      <button>click me</button>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}

export default Components;
