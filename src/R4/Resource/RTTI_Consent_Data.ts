import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';
export enum Consent_DataMeaningKind {
  _instance = 'instance',
  _related = 'related',
  _dependents = 'dependents',
  _authoredby = 'authoredby',
}
import {createEnumType} from '../../EnumType';

export interface IConsent_Data {
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  reference: IReference;

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
   * How the resource reference is interpreted when testing consent restrictions.
   */
  meaning?: Consent_DataMeaningKind;

  /**
   * Extensions for meaning
   */
  _meaning?: IElement;
}

export const RTTI_Consent_Data: t.Type<IConsent_Data> = t.recursion(
  'IConsent_Data',
  () =>
    t.intersection([
      t.type({
        reference: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        meaning: createEnumType<Consent_DataMeaningKind>(
          Consent_DataMeaningKind,
          'Consent_DataMeaningKind',
        ),
        _meaning: RTTI_Element,
      }),
    ]),
);
