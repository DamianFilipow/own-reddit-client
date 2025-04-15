import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBox from './ErrorBox';

describe('ErrorBox', () => {

    it('renders without crashing', () => {
        render(<ErrorBox setInputValue={() => {}} setQuery={() => {}}/>)
        const container = screen.getByTestId('error-box')
        expect(container).toBeInTheDocument()
    })

    it('calls setInputValue and setQuery when button is clicked', () => {
        const mockSetInputValue = jest.fn();
        const mockSetQuery = jest.fn();

        render(<ErrorBox setInputValue={mockSetInputValue} setQuery={mockSetQuery}/>)

        const button = screen.getByText('Return Home')
        fireEvent.click(button)

        expect(mockSetInputValue).toHaveBeenCalledWith('')
        expect(mockSetQuery).toHaveBeenCalledWith('')
    })
})