
import { RTTI_Account_Guarantor } from "../R4/Resource/RTTI_Account_Guarantor";

describe('Account Guarantor', () => {
  test('should decode a valid object', () => {
      const result = RTTI_Account_Guarantor.decode({
        "party": {
          "reference": "RelatedPerson/benedicte",
          "display": "Bénédicte du Marché"
        },
        "onHold": false,
        "period": {
          "start": "2016-01-01"
        }
      });
      expect(result._tag).toBe('Right')
  
  })

  test('should not decode a missing mandatory property', () => {
      const result = RTTI_Account_Guarantor.decode({

        "onHold": false,
        "period": {
          "start": "2016-01-01"
        }
      });
      expect(result._tag).toBe('Left')
    
  })
})