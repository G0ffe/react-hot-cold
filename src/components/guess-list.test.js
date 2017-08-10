import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders whitout crashing', () => {
        shallow(<GuessList guesses={[3, 2, 5]}/>);
    });

    it('Render list items', () => {
        const wrapper = mount(<GuessList guesses= {[3, 44, 66]} />);
        expect(wrapper.find('#guessList').children()).toHaveLength(3);
    })
});