import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_code} from '../Scalar/RTTI_code';
export enum QuantityComparatorKind {
  _lower = '<',
  _lowerOrEqual = '<=',
  _greaterOrEqual = '>=',
  _greater = '>',
}
import {createEnumType} from '../../EnumType';

export interface IQuantity {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The value of the measured amount. The value includes an implicit precision in the presentation of the value.
   */
  value?: number;

  /**
   * Extensions for value
   */
  _value?: IElement;

  /**
   * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
   */
  comparator?: QuantityComparatorKind;

  /**
   * Extensions for comparator
   */
  _comparator?: IElement;

  /**
   * A human-readable form of the unit.
   */
  unit?: string;

  /**
   * Extensions for unit
   */
  _unit?: IElement;

  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string;

  /**
   * Extensions for system
   */
  _system?: IElement;

  /**
   * A computer processable form of the unit in some unit representation system.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;
}

export const RTTI_Quantity: t.Type<IQuantity> = t.recursion('IQuantity', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    value: RTTI_decimal,
    _value: RTTI_Element,
    comparator: createEnumType<QuantityComparatorKind>(
      QuantityComparatorKind,
      'QuantityComparatorKind',
    ),
    _comparator: RTTI_Element,
    unit: t.string,
    _unit: RTTI_Element,
    system: RTTI_uri,
    _system: RTTI_Element,
    code: RTTI_code,
    _code: RTTI_Element,
  }),
);
