import { Toast } from '../../../core/model/toast';

describe('Toast', () => {
  it('should create an instance and with optional parameters', () => {
    expect(new Toast('','','')).toBeTruthy();
    expect(new Toast('','')).toBeTruthy();
  });
});
