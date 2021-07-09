import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_uri} from '../Scalar/RTTI_uri';
export enum CodeSystem_PropertyTypeKind {
  _code = 'code',
  _coding = 'Coding',
  _string = 'string',
  _integer = 'integer',
  _boolean = 'boolean',
  _dateTime = 'dateTime',
  _decimal = 'decimal',
}
import {createEnumType} from '../../EnumType';

export interface ICodeSystem_Property {
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
   * A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
   */
  uri?: string;

  /**
   * Extensions for uri
   */
  _uri?: IElement;

  /**
   * A description of the property- why it is defined, and how its value might be used.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept).
   */
  type?: CodeSystem_PropertyTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;
}

export const RTTI_CodeSystem_Property: t.Type<ICodeSystem_Property> =
  t.recursion('ICodeSystem_Property', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: RTTI_code,
      _code: RTTI_Element,
      uri: RTTI_uri,
      _uri: RTTI_Element,
      description: t.string,
      _description: RTTI_Element,
      type: createEnumType<CodeSystem_PropertyTypeKind>(
        CodeSystem_PropertyTypeKind,
        'CodeSystem_PropertyTypeKind',
      ),
      _type: RTTI_Element,
    }),
  );
