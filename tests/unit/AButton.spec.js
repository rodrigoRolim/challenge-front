import { shallowMount } from "@vue/test-utils";
import AButton from "@/components/AButton";

describe('AButton', () => {
  it('Check if button is rendered', () => {
    const wrapper = shallowMount(AButton);
    
    expect(wrapper.find('.AButton').exists()).toBe(true);
  });

  it('renders props.text when passed', () => {
    const text = "save";
    const wrapper = shallowMount(AButton, {
      props: { text }
    });
    expect(wrapper.text()).toMatch(text);
  });

  it('emit click when button is clicked', async () => {
    const wrapper = shallowMount(AButton);
    
    const aButton = wrapper.find('.AButton');

    spyOn(wrapper.vm, 'click');

    aButton.trigger('click');
    expect(wrapper.vm.click).toBeCalled();
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('change color when receive props.color', () => {
    
  })
});