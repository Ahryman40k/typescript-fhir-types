
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ImmunizationRecommendation_DateCriterion} from './RTTI_ImmunizationRecommendation_DateCriterion';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           forecastStatus: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
vaccineCode: t.array(RTTI_CodeableConcept),
targetDisease: RTTI_CodeableConcept,
contraindicatedVaccineCode: t.array(RTTI_CodeableConcept),
forecastReason: t.array(RTTI_CodeableConcept),
dateCriterion: t.array(RTTI_ImmunizationRecommendation_DateCriterion),
description: t.string,
_description: RTTI_Element,
series: t.string,
_series: RTTI_Element,
doseNumberPositiveInt: t.number,
_doseNumberPositiveInt: RTTI_Element,
doseNumberString: t.string,
_doseNumberString: RTTI_Element,
seriesDosesPositiveInt: t.number,
_seriesDosesPositiveInt: RTTI_Element,
seriesDosesString: t.string,
_seriesDosesString: RTTI_Element,
supportingImmunization: t.array(RTTI_Reference),
supportingPatientInformation: t.array(RTTI_Reference)
        });
        

        export var RTTI_ImmunizationRecommendation_Recommendation:any = t.intersection([mandatory, partial]);
        

export type IImmunizationRecommendation_Recommendation = t.TypeOf<typeof RTTI_ImmunizationRecommendation_Recommendation>;
        
        