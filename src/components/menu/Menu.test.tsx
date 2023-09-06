import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'

test('render correctly', () => {
    render(<Provider store={store}><Menu quantity={42} /></Provider>)

    const element = screen.getByText('42 items left')
    expect(element).toBeInTheDocument()
})