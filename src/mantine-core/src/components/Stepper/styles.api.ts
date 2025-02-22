import { StepperStylesNames } from './Stepper';

export const Stepper: Record<StepperStylesNames, string> = {
  root: 'Root element',
  steps: 'Steps controls wrapper',
  separator: 'Separator line between step controls',
  separatorActive: 'Separator active modifier',
  content: 'Current step content wrapper',
  step: 'Step control button',
  stepIcon: 'Step icon wrapper',
  stepCompletedIcon: 'Completed step icon, rendered within stepIcon',
  stepProgress: 'Step control modified when step is in progress',
  stepCompleted: 'Step control modified when step is completed',
  stepBody: 'Contains stepLabel and stepDescription',
  stepLabel: 'Step label',
  stepDescription: 'Step description',
};
