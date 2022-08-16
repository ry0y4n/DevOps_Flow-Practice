import { mount } from '@vue/test-utils';
import App from "@/components/MomosukeWorld.vue";

test("test App Component",function(){
  const wrapper = mount(App,{
    propsData:{
      msg: "World"
    }
  });
  expect(wrapper.text()).toBe('Hello World')
})