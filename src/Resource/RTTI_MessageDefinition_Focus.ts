
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
profile: t.string,
min: t.number,
_min: RTTI_Element,
max: t.string,
_max: RTTI_Element
        });
        

        export var RTTI_MessageDefinition_Focus:any = t.intersection([mandatory, partial]);
        

export type IMessageDefinition_Focus = t.TypeOf<typeof RTTI_MessageDefinition_Focus>;
        
        