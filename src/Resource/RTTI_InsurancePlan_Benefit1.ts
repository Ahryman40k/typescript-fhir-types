
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_InsurancePlan_Cost} from './RTTI_InsurancePlan_Cost';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
cost: t.array(RTTI_InsurancePlan_Cost)
        });
        

        export var RTTI_InsurancePlan_Benefit1:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_Benefit1 = t.TypeOf<typeof RTTI_InsurancePlan_Benefit1>;
        
        