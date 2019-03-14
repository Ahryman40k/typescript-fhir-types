
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_ClaimResponse_Adjudication} from './RTTI_ClaimResponse_Adjudication';
import {RTTI_ClaimResponse_Detail} from './RTTI_ClaimResponse_Detail';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
itemSequence: t.number,
_itemSequence: RTTI_Element,
noteNumber: t.array(t.number),
_noteNumber: t.array(RTTI_Element),
adjudication: t.array(RTTI_ClaimResponse_Adjudication),
detail: t.array(RTTI_ClaimResponse_Detail)
        });
        

        export var RTTI_ClaimResponse_Item:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse_Item = t.TypeOf<typeof RTTI_ClaimResponse_Item>;
        
        