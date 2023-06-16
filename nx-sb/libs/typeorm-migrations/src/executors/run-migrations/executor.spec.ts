import { RunMigrationsExecutorSchema } from './schema';
import executor from './executor';

const options: RunMigrationsExecutorSchema = {};

describe('RunMigrations Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
