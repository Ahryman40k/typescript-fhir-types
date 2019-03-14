
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
value: RTTI_Quantity,
code: RTTI_CodeableConcept
        });
        

        export var RTTI_InsurancePlan_Limit:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_Limit = t.TypeOf<typeof RTTI_InsurancePlan_Limit>;
        
        