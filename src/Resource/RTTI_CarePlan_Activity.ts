
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_CarePlan_Detail} from './RTTI_CarePlan_Detail';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
outcomeCodeableConcept: t.array(RTTI_CodeableConcept),
outcomeReference: t.array(RTTI_Reference),
progress: t.array(RTTI_Annotation),
reference: RTTI_Reference,
detail: RTTI_CarePlan_Detail
        });
        

        export var RTTI_CarePlan_Activity:any = t.intersection([mandatory, partial]);
        

export type ICarePlan_Activity = t.TypeOf<typeof RTTI_CarePlan_Activity>;
        
        