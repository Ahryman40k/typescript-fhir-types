import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';

export interface IEncounter_Hospitalization {
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
   * Pre-admission identifier.
   */
  preAdmissionIdentifier?: IIdentifier;

  /**
   * The location/organization from which the patient came before admission.
   */
  origin?: IReference;

  /**
   * From where patient was admitted (physician referral, transfer).
   */
  admitSource?: ICodeableConcept;

  /**
   * Whether this hospitalization is a readmission and why if known.
   */
  reAdmission?: ICodeableConcept;

  /**
   * Diet preferences reported by the patient.
   */
  dietPreference?: ICodeableConcept[];

  /**
   * Special courtesies (VIP, board member).
   */
  specialCourtesy?: ICodeableConcept[];

  /**
   * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
   */
  specialArrangement?: ICodeableConcept[];

  /**
   * Location/organization to which the patient is discharged.
   */
  destination?: IReference;

  /**
   * Category or kind of location after discharge.
   */
  dischargeDisposition?: ICodeableConcept;
}

export const RTTI_Encounter_Hospitalization: t.Type<IEncounter_Hospitalization> =
  t.recursion('IEncounter_Hospitalization', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      preAdmissionIdentifier: RTTI_Identifier,
      origin: RTTI_Reference,
      admitSource: RTTI_CodeableConcept,
      reAdmission: RTTI_CodeableConcept,
      dietPreference: t.array(RTTI_CodeableConcept),
      specialCourtesy: t.array(RTTI_CodeableConcept),
      specialArrangement: t.array(RTTI_CodeableConcept),
      destination: RTTI_Reference,
      dischargeDisposition: RTTI_CodeableConcept,
    }),
  );
