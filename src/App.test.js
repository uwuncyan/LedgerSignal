// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LedgerSignal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LedgerSignal/i);
    expect(titleElement).toBeInTheDocument();
});
