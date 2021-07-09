import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {
  RTTI_ExampleScenario_ContainedInstance,
  IExampleScenario_ContainedInstance,
} from './RTTI_ExampleScenario_ContainedInstance';

export interface IExampleScenario_Operation {
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
   * The sequential number of the interaction, e.g. 1.2.5.
   */
  number?: string;

  /**
   * Extensions for number
   */
  _number?: IElement;

  /**
   * The type of operation - CRUD.
   */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The human-friendly name of the interaction.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Who starts the transaction.
   */
  initiator?: string;

  /**
   * Extensions for initiator
   */
  _initiator?: IElement;

  /**
   * Who receives the transaction.
   */
  receiver?: string;

  /**
   * Extensions for receiver
   */
  _receiver?: IElement;

  /**
   * A comment to be inserted in the diagram.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Whether the initiator is deactivated right after the transaction.
   */
  initiatorActive?: boolean;

  /**
   * Extensions for initiatorActive
   */
  _initiatorActive?: IElement;

  /**
   * Whether the receiver is deactivated right after the transaction.
   */
  receiverActive?: boolean;

  /**
   * Extensions for receiverActive
   */
  _receiverActive?: IElement;

  /**
   * Each resource instance used by the initiator.
   */
  request?: IExampleScenario_ContainedInstance;

  /**
   * Each resource instance used by the responder.
   */
  response?: IExampleScenario_ContainedInstance;
}

export const RTTI_ExampleScenario_Operation: t.Type<IExampleScenario_Operation> =
  t.recursion('IExampleScenario_Operation', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      number: t.string,
      _number: RTTI_Element,
      type: t.string,
      _type: RTTI_Element,
      name: t.string,
      _name: RTTI_Element,
      initiator: t.string,
      _initiator: RTTI_Element,
      receiver: t.string,
      _receiver: RTTI_Element,
      description: RTTI_markdown,
      _description: RTTI_Element,
      initiatorActive: t.boolean,
      _initiatorActive: RTTI_Element,
      receiverActive: t.boolean,
      _receiverActive: RTTI_Element,
      request: RTTI_ExampleScenario_ContainedInstance,
      response: RTTI_ExampleScenario_ContainedInstance,
    }),
  );
