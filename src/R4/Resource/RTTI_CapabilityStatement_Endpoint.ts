import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_url} from '../Scalar/RTTI_url';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface ICapabilityStatement_Endpoint {
  /**
   * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
   */
  protocol: ICoding;

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
   * The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier.
   */
  address?: string;

  /**
   * Extensions for address
   */
  _address?: IElement;
}

export const RTTI_CapabilityStatement_Endpoint: t.Type<ICapabilityStatement_Endpoint> =
  t.recursion('ICapabilityStatement_Endpoint', () =>
    t.intersection([
      t.type({
        protocol: RTTI_Coding,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        address: RTTI_url,
        _address: RTTI_Element,
      }),
    ]),
  );
