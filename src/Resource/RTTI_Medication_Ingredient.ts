
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Ratio} from './RTTI_Ratio';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
itemCodeableConcept: RTTI_CodeableConcept,
itemReference: RTTI_Reference,
isActive: t.boolean,
_isActive: RTTI_Element,
amount: RTTI_Ratio
        });
        

        export var RTTI_Medication_Ingredient:any = t.intersection([mandatory, partial]);
        

export type IMedication_Ingredient = t.TypeOf<typeof RTTI_Medication_Ingredient>;
        
        