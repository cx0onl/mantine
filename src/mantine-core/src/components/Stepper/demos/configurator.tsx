import React from 'react';
import { Stepper, StepperProps } from '../Stepper';

function Wrapper(props: Partial<StepperProps>) {
  return (
    <Stepper {...props} breakpoint="sm" active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}

const codeTemplate = (props: string) => `<Stepper${props} active={1}>
  <Stepper.Step label="Step 1" description="Create an account" />
  <Stepper.Step label="Step 2" description="Verify email" />
</Stepper>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md' },
  ],
};
