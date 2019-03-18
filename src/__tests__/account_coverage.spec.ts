import { RTTI_Account_Coverage } from "../R4/Resource/RTTI_Account_Coverage";

describe('Account Coverage', () => {
  test('should decode a valid object', () => {
      const result = RTTI_Account_Coverage.decode( {
        "coverage": {
          "reference": "Coverage/9876B1"
        },
        "priority": 1
      });
      expect(result._tag).toBe('Right')
  
  })

  test('should not decode a missing mandatory property', () => {
      const result = RTTI_Account_Coverage.decode({
        "priority": 1
      });
      expect(result._tag).toBe('Left')
    
  })
})