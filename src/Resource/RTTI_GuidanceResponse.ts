
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_DataRequirement} from './RTTI_DataRequirement';

export enum GuidanceResponseStatusKind {
                success = 'success',
dataRequested = 'dataRequested',
dataRequired = 'dataRequired',
inProgress = 'inProgress',
failure = 'failure',
enteredInError = 'enteredInError'
            }
const GuidanceResponseStatusKindKeys = t.keyof({
                [GuidanceResponseStatusKind.success]: null,
[GuidanceResponseStatusKind.dataRequested]: null,
[GuidanceResponseStatusKind.dataRequired]: null,
[GuidanceResponseStatusKind.inProgress]: null,
[GuidanceResponseStatusKind.failure]: null,
[GuidanceResponseStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string
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
requestIdentifier: RTTI_Identifier,
identifier: t.array(RTTI_Identifier),
moduleUri: t.string,
_moduleUri: RTTI_Element,
moduleCanonical: t.string,
_moduleCanonical: RTTI_Element,
moduleCodeableConcept: RTTI_CodeableConcept,
status: GuidanceResponseStatusKindKeys,
_status: RTTI_Element,
subject: RTTI_Reference,
context: RTTI_Reference,
occurrenceDateTime: t.string,
_occurrenceDateTime: RTTI_Element,
performer: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
evaluationMessage: t.array(RTTI_Reference),
outputParameters: RTTI_Reference,
result: RTTI_Reference,
dataRequirement: t.array(RTTI_DataRequirement)
        });
        

        export var RTTI_GuidanceResponse:any = t.intersection([mandatory, partial]);
        

export type IGuidanceResponse = t.TypeOf<typeof RTTI_GuidanceResponse>;
        
        