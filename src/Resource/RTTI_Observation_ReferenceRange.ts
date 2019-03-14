
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
low: RTTI_Quantity,
high: RTTI_Quantity,
type: RTTI_CodeableConcept,
appliesTo: t.array(RTTI_CodeableConcept),
age: RTTI_Range,
text: t.string,
_text: RTTI_Element
        });
        

        export var RTTI_Observation_ReferenceRange:any = t.intersection([mandatory, partial]);
        

export type IObservation_ReferenceRange = t.TypeOf<typeof RTTI_Observation_ReferenceRange>;
        
        