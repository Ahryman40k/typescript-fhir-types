
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           coverage: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
focal: t.boolean,
_focal: RTTI_Element,
businessArrangement: t.string,
_businessArrangement: RTTI_Element,
claimResponse: RTTI_Reference
        });
        

        export var RTTI_ClaimResponse_Insurance:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse_Insurance = t.TypeOf<typeof RTTI_ClaimResponse_Insurance>;
        
        