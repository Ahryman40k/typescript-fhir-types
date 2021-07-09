import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Reference, IReference} from './RTTI_Reference';
export enum Composition_AttesterModeKind {
  _personal = 'personal',
  _professional = 'professional',
  _legal = 'legal',
  _official = 'official',
}
import {createEnumType} from '../../EnumType';

export interface IComposition_Attester {
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
   * The type of attestation the authenticator offers.
   */
  mode?: Composition_AttesterModeKind;

  /**
   * Extensions for mode
   */
  _mode?: IElement;

  /**
   * When the composition was attested by the party.
   */
  time?: string;

  /**
   * Extensions for time
   */
  _time?: IElement;

  /**
   * Who attested the composition in the specified way.
   */
  party?: IReference;
}

export const RTTI_Composition_Attester: t.Type<IComposition_Attester> =
  t.recursion('IComposition_Attester', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      mode: createEnumType<Composition_AttesterModeKind>(
        Composition_AttesterModeKind,
        'Composition_AttesterModeKind',
      ),
      _mode: RTTI_Element,
      time: RTTI_dateTime,
      _time: RTTI_Element,
      party: RTTI_Reference,
    }),
  );
