import { container } from './components.css';
// import { AgGridReact } from 'ag-grid-react';

/* eslint-disable-next-line */
export interface ComponentsProps {}

export function Components(props: ComponentsProps) {
  return (
    <div className={container}>
      <h1>Welcome to Components!</h1>
      <button>click me</button>
    </div>
  );
}

export default Components;
