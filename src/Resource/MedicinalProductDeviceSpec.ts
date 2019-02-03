
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { MedicinalProductDeviceSpec_Material } from '../Resource/MedicinalProductDeviceSpec_Material';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ProdCharacteristic } from '../Resource/ProdCharacteristic';
import { ProductShelfLife } from '../Resource/ProductShelfLife';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A detailed description of a device, typically as part of a regulated medicinal product. It is not intended to replace the Device resource, which covers use of device instances. 
         */
        export class MedicinalProductDeviceSpec  {

            constructor() {
                this.Type = new CodeableConcept();
            }

            
                /**
                 * This is a MedicinalProductDeviceSpec resource
                 */
                ResourceType: string = 'MedicinalProductDeviceSpec;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Business identifier.
                 */
                Identifier? : Identifier;
                

                /**
                 * The type of device.
                 */
                Type : CodeableConcept;
                

                /**
                 * Trade name of the device, where applicable.
                 */
                TradeName? : String;
                

                /**
                 * Extensions for tradeName
                 */
                _tradeName? : Element;
                

                /**
                 * The quantity of the device present in the packaging of a medicinal product.
                 */
                Quantity? : Quantity;
                

                /**
                 * Device listing number.
                 */
                ListingNumber? : String;
                

                /**
                 * Extensions for listingNumber
                 */
                _listingNumber? : Element;
                

                /**
                 * Device model or reference number.
                 */
                ModelNumber? : String;
                

                /**
                 * Extensions for modelNumber
                 */
                _modelNumber? : Element;
                

                /**
                 * Whether the device is supplied as sterile.
                 */
                SterilityIndicator? : CodeableConcept;
                

                /**
                 * Whether the device must be sterilised before use.
                 */
                SterilisationRequirement? : CodeableConcept;
                

                /**
                 * Usage pattern including the number of times that the device may be used.
                 */
                Usage? : CodeableConcept;
                

                /**
                 * A nomenclature term for the device.
                 */
                Nomenclature? : Array<CodeableConcept>;
                

                /**
                 * Shelf Life and storage information.
                 */
                ShelfLifeStorage? : Array<ProductShelfLife>;
                

                /**
                 * Dimensions, color etc.
                 */
                PhysicalCharacteristics? : ProdCharacteristic;
                

                /**
                 * Other codeable characteristics.
                 */
                OtherCharacteristics? : Array<CodeableConcept>;
                

                /**
                 * Batch number or expiry date of a device.
                 */
                BatchIdentifier? : Array<Identifier>;
                

                /**
                 * Manufacturer of this Device.
                 */
                Manufacturer? : Array<Reference>;
                

                /**
                 * A substance used to create the material(s) of which the device is made.
                 */
                Material? : Array<MedicinalProductDeviceSpec_Material>;
                
        }
        