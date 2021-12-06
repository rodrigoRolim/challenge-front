import { shallowMount } from "@vue/test-utils";
import AInput from "@/components/AInput";

describe('AInput', () => {
  it('Check if input is rendered', () => {
    const wrapper = shallowMount(AInput);
    expect(wrapper.find('.AInput').exists()).toBe(true);
  });
  it('renders props.label when passed', () => {
    const label = "name";
    const wrapper = shallowMount(AInput, {
      props: { label }
    });
    expect(wrapper.find('span').text()).toMatch(label);
  });
  it('show error message when props.error is passed', () => {
    const error = "_error";
    const wrapper = shallowMount(AInput, {
      props: { error }
    });
    expect(wrapper.find('small').text()).toMatch(error);
  });
  it('check if input change your color to error color when props.error is passed', () => {
    const error = "_error";
    const wrapper = shallowMount(AInput, {
      props: { error }
    });
    expect(wrapper.classes('AInput--error')).toBe(true);
  })
});