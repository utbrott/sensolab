import { createContext } from 'react';

export const LabsContext = createContext({
  temperature: {
    config: {},
    taskPrompts: [{ taskId: 0, content: '' }],
    taskData: { 0: [] },
    validationData: { 0: [] },
  },
  displacement: {
    config: {},
    taskPrompts: [{ taskId: 0, content: '' }],
    taskData: { 0: [] },
    validationData: { 0: [] },
  },
  strain: {
    config: {
      material: {
        metal: '',
        gaugeFactor: 0,
        modulus: 0,
        tempCoeff: 0,
      },
      inputVoltage: '',
      resistance: '',
      bridge: {
        type: '',
        multiplier: 0,
      },
    },
    taskPrompts: [{ taskId: 0, content: '' }],
    taskData: {
      0: [],
      1: [],
    },
    validationData: {
      0: [],
      1: [],
    },
  },
  piezoelectric: {
    config: {},
    taskPrompts: [{ taskId: 0, content: '' }],
    taskData: { 0: [] },
    validationData: { 0: [] },
  },
  isConfigSaved: false,
  isValidationAvailable: false,
  isLabFinished: false,
  updateConfig: (sensor: string, configField: string, value: string) => {},
  saveConfig: () => {},
  updateValidationState: () => {},
  updateLabFinishedState: () => {},
});
