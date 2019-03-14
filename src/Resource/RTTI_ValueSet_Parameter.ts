
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
valueString: t.string,
_valueString: RTTI_Element,
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element,
valueInteger: t.number,
_valueInteger: RTTI_Element,
valueDecimal: t.number,
_valueDecimal: RTTI_Element,
valueUri: t.string,
_valueUri: RTTI_Element,
valueCode: t.string,
_valueCode: RTTI_Element,
valueDateTime: t.string,
_valueDateTime: RTTI_Element
        });
        

        export var RTTI_ValueSet_Parameter:any = t.intersection([mandatory, partial]);
        

export type IValueSet_Parameter = t.TypeOf<typeof RTTI_ValueSet_Parameter>;
        
        