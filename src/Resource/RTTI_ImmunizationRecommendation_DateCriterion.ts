
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
value: t.string,
_value: RTTI_Element
        });
        

        export var RTTI_ImmunizationRecommendation_DateCriterion:any = t.intersection([mandatory, partial]);
        

export type IImmunizationRecommendation_DateCriterion = t.TypeOf<typeof RTTI_ImmunizationRecommendation_DateCriterion>;
        
        