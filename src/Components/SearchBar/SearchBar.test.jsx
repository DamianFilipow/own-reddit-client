import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar'

describe('SearchBar', () => {

    it('renders without crashing', () => {
        render(<SearchBar setInputValue={() => {}} setQuery={() => {}}/>)

        const container = screen.getByTestId('search-bar')
        expect(container).toBeInTheDocument()
    })

    it('calls setInputValue on input change', () => {
        const mockSetInputValue = jest.fn();
        render(<SearchBar setInputValue={mockSetInputValue} setQuery={() => {}} inputValue="" />);
        const input = screen.getByTestId('text-input');
        fireEvent.change(input, { target: { value: 'Hello' } });
        expect(mockSetInputValue).toHaveBeenCalledWith('Hello');
      });

    it('button sets query to corresponding input', () => {
        const mockSetQuery = jest.fn()

        const Wrapper = () => {
            const [inputValue, setInputValue] = React.useState('');
            return (
                <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setQuery={mockSetQuery}
                />
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button')
        const input = screen.getByTestId('text-input')

        fireEvent.change(input, { target: { value: 'Test' } })
        fireEvent.click(button)
        
        expect(mockSetQuery).toHaveBeenCalledWith('Test')
    })
})