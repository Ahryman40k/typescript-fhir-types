
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
summary: RTTI_CodeableConcept,
assessment: t.array(RTTI_Reference),
type: RTTI_CodeableConcept
        });
        

        export var RTTI_Condition_Stage:any = t.intersection([mandatory, partial]);
        

export type ICondition_Stage = t.TypeOf<typeof RTTI_Condition_Stage>;
        
        