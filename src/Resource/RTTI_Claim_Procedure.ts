
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
date: t.string,
_date: RTTI_Element,
procedureCodeableConcept: RTTI_CodeableConcept,
procedureReference: RTTI_Reference
        });
        

        export var RTTI_Claim_Procedure:any = t.intersection([mandatory, partial]);
        

export type IClaim_Procedure = t.TypeOf<typeof RTTI_Claim_Procedure>;
        
        