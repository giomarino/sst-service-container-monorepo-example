import { StackContext } from 'sst/constructs';
import { Service } from 'sst/constructs';

export function Server({ stack }: StackContext) {
  const server = new Service(stack, 'Server', {
    path: 'packages/server',
    port: 3000,
  });

  return {
    server,
  };
}