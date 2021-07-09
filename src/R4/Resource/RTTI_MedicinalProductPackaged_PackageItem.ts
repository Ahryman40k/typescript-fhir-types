import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {
  RTTI_ProdCharacteristic,
  IProdCharacteristic,
} from './RTTI_ProdCharacteristic';
import {
  RTTI_ProductShelfLife,
  IProductShelfLife,
} from './RTTI_ProductShelfLife';

export interface IMedicinalProductPackaged_PackageItem {
  /**
   * The physical type of the container of the medicine.
   */
  type: ICodeableConcept;

  /**
   * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
   */
  quantity: IQuantity;

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
   * Including possibly Data Carrier Identifier.
   */
  identifier?: IIdentifier[];

  /**
   * Material type of the package item.
   */
  material?: ICodeableConcept[];

  /**
   * A possible alternate material for the packaging.
   */
  alternateMaterial?: ICodeableConcept[];

  /**
   * A device accompanying a medicinal product.
   */
  device?: IReference[];

  /**
   * The manufactured item as contained in the packaged medicinal product.
   */
  manufacturedItem?: IReference[];

  /**
   * Allows containers within containers.
   */
  packageItem?: IMedicinalProductPackaged_PackageItem[];

  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: IProdCharacteristic;

  /**
   * Other codeable characteristics.
   */
  otherCharacteristics?: ICodeableConcept[];

  /**
   * Shelf Life and storage information.
   */
  shelfLifeStorage?: IProductShelfLife[];

  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: IReference[];
}

export const RTTI_MedicinalProductPackaged_PackageItem: t.Type<IMedicinalProductPackaged_PackageItem> =
  t.recursion('IMedicinalProductPackaged_PackageItem', () =>
    t.intersection([
      t.type({
        type: RTTI_CodeableConcept,
        quantity: RTTI_Quantity,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        identifier: t.array(RTTI_Identifier),
        material: t.array(RTTI_CodeableConcept),
        alternateMaterial: t.array(RTTI_CodeableConcept),
        device: t.array(RTTI_Reference),
        manufacturedItem: t.array(RTTI_Reference),
        packageItem: t.array(RTTI_MedicinalProductPackaged_PackageItem),
        physicalCharacteristics: RTTI_ProdCharacteristic,
        otherCharacteristics: t.array(RTTI_CodeableConcept),
        shelfLifeStorage: t.array(RTTI_ProductShelfLife),
        manufacturer: t.array(RTTI_Reference),
      }),
    ]),
  );
