
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
outcome: RTTI_CodeableConcept,
probabilityDecimal: t.number,
_probabilityDecimal: RTTI_Element,
probabilityRange: RTTI_Range,
qualitativeRisk: RTTI_CodeableConcept,
relativeRisk: t.number,
_relativeRisk: RTTI_Element,
whenPeriod: RTTI_Period,
whenRange: RTTI_Range,
rationale: t.string,
_rationale: RTTI_Element
        });
        

        export var RTTI_RiskAssessment_Prediction:any = t.intersection([mandatory, partial]);
        

export type IRiskAssessment_Prediction = t.TypeOf<typeof RTTI_RiskAssessment_Prediction>;
        
        