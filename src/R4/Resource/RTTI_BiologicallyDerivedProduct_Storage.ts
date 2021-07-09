import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {RTTI_Period, IPeriod} from './RTTI_Period';
export enum BiologicallyDerivedProduct_StorageScaleKind {
  _farenheit = 'farenheit',
  _celsius = 'celsius',
  _kelvin = 'kelvin',
}
import {createEnumType} from '../../EnumType';

export interface IBiologicallyDerivedProduct_Storage {
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
   * Description of storage.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Storage temperature.
   */
  temperature?: number;

  /**
   * Extensions for temperature
   */
  _temperature?: IElement;

  /**
   * Temperature scale used.
   */
  scale?: BiologicallyDerivedProduct_StorageScaleKind;

  /**
   * Extensions for scale
   */
  _scale?: IElement;

  /**
   * Storage timeperiod.
   */
  duration?: IPeriod;
}

export const RTTI_BiologicallyDerivedProduct_Storage: t.Type<IBiologicallyDerivedProduct_Storage> =
  t.recursion('IBiologicallyDerivedProduct_Storage', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      description: t.string,
      _description: RTTI_Element,
      temperature: RTTI_decimal,
      _temperature: RTTI_Element,
      scale: createEnumType<BiologicallyDerivedProduct_StorageScaleKind>(
        BiologicallyDerivedProduct_StorageScaleKind,
        'BiologicallyDerivedProduct_StorageScaleKind',
      ),
      _scale: RTTI_Element,
      duration: RTTI_Period,
    }),
  );
