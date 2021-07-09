import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {
  RTTI_MedicinalProductPharmaceutical_TargetSpecies,
  IMedicinalProductPharmaceutical_TargetSpecies,
} from './RTTI_MedicinalProductPharmaceutical_TargetSpecies';

export interface IMedicinalProductPharmaceutical_RouteOfAdministration {
  /**
   * Coded expression for the route.
   */
  code: ICodeableConcept;

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
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   */
  firstDose?: IQuantity;

  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   */
  maxSingleDose?: IQuantity;

  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerDay?: IQuantity;

  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerTreatmentPeriod?: IRatio;

  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxTreatmentPeriod?: IDuration;

  /**
   * A species for which this route applies.
   */
  targetSpecies?: IMedicinalProductPharmaceutical_TargetSpecies[];
}

export const RTTI_MedicinalProductPharmaceutical_RouteOfAdministration: t.Type<IMedicinalProductPharmaceutical_RouteOfAdministration> =
  t.recursion('IMedicinalProductPharmaceutical_RouteOfAdministration', () =>
    t.intersection([
      t.type({
        code: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        firstDose: RTTI_Quantity,
        maxSingleDose: RTTI_Quantity,
        maxDosePerDay: RTTI_Quantity,
        maxDosePerTreatmentPeriod: RTTI_Ratio,
        maxTreatmentPeriod: RTTI_Duration,
        targetSpecies: t.array(
          RTTI_MedicinalProductPharmaceutical_TargetSpecies,
        ),
      }),
    ]),
  );
