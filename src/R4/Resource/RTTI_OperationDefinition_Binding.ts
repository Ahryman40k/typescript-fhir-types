import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
export enum OperationDefinition_BindingStrengthKind {
  _required = 'required',
  _extensible = 'extensible',
  _preferred = 'preferred',
  _example = 'example',
}
import {createEnumType} from '../../EnumType';

export interface IOperationDefinition_Binding {
  /**
   * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
   */
  valueSet: string;

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
   * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
   */
  strength?: OperationDefinition_BindingStrengthKind;

  /**
   * Extensions for strength
   */
  _strength?: IElement;
}

export const RTTI_OperationDefinition_Binding: t.Type<IOperationDefinition_Binding> =
  t.recursion('IOperationDefinition_Binding', () =>
    t.intersection([
      t.type({
        valueSet: RTTI_canonical,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        strength: createEnumType<OperationDefinition_BindingStrengthKind>(
          OperationDefinition_BindingStrengthKind,
          'OperationDefinition_BindingStrengthKind',
        ),
        _strength: RTTI_Element,
      }),
    ]),
  );
