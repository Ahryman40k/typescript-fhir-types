
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
quantity: RTTI_Ratio,
substanceCodeableConcept: RTTI_CodeableConcept,
substanceReference: RTTI_Reference
        });
        

        export var RTTI_Substance_Ingredient:any = t.intersection([mandatory, partial]);
        

export type ISubstance_Ingredient = t.TypeOf<typeof RTTI_Substance_Ingredient>;
        
        