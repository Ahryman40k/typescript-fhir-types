
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_MeasureReport_Group} from './RTTI_MeasureReport_Group';

export enum MeasureReportStatusKind {
                complete = 'complete',
pending = 'pending',
error = 'error'
            }
export enum MeasureReportTypeKind {
                individual = 'individual',
subjectList = 'subjectList',
summary = 'summary',
dataCollection = 'dataCollection'
            }
const MeasureReportStatusKindKeys = t.keyof({
                [MeasureReportStatusKind.complete]: null,
[MeasureReportStatusKind.pending]: null,
[MeasureReportStatusKind.error]: null
            });
const MeasureReportTypeKindKeys = t.keyof({
                [MeasureReportTypeKind.individual]: null,
[MeasureReportTypeKind.subjectList]: null,
[MeasureReportTypeKind.summary]: null,
[MeasureReportTypeKind.dataCollection]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
measure: t.string,
period: RTTI_Period
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
status: MeasureReportStatusKindKeys,
_status: RTTI_Element,
type: MeasureReportTypeKindKeys,
_type: RTTI_Element,
subject: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
reporter: RTTI_Reference,
improvementNotation: t.string,
_improvementNotation: RTTI_Element,
group: t.array(RTTI_MeasureReport_Group),
evaluatedResource: t.array(RTTI_Reference)
        });
        

        export var RTTI_MeasureReport:any = t.intersection([mandatory, partial]);
        

export type IMeasureReport = t.TypeOf<typeof RTTI_MeasureReport>;
        
        