import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';

export interface ICapabilityStatement_Security {
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
   * Server adds CORS headers when responding to requests - this enables Javascript applications to use the server.
   */
  cors?: boolean;

  /**
   * Extensions for cors
   */
  _cors?: IElement;

  /**
   * Types of security services that are supported/required by the system.
   */
  service?: ICodeableConcept[];

  /**
   * General description of how security works.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;
}

export const RTTI_CapabilityStatement_Security: t.Type<ICapabilityStatement_Security> =
  t.recursion('ICapabilityStatement_Security', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      cors: t.boolean,
      _cors: RTTI_Element,
      service: t.array(RTTI_CodeableConcept),
      description: RTTI_markdown,
      _description: RTTI_Element,
    }),
  );
