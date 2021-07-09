import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IObservation_ReferenceRange {
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
   * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
   */
  low?: IQuantity;

  /**
   * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
   */
  high?: IQuantity;

  /**
   * Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
   */
  type?: ICodeableConcept;

  /**
   * Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.  Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For example, to represent a target population of African American females, both a code of female and a code for African American would be used.
   */
  appliesTo?: ICodeableConcept[];

  /**
   * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
   */
  age?: IRange;

  /**
   * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;
}

export const RTTI_Observation_ReferenceRange: t.Type<IObservation_ReferenceRange> =
  t.recursion('IObservation_ReferenceRange', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      low: RTTI_Quantity,
      high: RTTI_Quantity,
      type: RTTI_CodeableConcept,
      appliesTo: t.array(RTTI_CodeableConcept),
      age: RTTI_Range,
      text: t.string,
      _text: RTTI_Element,
    }),
  );
