
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_InsurancePlan_Benefit} from './RTTI_InsurancePlan_Benefit';




        const mandatory = t.type({
           type: RTTI_CodeableConcept,
benefit: t.array(RTTI_InsurancePlan_Benefit)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
network: t.array(RTTI_Reference)
        });
        

        export var RTTI_InsurancePlan_Coverage:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_Coverage = t.TypeOf<typeof RTTI_InsurancePlan_Coverage>;
        
        