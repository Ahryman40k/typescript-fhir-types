
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum TestReport_AssertResultKind {
                pass = 'pass',
skip = 'skip',
fail = 'fail',
warning = 'warning',
error = 'error'
            }
const TestReport_AssertResultKindKeys = t.keyof({
                [TestReport_AssertResultKind.pass]: null,
[TestReport_AssertResultKind.skip]: null,
[TestReport_AssertResultKind.fail]: null,
[TestReport_AssertResultKind.warning]: null,
[TestReport_AssertResultKind.error]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
result: TestReport_AssertResultKindKeys,
_result: RTTI_Element,
message: t.string,
_message: RTTI_Element,
detail: t.string,
_detail: RTTI_Element
        });
        

        export var RTTI_TestReport_Assert:any = t.intersection([mandatory, partial]);
        

export type ITestReport_Assert = t.TypeOf<typeof RTTI_TestReport_Assert>;
        
        