require('dotenv').config();
const { sendOtpEmail, sendPasswordResetEmail } = require('./src/services/emailService');

(async () => {
  console.log('');
  console.log('====================================');
  console.log('TEST 1: sendOtpEmail');
  console.log('====================================');
  try {
    const r1 = await sendOtpEmail('bhumilink11@gmail.com', '123456', 'login', 'Test User');
    console.log('✅ sendOtpEmail SUCCESS:', JSON.stringify(r1));
  } catch (e) {
    console.error('❌ sendOtpEmail FAILED:');
    console.error('   Message:', e.message);
    console.error('   Stack:', e.stack);
  }

  console.log('');
  console.log('====================================');
  console.log('TEST 2: sendPasswordResetEmail');
  console.log('====================================');
  try {
    const r2 = await sendPasswordResetEmail(
      'bhumilink11@gmail.com',
      'Test User',
      'http://localhost:3000/reset-password?token=abc123xyz'
    );
    console.log('✅ sendPasswordResetEmail SUCCESS:', JSON.stringify(r2));
  } catch (e) {
    console.error('❌ sendPasswordResetEmail FAILED:');
    console.error('   Message:', e.message);
    console.error('   Stack:', e.stack);
  }

  console.log('');
  console.log('====================================');
  console.log('DONE');
  console.log('====================================');
})();
