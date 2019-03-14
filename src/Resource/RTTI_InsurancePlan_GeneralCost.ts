
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Money} from './RTTI_Money';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
groupSize: t.number,
_groupSize: RTTI_Element,
cost: RTTI_Money,
comment: t.string,
_comment: RTTI_Element
        });
        

        export var RTTI_InsurancePlan_GeneralCost:any = t.intersection([mandatory, partial]);
        

export type IInsurancePlan_GeneralCost = t.TypeOf<typeof RTTI_InsurancePlan_GeneralCost>;
        
        