
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
import {RTTI_DiagnosticReport_Media} from './RTTI_DiagnosticReport_Media';
import {RTTI_Attachment} from './RTTI_Attachment';

export enum DiagnosticReportStatusKind {
                registered = 'registered',
partial = 'partial',
preliminary = 'preliminary',
final = 'final',
amended = 'amended',
corrected = 'corrected',
appended = 'appended',
cancelled = 'cancelled',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const DiagnosticReportStatusKindKeys = t.keyof({
                [DiagnosticReportStatusKind.registered]: null,
[DiagnosticReportStatusKind.partial]: null,
[DiagnosticReportStatusKind.preliminary]: null,
[DiagnosticReportStatusKind.final]: null,
[DiagnosticReportStatusKind.amended]: null,
[DiagnosticReportStatusKind.corrected]: null,
[DiagnosticReportStatusKind.appended]: null,
[DiagnosticReportStatusKind.cancelled]: null,
[DiagnosticReportStatusKind.enteredInError]: null,
[DiagnosticReportStatusKind.unknown]: null
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
status: DiagnosticReportStatusKindKeys,
_status: RTTI_Element,
category: RTTI_CodeableConcept,
subject: RTTI_Reference,
context: RTTI_Reference,
effectiveDateTime: t.string,
_effectiveDateTime: RTTI_Element,
effectivePeriod: RTTI_Period,
issued: t.string,
_issued: RTTI_Element,
performer: t.array(RTTI_Reference),
resultsInterpreter: t.array(RTTI_Reference),
specimen: t.array(RTTI_Reference),
result: t.array(RTTI_Reference),
imagingStudy: t.array(RTTI_Reference),
media: t.array(RTTI_DiagnosticReport_Media),
conclusion: t.string,
_conclusion: RTTI_Element,
conclusionCode: t.array(RTTI_CodeableConcept),
presentedForm: t.array(RTTI_Attachment)
        });
        

        export var RTTI_DiagnosticReport:any = t.intersection([mandatory, partial]);
        

export type IDiagnosticReport = t.TypeOf<typeof RTTI_DiagnosticReport>;
        
        