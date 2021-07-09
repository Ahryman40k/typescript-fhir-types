import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {
  RTTI_CapabilityStatement_Security,
  ICapabilityStatement_Security,
} from './RTTI_CapabilityStatement_Security';
import {
  RTTI_CapabilityStatement_Resource,
  ICapabilityStatement_Resource,
} from './RTTI_CapabilityStatement_Resource';
import {
  RTTI_CapabilityStatement_Interaction1,
  ICapabilityStatement_Interaction1,
} from './RTTI_CapabilityStatement_Interaction1';
import {
  RTTI_CapabilityStatement_SearchParam,
  ICapabilityStatement_SearchParam,
} from './RTTI_CapabilityStatement_SearchParam';
import {
  RTTI_CapabilityStatement_Operation,
  ICapabilityStatement_Operation,
} from './RTTI_CapabilityStatement_Operation';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
export enum CapabilityStatement_RestModeKind {
  _client = 'client',
  _server = 'server',
}
import {createEnumType} from '../../EnumType';

export interface ICapabilityStatement_Rest {
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
   * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
   */
  mode?: CapabilityStatement_RestModeKind;

  /**
   * Extensions for mode
   */
  _mode?: IElement;

  /**
   * Information about the system's restful capabilities that apply across all applications, such as security.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;

  /**
   * Information about security implementation from an interface perspective - what a client needs to know.
   */
  security?: ICapabilityStatement_Security;

  /**
   * A specification of the restful capabilities of the solution for a specific resource type.
   */
  resource?: ICapabilityStatement_Resource[];

  /**
   * A specification of restful operations supported by the system.
   */
  interaction?: ICapabilityStatement_Interaction1[];

  /**
   * Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
   */
  searchParam?: ICapabilityStatement_SearchParam[];

  /**
   * Definition of an operation or a named query together with its parameters and their meaning and type.
   */
  operation?: ICapabilityStatement_Operation[];

  /**
   * An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .
   */
  compartment?: string[];
}

export const RTTI_CapabilityStatement_Rest: t.Type<ICapabilityStatement_Rest> =
  t.recursion('ICapabilityStatement_Rest', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      mode: createEnumType<CapabilityStatement_RestModeKind>(
        CapabilityStatement_RestModeKind,
        'CapabilityStatement_RestModeKind',
      ),
      _mode: RTTI_Element,
      documentation: RTTI_markdown,
      _documentation: RTTI_Element,
      security: RTTI_CapabilityStatement_Security,
      resource: t.array(RTTI_CapabilityStatement_Resource),
      interaction: t.array(RTTI_CapabilityStatement_Interaction1),
      searchParam: t.array(RTTI_CapabilityStatement_SearchParam),
      operation: t.array(RTTI_CapabilityStatement_Operation),
      compartment: t.array(RTTI_canonical),
    }),
  );
