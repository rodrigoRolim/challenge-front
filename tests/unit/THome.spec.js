import { shallowMount } from '@vue/test-utils';
import THome from '@/components/THome';

describe('THome', () => {
  it('renders props.user when passed', () => {
    const user = 'Rodrigo';
    const wrapper = shallowMount(THome, {
      props: { user }
    });
    expect(wrapper.text()).toMatch(user);
  })
});