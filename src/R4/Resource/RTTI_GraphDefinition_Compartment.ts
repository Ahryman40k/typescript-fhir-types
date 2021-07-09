import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
export enum GraphDefinition_CompartmentUseKind {
  _condition = 'condition',
  _requirement = 'requirement',
}
export enum GraphDefinition_CompartmentRuleKind {
  _identical = 'identical',
  _matching = 'matching',
  _different = 'different',
  _custom = 'custom',
}
import {createEnumType} from '../../EnumType';

export interface IGraphDefinition_Compartment {
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
   * Defines how the compartment rule is used - whether it it is used to test whether resources are subject to the rule, or whether it is a rule that must be followed.
   */
  use?: GraphDefinition_CompartmentUseKind;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * Identifies the compartment.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * identical | matching | different | no-rule | custom.
   */
  rule?: GraphDefinition_CompartmentRuleKind;

  /**
   * Extensions for rule
   */
  _rule?: IElement;

  /**
   * Custom rule, as a FHIRPath expression.
   */
  expression?: string;

  /**
   * Extensions for expression
   */
  _expression?: IElement;

  /**
   * Documentation for FHIRPath expression.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;
}

export const RTTI_GraphDefinition_Compartment: t.Type<IGraphDefinition_Compartment> =
  t.recursion('IGraphDefinition_Compartment', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      use: createEnumType<GraphDefinition_CompartmentUseKind>(
        GraphDefinition_CompartmentUseKind,
        'GraphDefinition_CompartmentUseKind',
      ),
      _use: RTTI_Element,
      code: RTTI_code,
      _code: RTTI_Element,
      rule: createEnumType<GraphDefinition_CompartmentRuleKind>(
        GraphDefinition_CompartmentRuleKind,
        'GraphDefinition_CompartmentRuleKind',
      ),
      _rule: RTTI_Element,
      expression: t.string,
      _expression: RTTI_Element,
      description: t.string,
      _description: RTTI_Element,
    }),
  );
