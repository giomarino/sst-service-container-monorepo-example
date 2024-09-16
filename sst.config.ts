import { SSTConfig } from 'sst';
import { Server } from './stacks/Server';

export default {
  config(_input) {
    return {
      name: 'server',
      region: 'eu-central-1',
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: 'nodejs20.x',
      architecture: 'arm_64',
    });
    
    app.stack(Server)
  },
} satisfies SSTConfig;
