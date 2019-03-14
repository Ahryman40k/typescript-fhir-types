
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_ClaimResponse_Adjudication} from './RTTI_ClaimResponse_Adjudication';
import {RTTI_ClaimResponse_SubDetail} from './RTTI_ClaimResponse_SubDetail';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
detailSequence: t.number,
_detailSequence: RTTI_Element,
noteNumber: t.array(t.number),
_noteNumber: t.array(RTTI_Element),
adjudication: t.array(RTTI_ClaimResponse_Adjudication),
subDetail: t.array(RTTI_ClaimResponse_SubDetail)
        });
        

        export var RTTI_ClaimResponse_Detail:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse_Detail = t.TypeOf<typeof RTTI_ClaimResponse_Detail>;
        
        