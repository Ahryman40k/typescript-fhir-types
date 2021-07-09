import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IMedicinalProductPharmaceutical_WithdrawalPeriod {
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  tissue: ICodeableConcept;

  /**
   * A value for the time.
   */
  value: IQuantity;

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
   * Extra information about the withdrawal period.
   */
  supportingInformation?: string;

  /**
   * Extensions for supportingInformation
   */
  _supportingInformation?: IElement;
}

export const RTTI_MedicinalProductPharmaceutical_WithdrawalPeriod: t.Type<IMedicinalProductPharmaceutical_WithdrawalPeriod> =
  t.recursion('IMedicinalProductPharmaceutical_WithdrawalPeriod', () =>
    t.intersection([
      t.type({
        tissue: RTTI_CodeableConcept,
        value: RTTI_Quantity,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        supportingInformation: t.string,
        _supportingInformation: RTTI_Element,
      }),
    ]),
  );
