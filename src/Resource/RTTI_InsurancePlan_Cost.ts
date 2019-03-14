
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
applicability: RTTI_CodeableConcept,
qualifiers: t.array(RTTI_CodeableConcept),
value: RTTI_Quantity
        });
        

        export var RTTI_InsurancePlan_Cost:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_Cost = t.TypeOf<typeof RTTI_InsurancePlan_Cost>;
        
        