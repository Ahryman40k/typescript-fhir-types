import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {
  RTTI_MedicationRequest_InitialFill,
  IMedicationRequest_InitialFill,
} from './RTTI_MedicationRequest_InitialFill';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_unsignedInt} from '../Scalar/RTTI_unsignedInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IMedicationRequest_DispenseRequest {
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
   * Indicates the quantity or duration for the first dispense of the medication.
   */
  initialFill?: IMedicationRequest_InitialFill;

  /**
   * The minimum period of time that must occur between dispenses of the medication.
   */
  dispenseInterval?: IDuration;

  /**
   * This indicates the validity period of a prescription (stale dating the Prescription).
   */
  validityPeriod?: IPeriod;

  /**
   * An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.  A prescriber may explicitly say that zero refills are permitted after the initial dispense.
   */
  numberOfRepeatsAllowed?: number;

  /**
   * Extensions for numberOfRepeatsAllowed
   */
  _numberOfRepeatsAllowed?: IElement;

  /**
   * The amount that is to be dispensed for one fill.
   */
  quantity?: IQuantity;

  /**
   * Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
   */
  expectedSupplyDuration?: IDuration;

  /**
   * Indicates the intended dispensing Organization specified by the prescriber.
   */
  performer?: IReference;
}

export const RTTI_MedicationRequest_DispenseRequest: t.Type<IMedicationRequest_DispenseRequest> =
  t.recursion('IMedicationRequest_DispenseRequest', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      initialFill: RTTI_MedicationRequest_InitialFill,
      dispenseInterval: RTTI_Duration,
      validityPeriod: RTTI_Period,
      numberOfRepeatsAllowed: RTTI_unsignedInt,
      _numberOfRepeatsAllowed: RTTI_Element,
      quantity: RTTI_Quantity,
      expectedSupplyDuration: RTTI_Duration,
      performer: RTTI_Reference,
    }),
  );
