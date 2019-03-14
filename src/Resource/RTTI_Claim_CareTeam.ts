
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           provider: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
responsible: t.boolean,
_responsible: RTTI_Element,
role: RTTI_CodeableConcept,
qualification: RTTI_CodeableConcept
        });
        

        export var RTTI_Claim_CareTeam:any = t.intersection([mandatory, partial]);
        

export type IClaim_CareTeam = t.TypeOf<typeof RTTI_Claim_CareTeam>;
        
        