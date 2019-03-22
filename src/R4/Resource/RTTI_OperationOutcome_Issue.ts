
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { createEnumType } from '../../EnumType';


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
        notSupported = 'not-supported',
        duplicate = 'duplicate',
        multipleMatches = 'multiple-matches',
        notFound = 'not-found',
        deleted = 'deleted',
        tooLong = 'too-long',
        codeInvalid = 'code-invalid',
        extension = 'extension',
        tooCostly = 'too-costly',
        businessRule = 'business-rule',
        conflict = 'conflict',
        transient = 'transient',
        lockError = 'lock-error',
        noStore = 'no-store',
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
});/*
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
*/

export interface IOperationOutcome_Issue {


        /**
         * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
         */
        id?: string;


        /**
         * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
         */
        extension?: IExtension[];


        /**
         * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        modifierExtension?: IExtension[];


        /**
         * Indicates whether the issue indicates a variation from successful processing.
         */
        severity?: OperationOutcome_IssueSeverityKind;


        /**
         * Extensions for severity
         */
        _severity?: IElement;


        /**
         * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
         */
        code?: OperationOutcome_IssueCodeKind;


        /**
         * Extensions for code
         */
        _code?: IElement;


        /**
         * Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
         */
        details?: ICodeableConcept;


        /**
         * Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
         */
        diagnostics?: string;


        /**
         * Extensions for diagnostics
         */
        _diagnostics?: IElement;


        /**
         * This element is depracated because it is XML specific. It is replaced by issue.expression, which is format independent, and simpler to parse. 

For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be "http." + the parameter name.
         */
        location?: string[];


        /**
         * Extensions for location
         */
        _location?: IElement[];


        /**
         * A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.
         */
        expression?: string[];


        /**
         * Extensions for expression
         */
        _expression?: IElement[];

}



export const RTTI_OperationOutcome_Issue: t.Type<IOperationOutcome_Issue> = t.recursion('IOperationOutcome_Issue', () =>

        t.partial({
                id: t.string,
                extension: t.array(RTTI_Extension),
                modifierExtension: t.array(RTTI_Extension),
                severity: OperationOutcome_IssueSeverityKindKeys,
                _severity: RTTI_Element,
                code: createEnumType<OperationOutcome_IssueCodeKind>(OperationOutcome_IssueCodeKind, 'OperationOutcome_IssueCodeKind'),
                _code: RTTI_Element,
                details: RTTI_CodeableConcept,
                diagnostics: t.string,
                _diagnostics: RTTI_Element,
                location: t.array(t.string),
                _location: t.array(RTTI_Element),
                expression: t.array(t.string),
                _expression: t.array(RTTI_Element)
        })

);


