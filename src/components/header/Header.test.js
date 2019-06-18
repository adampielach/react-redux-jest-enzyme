import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import {findByTestAttr} from '../../../utils/'

const setup = props => {
    const component = shallow(<Header {...props} />)
    return component
}

describe("Header Component", () => {

    let component;

    beforeEach(() => {
        component = setup();
    });

    it('it should render without errors', () => {
        const hasClass = findByTestAttr(component, 'headerComponent')
        expect(hasClass.length).toBe(1)
    })
})
