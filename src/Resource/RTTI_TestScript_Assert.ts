
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_TestScript_Rule2} from './RTTI_TestScript_Rule2';
import {RTTI_TestScript_Ruleset1} from './RTTI_TestScript_Ruleset1';

export enum TestScript_AssertDirectionKind {
                response = 'response',
request = 'request'
            }
export enum TestScript_AssertOperatorKind {
                equals = 'equals',
notEquals = 'notEquals',
in = 'in',
notIn = 'notIn',
greaterThan = 'greaterThan',
lessThan = 'lessThan',
empty = 'empty',
notEmpty = 'notEmpty',
contains = 'contains',
notContains = 'notContains',
eval = 'eval'
            }
export enum TestScript_AssertRequestMethodKind {
                delete = 'delete',
get = 'get',
options = 'options',
patch = 'patch',
post = 'post',
put = 'put'
            }
export enum TestScript_AssertResponseKind {
                okay = 'okay',
created = 'created',
noContent = 'noContent',
notModified = 'notModified',
bad = 'bad',
forbidden = 'forbidden',
notFound = 'notFound',
methodNotAllowed = 'methodNotAllowed',
conflict = 'conflict',
gone = 'gone',
preconditionFailed = 'preconditionFailed',
unprocessable = 'unprocessable'
            }
const TestScript_AssertDirectionKindKeys = t.keyof({
                [TestScript_AssertDirectionKind.response]: null,
[TestScript_AssertDirectionKind.request]: null
            });
const TestScript_AssertOperatorKindKeys = t.keyof({
                [TestScript_AssertOperatorKind.equals]: null,
[TestScript_AssertOperatorKind.notEquals]: null,
[TestScript_AssertOperatorKind.in]: null,
[TestScript_AssertOperatorKind.notIn]: null,
[TestScript_AssertOperatorKind.greaterThan]: null,
[TestScript_AssertOperatorKind.lessThan]: null,
[TestScript_AssertOperatorKind.empty]: null,
[TestScript_AssertOperatorKind.notEmpty]: null,
[TestScript_AssertOperatorKind.contains]: null,
[TestScript_AssertOperatorKind.notContains]: null,
[TestScript_AssertOperatorKind.eval]: null
            });
const TestScript_AssertRequestMethodKindKeys = t.keyof({
                [TestScript_AssertRequestMethodKind.delete]: null,
[TestScript_AssertRequestMethodKind.get]: null,
[TestScript_AssertRequestMethodKind.options]: null,
[TestScript_AssertRequestMethodKind.patch]: null,
[TestScript_AssertRequestMethodKind.post]: null,
[TestScript_AssertRequestMethodKind.put]: null
            });
const TestScript_AssertResponseKindKeys = t.keyof({
                [TestScript_AssertResponseKind.okay]: null,
[TestScript_AssertResponseKind.created]: null,
[TestScript_AssertResponseKind.noContent]: null,
[TestScript_AssertResponseKind.notModified]: null,
[TestScript_AssertResponseKind.bad]: null,
[TestScript_AssertResponseKind.forbidden]: null,
[TestScript_AssertResponseKind.notFound]: null,
[TestScript_AssertResponseKind.methodNotAllowed]: null,
[TestScript_AssertResponseKind.conflict]: null,
[TestScript_AssertResponseKind.gone]: null,
[TestScript_AssertResponseKind.preconditionFailed]: null,
[TestScript_AssertResponseKind.unprocessable]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
label: t.string,
_label: RTTI_Element,
description: t.string,
_description: RTTI_Element,
direction: TestScript_AssertDirectionKindKeys,
_direction: RTTI_Element,
compareToSourceId: t.string,
_compareToSourceId: RTTI_Element,
compareToSourceExpression: t.string,
_compareToSourceExpression: RTTI_Element,
compareToSourcePath: t.string,
_compareToSourcePath: RTTI_Element,
contentType: t.string,
_contentType: RTTI_Element,
expression: t.string,
_expression: RTTI_Element,
headerField: t.string,
_headerField: RTTI_Element,
minimumId: t.string,
_minimumId: RTTI_Element,
navigationLinks: t.boolean,
_navigationLinks: RTTI_Element,
operator: TestScript_AssertOperatorKindKeys,
_operator: RTTI_Element,
path: t.string,
_path: RTTI_Element,
requestMethod: TestScript_AssertRequestMethodKindKeys,
_requestMethod: RTTI_Element,
requestURL: t.string,
_requestURL: RTTI_Element,
resource: t.string,
_resource: RTTI_Element,
response: TestScript_AssertResponseKindKeys,
_response: RTTI_Element,
responseCode: t.string,
_responseCode: RTTI_Element,
rule: RTTI_TestScript_Rule2,
ruleset: RTTI_TestScript_Ruleset1,
sourceId: t.string,
_sourceId: RTTI_Element,
validateProfileId: t.string,
_validateProfileId: RTTI_Element,
value: t.string,
_value: RTTI_Element,
warningOnly: t.boolean,
_warningOnly: RTTI_Element
        });
        

        export var RTTI_TestScript_Assert:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Assert = t.TypeOf<typeof RTTI_TestScript_Assert>;
        
        