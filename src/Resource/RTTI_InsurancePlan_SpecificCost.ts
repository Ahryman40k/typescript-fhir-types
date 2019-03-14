
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_InsurancePlan_Benefit1} from './RTTI_InsurancePlan_Benefit1';




        const mandatory = t.type({
           category: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
benefit: t.array(RTTI_InsurancePlan_Benefit1)
        });
        

        export var RTTI_InsurancePlan_SpecificCost:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_SpecificCost = t.TypeOf<typeof RTTI_InsurancePlan_SpecificCost>;
        
        