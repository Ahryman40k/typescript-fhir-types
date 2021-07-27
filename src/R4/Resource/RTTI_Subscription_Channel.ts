import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_url} from '../Scalar/RTTI_url';
import {RTTI_code} from '../Scalar/RTTI_code';

export enum Subscription_ChannelTypeKind {
  _restHook = 'rest-hook',
  _websocket = 'websocket',
  _email = 'email',
  _sms = 'sms',
  _message = 'message',
}
import {createEnumType} from '../../EnumType';

export interface ISubscription_Channel {
  /**
   * The type of channel to send notifications on.
   */
  type: Subscription_ChannelTypeKind;

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
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The url that describes the actual end-point to send messages to.
   */
  endpoint?: string;

  /**
   * Extensions for endpoint
   */
  _endpoint?: IElement;

  /**
   * The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification. The mime type "text/plain" may also be used for Email and SMS subscriptions.
   */
  payload?: string;

  /**
   * Extensions for payload
   */
  _payload?: IElement;

  /**
   * Additional headers / information to send as part of the notification.
   */
  header?: string[];

  /**
   * Extensions for header
   */
  _header?: IElement[];
}

export const RTTI_Subscription_Channel: t.Type<ISubscription_Channel> =
  t.recursion('ISubscription_Channel', () =>
    t.intersection([
      t.type({
        type: createEnumType<Subscription_ChannelTypeKind>(
          Subscription_ChannelTypeKind,
          'Subscription_ChannelTypeKind',
        ),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        _type: RTTI_Element,
        endpoint: RTTI_url,
        _endpoint: RTTI_Element,
        payload: RTTI_code,
        _payload: RTTI_Element,
        header: t.array(t.string),
        _header: t.array(RTTI_Element),
      }),
    ]),
  );
