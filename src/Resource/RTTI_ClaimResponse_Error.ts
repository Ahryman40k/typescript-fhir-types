
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
itemSequence: t.number,
_itemSequence: RTTI_Element,
detailSequence: t.number,
_detailSequence: RTTI_Element,
subDetailSequence: t.number,
_subDetailSequence: RTTI_Element
        });
        

        export var RTTI_ClaimResponse_Error:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse_Error = t.TypeOf<typeof RTTI_ClaimResponse_Error>;
        
        