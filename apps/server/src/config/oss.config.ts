import { registerAs } from '@nestjs/config';

export default registerAs('oss', () => ({
  region: process.env.OSS_REGION || '',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.OSS_SECRET_ACCESS_KEY || '',
  bucket: process.env.OSS_BUCKET || 'j-assistant',
  endpoint: process.env.OSS_ENDPOINT || '',
}));
