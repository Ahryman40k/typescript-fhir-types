import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
export enum CapabilityStatement_SearchParamTypeKind {
  _number = 'number',
  _date = 'date',
  _string = 'string',
  _token = 'token',
  _reference = 'reference',
  _composite = 'composite',
  _quantity = 'quantity',
  _uri = 'uri',
  _special = 'special',
}
import {createEnumType} from '../../EnumType';

export interface ICapabilityStatement_SearchParam {
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
   * The name of the search parameter used in the interface.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]). This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
   */
  definition?: string;

  /**
   * The type of value a search parameter refers to, and how the content is interpreted.
   */
  type?: CapabilityStatement_SearchParamTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;
}

export const RTTI_CapabilityStatement_SearchParam: t.Type<ICapabilityStatement_SearchParam> =
  t.recursion('ICapabilityStatement_SearchParam', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      name: t.string,
      _name: RTTI_Element,
      definition: RTTI_canonical,
      type: createEnumType<CapabilityStatement_SearchParamTypeKind>(
        CapabilityStatement_SearchParamTypeKind,
        'CapabilityStatement_SearchParamTypeKind',
      ),
      _type: RTTI_Element,
      documentation: RTTI_markdown,
      _documentation: RTTI_Element,
    }),
  );
