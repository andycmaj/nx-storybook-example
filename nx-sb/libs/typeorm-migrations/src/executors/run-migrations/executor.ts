import { ExecutorContext } from '@nx/devkit';
import { RunMigrationsExecutorSchema } from './schema';

export default async function runExecutor(
  options: RunMigrationsExecutorSchema,
  context: ExecutorContext
) {
  console.log('Executor ran for RunMigrations', options);

  const { projectName } = context;
  const { projectType, root } = context.workspace.projects[projectName];

  console.log('Context', projectName, projectType, root);
  return {
    success: true,
  };
}
