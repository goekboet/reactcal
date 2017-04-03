import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link view', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Link text="test" action={x => x} />, div);
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<Link text="test" action={x => x} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('calls action', () => {
        const preventDefault = jest.fn();
        const action = jest.fn();
        const link = shallow(<Link text="test" action={action} />);

        link.find('a').simulate('click', { preventDefault });
        expect(preventDefault).toBeCalled();
        expect(action).toBeCalled();
    })
});