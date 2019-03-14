
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Duration} from './RTTI_Duration';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
measure: RTTI_CodeableConcept,
detailQuantity: RTTI_Quantity,
detailRange: RTTI_Range,
detailCodeableConcept: RTTI_CodeableConcept,
dueDate: t.string,
_dueDate: RTTI_Element,
dueDuration: RTTI_Duration
        });
        

        export var RTTI_Goal_Target:any = t.intersection([mandatory, partial]);
        

export type IGoal_Target = t.TypeOf<typeof RTTI_Goal_Target>;
        
        