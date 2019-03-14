
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum TestReport_OperationResultKind {
                pass = 'pass',
skip = 'skip',
fail = 'fail',
warning = 'warning',
error = 'error'
            }
const TestReport_OperationResultKindKeys = t.keyof({
                [TestReport_OperationResultKind.pass]: null,
[TestReport_OperationResultKind.skip]: null,
[TestReport_OperationResultKind.fail]: null,
[TestReport_OperationResultKind.warning]: null,
[TestReport_OperationResultKind.error]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
result: TestReport_OperationResultKindKeys,
_result: RTTI_Element,
message: t.string,
_message: RTTI_Element,
detail: t.string,
_detail: RTTI_Element
        });
        

        export var RTTI_TestReport_Operation:any = t.intersection([mandatory, partial]);
        

export type ITestReport_Operation = t.TypeOf<typeof RTTI_TestReport_Operation>;
        
        