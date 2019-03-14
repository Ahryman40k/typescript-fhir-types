
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
reference: RTTI_Reference,
code: t.array(RTTI_CodeableConcept),
text: t.string,
_text: RTTI_Element
        });
        

        export var RTTI_Contract_Context:any = t.intersection([mandatory, partial]);
        

export type IContract_Context = t.TypeOf<typeof RTTI_Contract_Context>;
        
        