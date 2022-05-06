import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import TodoFrom from './TodoFrom';
import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';

describe('<TodoForm />', () => {
    it('has input and a button', () => {
        const {getByPlaceholderText, getByText} = render(<TodoFrom />);
        getByPlaceholderText('할 일을 입력하세요'); //input 이 출력이 되었는지 확인 하는 조건
        getByText('등록'); // button 이 출력 되었는지 확인
    })

    it('changes input', () => {
        const {getByPlaceholderText} = render(<TodoFrom />);
        const input = getByPlaceholderText('할 일을 입력하세요');
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        })
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    })

    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn();
        const {getByPlaceholderText, getByText} = render(<TodoFrom onInsert={onInsert} />)
        const input = getByPlaceholderText('할 일을 입력하세요');
        const button = getByText('등록');
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');
    })
})