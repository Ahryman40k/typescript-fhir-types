
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_TestReport_Participant} from './RTTI_TestReport_Participant';
import {RTTI_TestReport_Setup} from './RTTI_TestReport_Setup';
import {RTTI_TestReport_Test} from './RTTI_TestReport_Test';
import {RTTI_TestReport_Teardown} from './RTTI_TestReport_Teardown';

export enum TestReportStatusKind {
                completed = 'completed',
inProgress = 'inProgress',
waiting = 'waiting',
stopped = 'stopped',
enteredInError = 'enteredInError'
            }
export enum TestReportResultKind {
                pass = 'pass',
fail = 'fail',
pending = 'pending'
            }
const TestReportStatusKindKeys = t.keyof({
                [TestReportStatusKind.completed]: null,
[TestReportStatusKind.inProgress]: null,
[TestReportStatusKind.waiting]: null,
[TestReportStatusKind.stopped]: null,
[TestReportStatusKind.enteredInError]: null
            });
const TestReportResultKindKeys = t.keyof({
                [TestReportResultKind.pass]: null,
[TestReportResultKind.fail]: null,
[TestReportResultKind.pending]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
testScript: RTTI_Reference
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
identifier: RTTI_Identifier,
name: t.string,
_name: RTTI_Element,
status: TestReportStatusKindKeys,
_status: RTTI_Element,
result: TestReportResultKindKeys,
_result: RTTI_Element,
score: t.number,
_score: RTTI_Element,
tester: t.string,
_tester: RTTI_Element,
issued: t.string,
_issued: RTTI_Element,
participant: t.array(RTTI_TestReport_Participant),
setup: RTTI_TestReport_Setup,
test: t.array(RTTI_TestReport_Test),
teardown: RTTI_TestReport_Teardown
        });
        

        export var RTTI_TestReport:any = t.intersection([mandatory, partial]);
        

export type ITestReport = t.TypeOf<typeof RTTI_TestReport>;
        
        