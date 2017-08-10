import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Render whitout crashing', () => {
        shallow(<TopNav />);
    });

    it('Render what button', () => {
        const wrapper = shallow(<TopNav />)
        expect(wrapper.find('.what')).toHaveLength(1);
    })

    it('Render new game button', () => {
        const wrapper = shallow(<TopNav />)
        expect(wrapper.find('.new')).toHaveLength(1);
    })

    it('Should fire the onInfo callback when what button is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onInfo={callback} />);
        const link = wrapper.find('.what');
        link.simulate('click');
        expect(callback).toHaveBeenCalled();
    })

it('Should fire the onNewGame callback when what button is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onNewGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(callback).toHaveBeenCalled();
    })
});