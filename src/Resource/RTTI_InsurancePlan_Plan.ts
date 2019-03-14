
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_InsurancePlan_GeneralCost} from './RTTI_InsurancePlan_GeneralCost';
import {RTTI_InsurancePlan_SpecificCost} from './RTTI_InsurancePlan_SpecificCost';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
type: RTTI_CodeableConcept,
coverageArea: t.array(RTTI_Reference),
network: t.array(RTTI_Reference),
generalCost: t.array(RTTI_InsurancePlan_GeneralCost),
specificCost: t.array(RTTI_InsurancePlan_SpecificCost)
        });
        

        export var RTTI_InsurancePlan_Plan:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_Plan = t.TypeOf<typeof RTTI_InsurancePlan_Plan>;
        
        