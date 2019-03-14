
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';


export enum OperationOutcome_IssueSeverityKind {
                fatal = 'fatal',
error = 'error',
warning = 'warning',
information = 'information'
            }
export enum OperationOutcome_IssueCodeKind {
                invalid = 'invalid',
structure = 'structure',
required = 'required',
value = 'value',
invariant = 'invariant',
security = 'security',
login = 'login',
unknown = 'unknown',
expired = 'expired',
forbidden = 'forbidden',
suppressed = 'suppressed',
processing = 'processing',
notSupported = 'notSupported',
duplicate = 'duplicate',
multipleMatches = 'multipleMatches',
notFound = 'notFound',
deleted = 'deleted',
tooLong = 'tooLong',
codeInvalid = 'codeInvalid',
extension = 'extension',
tooCostly = 'tooCostly',
businessRule = 'businessRule',
conflict = 'conflict',
transient = 'transient',
lockError = 'lockError',
noStore = 'noStore',
exception = 'exception',
timeout = 'timeout',
incomplete = 'incomplete',
throttled = 'throttled',
informational = 'informational'
            }
const OperationOutcome_IssueSeverityKindKeys = t.keyof({
                [OperationOutcome_IssueSeverityKind.fatal]: null,
[OperationOutcome_IssueSeverityKind.error]: null,
[OperationOutcome_IssueSeverityKind.warning]: null,
[OperationOutcome_IssueSeverityKind.information]: null
            });
const OperationOutcome_IssueCodeKindKeys = t.keyof({
                [OperationOutcome_IssueCodeKind.invalid]: null,
[OperationOutcome_IssueCodeKind.structure]: null,
[OperationOutcome_IssueCodeKind.required]: null,
[OperationOutcome_IssueCodeKind.value]: null,
[OperationOutcome_IssueCodeKind.invariant]: null,
[OperationOutcome_IssueCodeKind.security]: null,
[OperationOutcome_IssueCodeKind.login]: null,
[OperationOutcome_IssueCodeKind.unknown]: null,
[OperationOutcome_IssueCodeKind.expired]: null,
[OperationOutcome_IssueCodeKind.forbidden]: null,
[OperationOutcome_IssueCodeKind.suppressed]: null,
[OperationOutcome_IssueCodeKind.processing]: null,
[OperationOutcome_IssueCodeKind.notSupported]: null,
[OperationOutcome_IssueCodeKind.duplicate]: null,
[OperationOutcome_IssueCodeKind.multipleMatches]: null,
[OperationOutcome_IssueCodeKind.notFound]: null,
[OperationOutcome_IssueCodeKind.deleted]: null,
[OperationOutcome_IssueCodeKind.tooLong]: null,
[OperationOutcome_IssueCodeKind.codeInvalid]: null,
[OperationOutcome_IssueCodeKind.extension]: null,
[OperationOutcome_IssueCodeKind.tooCostly]: null,
[OperationOutcome_IssueCodeKind.businessRule]: null,
[OperationOutcome_IssueCodeKind.conflict]: null,
[OperationOutcome_IssueCodeKind.transient]: null,
[OperationOutcome_IssueCodeKind.lockError]: null,
[OperationOutcome_IssueCodeKind.noStore]: null,
[OperationOutcome_IssueCodeKind.exception]: null,
[OperationOutcome_IssueCodeKind.timeout]: null,
[OperationOutcome_IssueCodeKind.incomplete]: null,
[OperationOutcome_IssueCodeKind.throttled]: null,
[OperationOutcome_IssueCodeKind.informational]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
severity: OperationOutcome_IssueSeverityKindKeys,
_severity: RTTI_Element,
code: OperationOutcome_IssueCodeKindKeys,
_code: RTTI_Element,
details: RTTI_CodeableConcept,
diagnostics: t.string,
_diagnostics: RTTI_Element,
location: t.array(t.string),
_location: t.array(RTTI_Element),
expression: t.array(t.string),
_expression: t.array(RTTI_Element)
        });
        

        export var RTTI_OperationOutcome_Issue:any = t.intersection([mandatory, partial]);
        

export type IOperationOutcome_Issue = t.TypeOf<typeof RTTI_OperationOutcome_Issue>;
        
        