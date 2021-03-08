import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {
  RTTI_Dosage_DoseAndRate,
  IDosage_DoseAndRate,
} from './RTTI_Dosage_DoseAndRate';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';

export interface IDosage {
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
   * Indicates the order in which the dosage instructions should be applied or interpreted.
   */
  sequence?: number;

  /**
   * Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * Free text dosage instructions e.g. SIG.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;

  /**
   * Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps").
   */
  additionalInstruction?: ICodeableConcept[];

  /**
   * Instructions in terms that are understood by the patient or consumer.
   */
  patientInstruction?: string;

  /**
   * Extensions for patientInstruction
   */
  _patientInstruction?: IElement;

  /**
   * When medication should be administered.
   */
  timing?: ITiming;

  /**
   * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
   */
  asNeededBoolean?: boolean;

  /**
   * Extensions for asNeededBoolean
   */
  _asNeededBoolean?: IElement;

  /**
   * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
   */
  asNeededCodeableConcept?: ICodeableConcept;

  /**
   * Body site to administer to.
   */
  site?: ICodeableConcept;

  /**
   * How drug should enter body.
   */
  route?: ICodeableConcept;

  /**
   * Technique for administering medication.
   */
  method?: ICodeableConcept;

  /**
   * The amount of medication administered.
   */
  doseAndRate?: IDosage_DoseAndRate[];

  /**
   * Upper limit on medication per unit of time.
   */
  maxDosePerPeriod?: IRatio;

  /**
   * Upper limit on medication per administration.
   */
  maxDosePerAdministration?: IQuantity;

  /**
   * Upper limit on medication per lifetime of the patient.
   */
  maxDosePerLifetime?: IQuantity;
}

export const RTTI_Dosage: t.Type<IDosage> = t.recursion('IDosage', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    sequence: RTTI_integer,
    _sequence: RTTI_Element,
    text: t.string,
    _text: RTTI_Element,
    additionalInstruction: t.array(RTTI_CodeableConcept),
    patientInstruction: t.string,
    _patientInstruction: RTTI_Element,
    timing: RTTI_Timing,
    asNeededBoolean: t.boolean,
    _asNeededBoolean: RTTI_Element,
    asNeededCodeableConcept: RTTI_CodeableConcept,
    site: RTTI_CodeableConcept,
    route: RTTI_CodeableConcept,
    method: RTTI_CodeableConcept,
    doseAndRate: t.array(RTTI_Dosage_DoseAndRate),
    maxDosePerPeriod: RTTI_Ratio,
    maxDosePerAdministration: RTTI_Quantity,
    maxDosePerLifetime: RTTI_Quantity,
  }),
);
