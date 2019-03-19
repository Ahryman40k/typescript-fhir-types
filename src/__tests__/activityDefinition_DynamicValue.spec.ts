import { RTTI_PlanDefinition_DynamicValue } from "../R4/Resource/RTTI_PlanDefinition_DynamicValue";

describe('ActivityDefinition DynamicValue', () => {
   test('should decode a valid object', () => {
      const result = RTTI_PlanDefinition_DynamicValue.decode( {
        "path": "dispenseRequest.numberOfRepeatsAllowed",
        "expression": {
          "description": "dispenseRequest.numberOfRepeatsAllowed is three (3)",
          "language": "text/cql",
          "expression": "3"
        }
      });
      expect(result._tag).toBe('Right')
  
  })

  
  test('should not decode a missing mandatory property', () => {
    // only own partial values    
  }) 
})