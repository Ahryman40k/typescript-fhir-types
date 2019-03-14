
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           type: t.array(RTTI_Coding),
who: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
when: t.string,
_when: RTTI_Element,
onBehalfOf: RTTI_Reference,
targetFormat: t.string,
_targetFormat: RTTI_Element,
sigFormat: t.string,
_sigFormat: RTTI_Element,
data: t.string,
_data: RTTI_Element
        });
        

        export var RTTI_Signature:any = t.intersection([mandatory, partial]);
        

export type ISignature = t.TypeOf<typeof RTTI_Signature>;
        
        