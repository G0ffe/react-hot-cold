import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders whitout crashing,', () => {
        shallow(<GuessCount />);
    });

    it('Should render guess counter', () => {
        const wrapper = shallow(<GuessCount />);
        expect(wrapper.find('#count')).toHaveLength(1);
    });
});