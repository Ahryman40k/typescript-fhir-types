
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
date: t.string,
_date: RTTI_Element,
type: RTTI_CodeableConcept,
locationAddress: RTTI_Address,
locationReference: RTTI_Reference
        });
        

        export var RTTI_Claim_Accident:any = t.intersection([mandatory, partial]);
        

export type IClaim_Accident = t.TypeOf<typeof RTTI_Claim_Accident>;
        
        