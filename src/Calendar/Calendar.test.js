import React from 'react';
import Calendar from './Calendar';
import { create } from 'react-test-renderer';

it('renders week correctly', () => {
    const refdate = new Date(2017,12,24);
    const tree = create(<Calendar initDate={refdate} initView="week" />);
    expect(tree).toMatchSnapshot();
});

it('renders month correctly', () => {
    const refDate = new Date(2017,12,24);
    const tree = create(<Calendar initDate={refDate} initView="month" />);
    expect(tree).toMatchSnapshot();
})