import {Story} from '@storybook/vue'
import MyButton from './MyButton.vue'

export default {
  title: 'Example/MyButton',
  component: MyButton,
  argTypes: {
    onCLick: () => {}
  },
};

const Template: Story = (_: any, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button :parentClass="$props.parentClass" :onClick="onClick" />',
});

export const Default = Template.bind({});
Default.args = {
  
};

export const Costom = Template.bind({})
Costom.args = {
  parentClass: 'hogehoge'
}

