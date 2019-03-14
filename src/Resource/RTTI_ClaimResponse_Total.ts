
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money} from './RTTI_Money';




        const mandatory = t.type({
           category: RTTI_CodeableConcept,
amount: RTTI_Money
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_ClaimResponse_Total:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse_Total = t.TypeOf<typeof RTTI_ClaimResponse_Total>;
        
        