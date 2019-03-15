import { RTTI_Account } from "../Resource/RTTI_Account";
import * as account_example from './samples/account-example.json';
import * as account_example_with_guarantor from './samples/account-example-with-guarantor.json';

describe('Account', () => {
  
  test('should decode account-example.json', () => {
      const result = RTTI_Account.decode(account_example);
      expect(result._tag).toBe('Right');    
  })

  test('should decode account-example-with-guarantor.json', () => {
    const result = RTTI_Account.decode(account_example_with_guarantor);
    expect(result._tag).toBe('Right');    
})

})
