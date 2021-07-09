import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
export enum ElementDefinition_ConstraintSeverityKind {
  _error = 'error',
  _warning = 'warning',
}
import {createEnumType} from '../../EnumType';

export interface IElementDefinition_Constraint {
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
   * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
   */
  key?: string;

  /**
   * Extensions for key
   */
  _key?: IElement;

  /**
   * Description of why this constraint is necessary or appropriate.
   */
  requirements?: string;

  /**
   * Extensions for requirements
   */
  _requirements?: IElement;

  /**
   * Identifies the impact constraint violation has on the conformance of the instance.
   */
  severity?: ElementDefinition_ConstraintSeverityKind;

  /**
   * Extensions for severity
   */
  _severity?: IElement;

  /**
   * Text that can be used to describe the constraint in messages identifying that the constraint has been violated.
   */
  human?: string;

  /**
   * Extensions for human
   */
  _human?: IElement;

  /**
   * A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this constraint is met.
   */
  expression?: string;

  /**
   * Extensions for expression
   */
  _expression?: IElement;

  /**
   * An XPath expression of constraint that can be executed to see if this constraint is met.
   */
  xpath?: string;

  /**
   * Extensions for xpath
   */
  _xpath?: IElement;

  /**
   * A reference to the original source of the constraint, for traceability purposes.
   */
  source?: string;
}

export const RTTI_ElementDefinition_Constraint: t.Type<IElementDefinition_Constraint> =
  t.recursion('IElementDefinition_Constraint', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      key: RTTI_id,
      _key: RTTI_Element,
      requirements: t.string,
      _requirements: RTTI_Element,
      severity: createEnumType<ElementDefinition_ConstraintSeverityKind>(
        ElementDefinition_ConstraintSeverityKind,
        'ElementDefinition_ConstraintSeverityKind',
      ),
      _severity: RTTI_Element,
      human: t.string,
      _human: RTTI_Element,
      expression: t.string,
      _expression: RTTI_Element,
      xpath: t.string,
      _xpath: RTTI_Element,
      source: RTTI_canonical,
    }),
  );
