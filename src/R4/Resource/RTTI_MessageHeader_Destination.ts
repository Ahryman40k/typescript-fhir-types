import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_url} from '../Scalar/RTTI_url';

export interface IMessageHeader_Destination {
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
   * Human-readable name for the target system.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  target?: IReference;

  /**
   * Indicates where the message should be routed to.
   */
  endpoint?: string;

  /**
   * Extensions for endpoint
   */
  _endpoint?: IElement;

  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  receiver?: IReference;
}

export const RTTI_MessageHeader_Destination: t.Type<IMessageHeader_Destination> =
  t.recursion('IMessageHeader_Destination', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      name: t.string,
      _name: RTTI_Element,
      target: RTTI_Reference,
      endpoint: RTTI_url,
      _endpoint: RTTI_Element,
      receiver: RTTI_Reference,
    }),
  );
