
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
conditionSet: RTTI_CodeableConcept,
tempRange: RTTI_Range,
maxDuration: RTTI_Duration,
lightExposure: t.string,
_lightExposure: RTTI_Element,
instruction: t.string,
_instruction: RTTI_Element
        });
        

        export var RTTI_SpecimenDefinition_Handling:any = t.intersection([mandatory, partial]);
        

export type ISpecimenDefinition_Handling = t.TypeOf<typeof RTTI_SpecimenDefinition_Handling>;
        
        