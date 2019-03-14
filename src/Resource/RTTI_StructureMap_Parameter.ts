
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
valueId: t.string,
_valueId: RTTI_Element,
valueString: t.string,
_valueString: RTTI_Element,
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element,
valueInteger: t.number,
_valueInteger: RTTI_Element,
valueDecimal: t.number,
_valueDecimal: RTTI_Element
        });
        

        export var RTTI_StructureMap_Parameter:any = t.intersection([mandatory, partial]);
        

export type IStructureMap_Parameter = t.TypeOf<typeof RTTI_StructureMap_Parameter>;
        
        