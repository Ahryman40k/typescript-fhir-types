import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IVerificationResult_PrimarySource {
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
   * Reference to the primary source.
   */
  who?: IReference;

  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
   */
  type?: ICodeableConcept[];

  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  communicationMethod?: ICodeableConcept[];

  /**
   * Status of the validation of the target against the primary source (successful; failed; unknown).
   */
  validationStatus?: ICodeableConcept;

  /**
   * When the target was validated against the primary source.
   */
  validationDate?: string;

  /**
   * Extensions for validationDate
   */
  _validationDate?: IElement;

  /**
   * Ability of the primary source to push updates/alerts (yes; no; undetermined).
   */
  canPushUpdates?: ICodeableConcept;

  /**
   * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   */
  pushTypeAvailable?: ICodeableConcept[];
}

export const RTTI_VerificationResult_PrimarySource: t.Type<IVerificationResult_PrimarySource> =
  t.recursion('IVerificationResult_PrimarySource', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      who: RTTI_Reference,
      type: t.array(RTTI_CodeableConcept),
      communicationMethod: t.array(RTTI_CodeableConcept),
      validationStatus: RTTI_CodeableConcept,
      validationDate: RTTI_dateTime,
      _validationDate: RTTI_Element,
      canPushUpdates: RTTI_CodeableConcept,
      pushTypeAvailable: t.array(RTTI_CodeableConcept),
    }),
  );
