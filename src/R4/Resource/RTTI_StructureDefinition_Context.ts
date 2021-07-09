import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
export enum StructureDefinition_ContextTypeKind {
  _fhirpath = 'fhirpath',
  _element = 'element',
  _extension = 'extension',
}
import {createEnumType} from '../../EnumType';

export interface IStructureDefinition_Context {
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
   * Defines how to interpret the expression that defines what the context of the extension is.
   */
  type?: StructureDefinition_ContextTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * An expression that defines where an extension can be used in resources.
   */
  expression?: string;

  /**
   * Extensions for expression
   */
  _expression?: IElement;
}

export const RTTI_StructureDefinition_Context: t.Type<IStructureDefinition_Context> =
  t.recursion('IStructureDefinition_Context', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: createEnumType<StructureDefinition_ContextTypeKind>(
        StructureDefinition_ContextTypeKind,
        'StructureDefinition_ContextTypeKind',
      ),
      _type: RTTI_Element,
      expression: t.string,
      _expression: RTTI_Element,
    }),
  );
