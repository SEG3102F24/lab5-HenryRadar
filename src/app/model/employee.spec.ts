import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee('andrew', '2000/20/20', 'London', 1000)).toBeTruthy();
  });
});
