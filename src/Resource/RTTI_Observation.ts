
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_SampledData} from './RTTI_SampledData';
import {RTTI_Observation_ReferenceRange} from './RTTI_Observation_ReferenceRange';
import {RTTI_Observation_Component} from './RTTI_Observation_Component';

export enum ObservationStatusKind {
                registered = 'registered',
preliminary = 'preliminary',
final = 'final',
amended = 'amended',
corrected = 'corrected',
cancelled = 'cancelled',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const ObservationStatusKindKeys = t.keyof({
                [ObservationStatusKind.registered]: null,
[ObservationStatusKind.preliminary]: null,
[ObservationStatusKind.final]: null,
[ObservationStatusKind.amended]: null,
[ObservationStatusKind.corrected]: null,
[ObservationStatusKind.cancelled]: null,
[ObservationStatusKind.enteredInError]: null,
[ObservationStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
basedOn: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
status: ObservationStatusKindKeys,
_status: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
subject: RTTI_Reference,
focus: t.array(RTTI_Reference),
encounter: RTTI_Reference,
effectiveDateTime: t.string,
_effectiveDateTime: RTTI_Element,
effectivePeriod: RTTI_Period,
effectiveTiming: RTTI_Timing,
effectiveInstant: t.string,
_effectiveInstant: RTTI_Element,
issued: t.string,
_issued: RTTI_Element,
performer: t.array(RTTI_Reference),
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
comment: t.string,
_comment: RTTI_Element,
bodySite: RTTI_CodeableConcept,
method: RTTI_CodeableConcept,
specimen: RTTI_Reference,
device: RTTI_Reference,
referenceRange: t.array(RTTI_Observation_ReferenceRange),
hasMember: t.array(RTTI_Reference),
derivedFrom: t.array(RTTI_Reference),
component: t.array(RTTI_Observation_Component)
        });
        

        export var RTTI_Observation:any = t.intersection([mandatory, partial]);
        

export type IObservation = t.TypeOf<typeof RTTI_Observation>;
        
        