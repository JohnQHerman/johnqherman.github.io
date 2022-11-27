// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

process.on('uncaughtException', function (err) {
  console.log('uncaughtException', err.message);
  throw err;
});