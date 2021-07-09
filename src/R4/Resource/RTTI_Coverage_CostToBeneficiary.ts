import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {
  RTTI_Coverage_Exception,
  ICoverage_Exception,
} from './RTTI_Coverage_Exception';

export interface ICoverage_CostToBeneficiary {
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
   * The category of patient centric costs associated with treatment.
   */
  type?: ICodeableConcept;

  /**
   * The amount due from the patient for the cost category.
   */
  valueQuantity?: IQuantity;

  /**
   * The amount due from the patient for the cost category.
   */
  valueMoney?: IMoney;

  /**
   * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  exception?: ICoverage_Exception[];
}

export const RTTI_Coverage_CostToBeneficiary: t.Type<ICoverage_CostToBeneficiary> =
  t.recursion('ICoverage_CostToBeneficiary', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: RTTI_CodeableConcept,
      valueQuantity: RTTI_Quantity,
      valueMoney: RTTI_Money,
      exception: t.array(RTTI_Coverage_Exception),
    }),
  );
