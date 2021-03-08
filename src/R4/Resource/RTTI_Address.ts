import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

import {RTTI_Period, IPeriod} from './RTTI_Period';
export enum AddressUseKind {
  _home = 'home',
  _work = 'work',
  _temp = 'temp',
  _old = 'old',
  _billing = 'billing',
}
export enum AddressTypeKind {
  _postal = 'postal',
  _physical = 'physical',
  _both = 'both',
}
import {createEnumType} from '../../EnumType';

export interface IAddress {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The purpose of this address.
   */
  use?: AddressUseKind;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
   */
  type?: AddressTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;

  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  line?: string[];

  /**
   * Extensions for line
   */
  _line?: IElement[];

  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  city?: string;

  /**
   * Extensions for city
   */
  _city?: IElement;

  /**
   * The name of the administrative area (county).
   */
  district?: string;

  /**
   * Extensions for district
   */
  _district?: IElement;

  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  state?: string;

  /**
   * Extensions for state
   */
  _state?: IElement;

  /**
   * A postal code designating a region defined by the postal service.
   */
  postalCode?: string;

  /**
   * Extensions for postalCode
   */
  _postalCode?: IElement;

  /**
   * Country - a nation as commonly understood or generally accepted.
   */
  country?: string;

  /**
   * Extensions for country
   */
  _country?: IElement;

  /**
   * Time period when address was/is in use.
   */
  period?: IPeriod;
}

export const RTTI_Address: t.Type<IAddress> = t.recursion('IAddress', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    use: createEnumType<AddressUseKind>(AddressUseKind, 'AddressUseKind'),
    _use: RTTI_Element,
    type: createEnumType<AddressTypeKind>(AddressTypeKind, 'AddressTypeKind'),
    _type: RTTI_Element,
    text: t.string,
    _text: RTTI_Element,
    line: t.array(t.string),
    _line: t.array(RTTI_Element),
    city: t.string,
    _city: RTTI_Element,
    district: t.string,
    _district: RTTI_Element,
    state: t.string,
    _state: RTTI_Element,
    postalCode: t.string,
    _postalCode: RTTI_Element,
    country: t.string,
    _country: RTTI_Element,
    period: RTTI_Period,
  }),
);
