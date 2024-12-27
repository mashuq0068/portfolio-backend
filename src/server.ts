import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  await mongoose.connect(config.database_url as string);

  app.listen(config.port, () => {
    console.log(`app is running on port ${config.port}`);
  });
}

main();
