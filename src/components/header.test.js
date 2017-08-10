import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';
import InfoModal from './info-modal';

describe('<Header />', () => {
    it('Renders whitout crashing', () => {
        shallow(<Header />);
    });

    it("Don't render info modal when closed", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('<InfoModal />')).toHaveLength(0);
    });

    it('Render info modal when open', () => {
        const wrapper = shallow(<Header />);
        wrapper.setState({showInfoModal: 'true'});
        expect(wrapper.find(InfoModal)).toHaveLength(1);
    });
});