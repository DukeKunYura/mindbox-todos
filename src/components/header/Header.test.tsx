import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render correctly', () => {
    render(<Header />)

    const element = screen.getByText('todos')
    expect(element).toBeInTheDocument()
})