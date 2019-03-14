
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
category: RTTI_CodeableConcept,
range: RTTI_Range,
type: RTTI_CodeableConcept,
appliesTo: t.array(RTTI_CodeableConcept),
age: RTTI_Range,
gestationalAge: RTTI_Range,
condition: t.string,
_condition: RTTI_Element
        });
        

        export var RTTI_ObservationDefinition_QualifiedInterval:any = t.intersection([mandatory, partial]);
        

export type IObservationDefinition_QualifiedInterval = t.TypeOf<typeof RTTI_ObservationDefinition_QualifiedInterval>;
        
        