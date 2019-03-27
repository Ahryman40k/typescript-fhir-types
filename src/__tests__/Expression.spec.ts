import { RTTI_Expression } from "../R4/Resource/RTTI_Expression";


describe('Expression', () => {
  
    test("should decode text/cql expression", () => {        
        expect( RTTI_Expression.decode({
          "language": "text/cql",
          "expression": "Age Group/Sex"
        })._tag).toBe('Right');
      });
})
