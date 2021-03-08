import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Period, IPeriod} from './RTTI_Period';
export enum ContactPointSystemKind {
  _phone = 'phone',
  _fax = 'fax',
  _email = 'email',
  _pager = 'pager',
  _url = 'url',
  _sms = 'sms',
  _other = 'other',
}
export enum ContactPointUseKind {
  _home = 'home',
  _work = 'work',
  _temp = 'temp',
  _old = 'old',
  _mobile = 'mobile',
}
import {createEnumType} from '../../EnumType';

export interface IContactPoint {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  system?: ContactPointSystemKind;

  /**
   * Extensions for system
   */
  _system?: IElement;

  /**
   * The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).
   */
  value?: string;

  /**
   * Extensions for value
   */
  _value?: IElement;

  /**
   * Identifies the purpose for the contact point.
   */
  use?: ContactPointUseKind;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.
   */
  rank?: number;

  /**
   * Extensions for rank
   */
  _rank?: IElement;

  /**
   * Time period when the contact point was/is in use.
   */
  period?: IPeriod;
}

export const RTTI_ContactPoint: t.Type<IContactPoint> = t.recursion(
  'IContactPoint',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      system: createEnumType<ContactPointSystemKind>(
        ContactPointSystemKind,
        'ContactPointSystemKind',
      ),
      _system: RTTI_Element,
      value: t.string,
      _value: RTTI_Element,
      use: createEnumType<ContactPointUseKind>(
        ContactPointUseKind,
        'ContactPointUseKind',
      ),
      _use: RTTI_Element,
      rank: RTTI_positiveInt,
      _rank: RTTI_Element,
      period: RTTI_Period,
    }),
);
