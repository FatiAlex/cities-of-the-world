import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './views/components/layout.component';
import './styles/main.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Layout />);
