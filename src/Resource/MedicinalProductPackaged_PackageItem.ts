
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { ProdCharacteristic } from '../Resource/ProdCharacteristic';
import { ProductShelfLife } from '../Resource/ProductShelfLife';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        

        /**
         * A medicinal product in a container or package. 
         */
        export class MedicinalProductPackaged_PackageItem  {

            constructor() {
                this.type = new CodeableConcept();
this.quantity = new Quantity();
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Including possibly Data Carrier Identifier.
                 */
                identifier? : Identifier[];
                

                /**
                 * The physical type of the container of the medicine.
                 */
                type : CodeableConcept;
                

                /**
                 * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
                 */
                quantity : Quantity;
                

                /**
                 * Material type of the package item.
                 */
                material? : CodeableConcept[];
                

                /**
                 * A possible alternate material for the packaging.
                 */
                alternateMaterial? : CodeableConcept[];
                

                /**
                 * A device accompanying a medicinal product.
                 */
                device? : Reference[];
                

                /**
                 * The manufactured item as contained in the packaged medicinal product.
                 */
                manufacturedItem? : Reference[];
                

                /**
                 * Allows containers within containers.
                 */
                packageItem? : MedicinalProductPackaged_PackageItem[];
                

                /**
                 * Dimensions, color etc.
                 */
                physicalCharacteristics? : ProdCharacteristic;
                

                /**
                 * Other codeable characteristics.
                 */
                otherCharacteristics? : CodeableConcept[];
                

                /**
                 * Shelf Life and storage information.
                 */
                shelfLifeStorage? : ProductShelfLife[];
                

                /**
                 * Manufacturer of this Package Item.
                 */
                manufacturer? : Reference[];
                
        }
        