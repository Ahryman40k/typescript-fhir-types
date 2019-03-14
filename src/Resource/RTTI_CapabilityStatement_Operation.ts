
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           definition: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_CapabilityStatement_Operation:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Operation = t.TypeOf<typeof RTTI_CapabilityStatement_Operation>;
        
        