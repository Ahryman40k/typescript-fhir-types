
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_ClaimResponse_Adjudication} from './RTTI_ClaimResponse_Adjudication';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
subDetailSequence: t.number,
_subDetailSequence: RTTI_Element,
noteNumber: t.array(t.number),
_noteNumber: t.array(RTTI_Element),
adjudication: t.array(RTTI_ClaimResponse_Adjudication)
        });
        

        export var RTTI_ClaimResponse_SubDetail:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse_SubDetail = t.TypeOf<typeof RTTI_ClaimResponse_SubDetail>;
        
        