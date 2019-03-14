
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_InsurancePlan_Limit} from './RTTI_InsurancePlan_Limit';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
requirement: t.string,
_requirement: RTTI_Element,
limit: t.array(RTTI_InsurancePlan_Limit)
        });
        

        export var RTTI_InsurancePlan_Benefit:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_Benefit = t.TypeOf<typeof RTTI_InsurancePlan_Benefit>;
        
        