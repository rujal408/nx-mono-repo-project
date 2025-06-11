import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './app/app';
import { BpmFormProvider } from '@mono-repo-projects/bpm-form-generator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BpmFormProvider>
      <App />
    </BpmFormProvider>
  </StrictMode>
);
