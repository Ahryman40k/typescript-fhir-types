import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_url} from '../Scalar/RTTI_url';

export interface IMessageHeader_Source {
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
   * Human-readable name for the source system.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * May include configuration or other information useful in debugging.
   */
  software?: string;

  /**
   * Extensions for software
   */
  _software?: IElement;

  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;

  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  contact?: IContactPoint;

  /**
   * Identifies the routing target to send acknowledgements to.
   */
  endpoint?: string;

  /**
   * Extensions for endpoint
   */
  _endpoint?: IElement;
}

export const RTTI_MessageHeader_Source: t.Type<IMessageHeader_Source> =
  t.recursion('IMessageHeader_Source', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      name: t.string,
      _name: RTTI_Element,
      software: t.string,
      _software: RTTI_Element,
      version: t.string,
      _version: RTTI_Element,
      contact: RTTI_ContactPoint,
      endpoint: RTTI_url,
      _endpoint: RTTI_Element,
    }),
  );
