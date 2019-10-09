import { shallowMount } from '@vue/test-utils';
import SuperPlaceholder from '../src/SuperPlaceholder.vue';

describe('SuperPlaceholder', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(SuperPlaceholder);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = shallowMount(SuperPlaceholder);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
