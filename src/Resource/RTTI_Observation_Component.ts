
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_SampledData} from './RTTI_SampledData';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Observation_ReferenceRange} from './RTTI_Observation_ReferenceRange';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
valueQuantity: RTTI_Quantity,
valueCodeableConcept: RTTI_CodeableConcept,
valueString: t.string,
_valueString: RTTI_Element,
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element,
valueInteger: t.number,
_valueInteger: RTTI_Element,
valueRange: RTTI_Range,
valueRatio: RTTI_Ratio,
valueSampledData: RTTI_SampledData,
valueTime: t.string,
_valueTime: RTTI_Element,
valueDateTime: t.string,
_valueDateTime: RTTI_Element,
valuePeriod: RTTI_Period,
dataAbsentReason: RTTI_CodeableConcept,
interpretation: t.array(RTTI_CodeableConcept),
referenceRange: t.array(RTTI_Observation_ReferenceRange)
        });
        

        export var RTTI_Observation_Component:any = t.intersection([mandatory, partial]);
        

export type IObservation_Component = t.TypeOf<typeof RTTI_Observation_Component>;
        
        