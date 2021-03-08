import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Element, IElement} from './RTTI_Element';

import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';

export interface IProdCharacteristic {
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
   * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  height?: IQuantity;

  /**
   * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  width?: IQuantity;

  /**
   * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  depth?: IQuantity;

  /**
   * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  weight?: IQuantity;

  /**
   * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  nominalVolume?: IQuantity;

  /**
   * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  externalDiameter?: IQuantity;

  /**
   * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  shape?: string;

  /**
   * Extensions for shape
   */
  _shape?: IElement;

  /**
   * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  color?: string[];

  /**
   * Extensions for color
   */
  _color?: IElement[];

  /**
   * Where applicable, the imprint can be specified as text.
   */
  imprint?: string[];

  /**
   * Extensions for imprint
   */
  _imprint?: IElement[];

  /**
   * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
   */
  image?: IAttachment[];

  /**
   * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  scoring?: ICodeableConcept;
}

export const RTTI_ProdCharacteristic: t.Type<IProdCharacteristic> = t.recursion(
  'IProdCharacteristic',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      height: RTTI_Quantity,
      width: RTTI_Quantity,
      depth: RTTI_Quantity,
      weight: RTTI_Quantity,
      nominalVolume: RTTI_Quantity,
      externalDiameter: RTTI_Quantity,
      shape: t.string,
      _shape: RTTI_Element,
      color: t.array(t.string),
      _color: t.array(RTTI_Element),
      imprint: t.array(t.string),
      _imprint: t.array(RTTI_Element),
      image: t.array(RTTI_Attachment),
      scoring: RTTI_CodeableConcept,
    }),
);
