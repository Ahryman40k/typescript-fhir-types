import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
export enum ElementDefinition_DiscriminatorTypeKind {
  _value = 'value',
  _exists = 'exists',
  _pattern = 'pattern',
  _type = 'type',
  _profile = 'profile',
}
import {createEnumType} from '../../EnumType';

export interface IElementDefinition_Discriminator {
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
   * How the element value is interpreted when discrimination is evaluated.
   */
  type?: ElementDefinition_DiscriminatorTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * A FHIRPath expression, using [the simple subset of FHIRPath](fhirpath.html#simple), that is used to identify the element on which discrimination is based.
   */
  path?: string;

  /**
   * Extensions for path
   */
  _path?: IElement;
}

export const RTTI_ElementDefinition_Discriminator: t.Type<IElementDefinition_Discriminator> =
  t.recursion('IElementDefinition_Discriminator', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: createEnumType<ElementDefinition_DiscriminatorTypeKind>(
        ElementDefinition_DiscriminatorTypeKind,
        'ElementDefinition_DiscriminatorTypeKind',
      ),
      _type: RTTI_Element,
      path: t.string,
      _path: RTTI_Element,
    }),
  );
