import React from 'react'
import { render } from '@testing-library/react';
import TodoFrom from './TodoFrom';

describe('<TodoForm />', () => {
    it('has input and a button', () => {
        const {getByPlaceholderText, getByText} = render(<TodoFrom />);
        getByPlaceholderText('할 일을 입력하세요'); //input 이 출력이 되었는지 확인 하는 조건
        getByText('등록'); // button 이 출력 되었는지 확인
    })
})