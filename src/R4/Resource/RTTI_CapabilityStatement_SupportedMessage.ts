import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
export enum CapabilityStatement_SupportedMessageModeKind {
  _sender = 'sender',
  _receiver = 'receiver',
}
import {createEnumType} from '../../EnumType';

export interface ICapabilityStatement_SupportedMessage {
  /**
   * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
   */
  definition: string;

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
   * The mode of this event declaration - whether application is sender or receiver.
   */
  mode?: CapabilityStatement_SupportedMessageModeKind;

  /**
   * Extensions for mode
   */
  _mode?: IElement;
}

export const RTTI_CapabilityStatement_SupportedMessage: t.Type<ICapabilityStatement_SupportedMessage> =
  t.recursion('ICapabilityStatement_SupportedMessage', () =>
    t.intersection([
      t.type({
        definition: RTTI_canonical,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        mode: createEnumType<CapabilityStatement_SupportedMessageModeKind>(
          CapabilityStatement_SupportedMessageModeKind,
          'CapabilityStatement_SupportedMessageModeKind',
        ),
        _mode: RTTI_Element,
      }),
    ]),
  );
