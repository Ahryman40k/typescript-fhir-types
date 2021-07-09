import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';

export enum OperationOutcome_IssueSeverityKind {
  _fatal = 'fatal',
  _error = 'error',
  _warning = 'warning',
  _information = 'information',
}
export enum OperationOutcome_IssueCodeKind {
  _invalid = 'invalid',
  _structure = 'structure',
  _required = 'required',
  _value = 'value',
  _invariant = 'invariant',
  _security = 'security',
  _login = 'login',
  _unknown = 'unknown',
  _expired = 'expired',
  _forbidden = 'forbidden',
  _suppressed = 'suppressed',
  _processing = 'processing',
  _notSupported = 'not-supported',
  _duplicate = 'duplicate',
  _multipleMatches = 'multiple-matches',
  _notFound = 'not-found',
  _deleted = 'deleted',
  _tooLong = 'too-long',
  _codeInvalid = 'code-invalid',
  _extension = 'extension',
  _tooCostly = 'too-costly',
  _businessRule = 'business-rule',
  _conflict = 'conflict',
  _transient = 'transient',
  _lockError = 'lock-error',
  _noStore = 'no-store',
  _exception = 'exception',
  _timeout = 'timeout',
  _incomplete = 'incomplete',
  _throttled = 'throttled',
  _informational = 'informational',
}
import {createEnumType} from '../../EnumType';

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
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

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
   * Additional details about the error. This may be a text description of the error or a system code that identifies the error.
   */
  details?: ICodeableConcept;

  /**
   * Additional diagnostic information about the issue.
   */
  diagnostics?: string;

  /**
   * Extensions for diagnostics
   */
  _diagnostics?: IElement;

  /**
                     * This element is deprecated because it is XML specific. It is replaced by issue.expression, which is format independent, and simpler to parse. 

For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be "http." + the parameter name.
                     */
  location?: string[];

  /**
   * Extensions for location
   */
  _location?: IElement[];

  /**
   * A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.
   */
  expression?: string[];

  /**
   * Extensions for expression
   */
  _expression?: IElement[];
}

export const RTTI_OperationOutcome_Issue: t.Type<IOperationOutcome_Issue> =
  t.recursion('IOperationOutcome_Issue', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      severity: createEnumType<OperationOutcome_IssueSeverityKind>(
        OperationOutcome_IssueSeverityKind,
        'OperationOutcome_IssueSeverityKind',
      ),
      _severity: RTTI_Element,
      code: createEnumType<OperationOutcome_IssueCodeKind>(
        OperationOutcome_IssueCodeKind,
        'OperationOutcome_IssueCodeKind',
      ),
      _code: RTTI_Element,
      details: RTTI_CodeableConcept,
      diagnostics: t.string,
      _diagnostics: RTTI_Element,
      location: t.array(t.string),
      _location: t.array(RTTI_Element),
      expression: t.array(t.string),
      _expression: t.array(RTTI_Element),
    }),
  );
