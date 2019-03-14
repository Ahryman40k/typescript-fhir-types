
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
valueCode: t.string,
_valueCode: RTTI_Element,
valueCoding: RTTI_Coding,
valueString: t.string,
_valueString: RTTI_Element,
valueInteger: t.number,
_valueInteger: RTTI_Element,
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element,
valueDateTime: t.string,
_valueDateTime: RTTI_Element,
valueDecimal: t.number,
_valueDecimal: RTTI_Element
        });
        

        export var RTTI_CodeSystem_Property1:any = t.intersection([mandatory, partial]);
        

export type ICodeSystem_Property1 = t.TypeOf<typeof RTTI_CodeSystem_Property1>;
        
        