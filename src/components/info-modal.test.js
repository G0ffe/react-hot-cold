import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
    it('Renders whitout crashing', () => {
        shallow(<InfoModal />);
    });

    it('Should fire callback onClose when close button is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<InfoModal onClose={callback} />);
        const link = wrapper.find('.close');
        link.simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});