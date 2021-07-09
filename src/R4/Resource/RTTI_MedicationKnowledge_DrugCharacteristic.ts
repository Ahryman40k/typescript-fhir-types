import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';

export interface IMedicationKnowledge_DrugCharacteristic {
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
   * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
   */
  type?: ICodeableConcept;

  /**
   * Description of the characteristic.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Description of the characteristic.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * Description of the characteristic.
   */
  valueQuantity?: IQuantity;

  /**
   * Description of the characteristic.
   */
  valueBase64Binary?: string;

  /**
   * Extensions for valueBase64Binary
   */
  _valueBase64Binary?: IElement;
}

export const RTTI_MedicationKnowledge_DrugCharacteristic: t.Type<IMedicationKnowledge_DrugCharacteristic> =
  t.recursion('IMedicationKnowledge_DrugCharacteristic', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: RTTI_CodeableConcept,
      valueCodeableConcept: RTTI_CodeableConcept,
      valueString: t.string,
      _valueString: RTTI_Element,
      valueQuantity: RTTI_Quantity,
      valueBase64Binary: t.string,
      _valueBase64Binary: RTTI_Element,
    }),
  );
