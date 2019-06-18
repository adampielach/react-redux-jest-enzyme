import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr } from '../../../utils/';

const setup = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe("Headline Component", () => {
    describe("Has props", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: "test 1",
                description: "Some text"
            }
            wrapper = setup(props);
        })

        it("Should render without errors", () => {
            const component = findByTestAttr(wrapper, "HeadlineComponent");
            expect(component.length).toBe(1);
        });

        it("Should render H1", () => {
            const component = findByTestAttr(wrapper, "header");
            expect(component.length).toBe(1)
        });

        it("Should render description", () => {
            const component = findByTestAttr(wrapper, "description");
            expect(component.length).toBe(1)
        })
    });

    describe("Has NO props", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup()
        })

        it("Should not render", () => {
            const component = findByTestAttr(wrapper, "HeadlineComponent");
            expect(component.length).toBe(0)
        })
    })
})
