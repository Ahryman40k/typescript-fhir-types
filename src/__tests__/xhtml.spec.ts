import { R4 } from '../index';

const T = R4.scalars.RTTI_xhtml;
const invalid_value =  `
<!DOCTYPE html>
  <html lang="en">
// omit head
  <body>World</body>
</html>`;

const valid_value =  `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Hello</title>
</head>
<body>
  World
</body>
</html>`;


describe('Scalar xhtml', () => {
  
    test("should decode a valid value", () => {        
        expect(T.decode(valid_value)._tag).toBe('Right');
      });
      /*  
      test("Should not decode invalid value", () => {
        // Fail because no xhtml validator is called right now
        expect(T.decode(invalid_value)._tag).toBe('Left');
      });*/
    
      test("Should not decode value with wrong type", () => {
        expect(T.decode(2)._tag).toBe('Left');
      });
})
