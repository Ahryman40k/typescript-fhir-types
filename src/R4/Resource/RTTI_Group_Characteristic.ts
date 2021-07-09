import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Period, IPeriod} from './RTTI_Period';

export interface IGroup_Characteristic {
  /**
   * A code that identifies the kind of trait being asserted.
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
   * The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
   */
  valueQuantity?: IQuantity;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
   */
  valueRange?: IRange;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
   */
  valueReference?: IReference;

  /**
   * If true, indicates the characteristic is one that is NOT held by members of the group.
   */
  exclude?: boolean;

  /**
   * Extensions for exclude
   */
  _exclude?: IElement;

  /**
   * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
   */
  period?: IPeriod;
}

export const RTTI_Group_Characteristic: t.Type<IGroup_Characteristic> =
  t.recursion('IGroup_Characteristic', () =>
    t.intersection([
      t.type({
        code: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        valueCodeableConcept: RTTI_CodeableConcept,
        valueBoolean: t.boolean,
        _valueBoolean: RTTI_Element,
        valueQuantity: RTTI_Quantity,
        valueRange: RTTI_Range,
        valueReference: RTTI_Reference,
        exclude: t.boolean,
        _exclude: RTTI_Element,
        period: RTTI_Period,
      }),
    ]),
  );
