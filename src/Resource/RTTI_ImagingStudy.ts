
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_ImagingStudy_Series} from './RTTI_ImagingStudy_Series';

export enum ImagingStudyStatusKind {
                registered = 'registered',
available = 'available',
cancelled = 'cancelled',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const ImagingStudyStatusKindKeys = t.keyof({
                [ImagingStudyStatusKind.registered]: null,
[ImagingStudyStatusKind.available]: null,
[ImagingStudyStatusKind.cancelled]: null,
[ImagingStudyStatusKind.enteredInError]: null,
[ImagingStudyStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
subject: RTTI_Reference
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
status: ImagingStudyStatusKindKeys,
_status: RTTI_Element,
modality: t.array(RTTI_Coding),
context: RTTI_Reference,
started: t.string,
_started: RTTI_Element,
basedOn: t.array(RTTI_Reference),
referrer: RTTI_Reference,
interpreter: t.array(RTTI_Reference),
endpoint: t.array(RTTI_Reference),
numberOfSeries: t.number,
_numberOfSeries: RTTI_Element,
numberOfInstances: t.number,
_numberOfInstances: RTTI_Element,
procedureReference: RTTI_Reference,
procedureCode: t.array(RTTI_CodeableConcept),
location: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
note: t.array(RTTI_Annotation),
description: t.string,
_description: RTTI_Element,
series: t.array(RTTI_ImagingStudy_Series)
        });
        

        export var RTTI_ImagingStudy:any = t.intersection([mandatory, partial]);
        

export type IImagingStudy = t.TypeOf<typeof RTTI_ImagingStudy>;
        
        