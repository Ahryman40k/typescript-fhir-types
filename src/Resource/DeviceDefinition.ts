
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactPoint } from '../Resource/ContactPoint';
import { DeviceDefinition_Capability } from '../Resource/DeviceDefinition_Capability';
import { DeviceDefinition_DeviceName } from '../Resource/DeviceDefinition_DeviceName';
import { DeviceDefinition_Material } from '../Resource/DeviceDefinition_Material';
import { DeviceDefinition_Property } from '../Resource/DeviceDefinition_Property';
import { DeviceDefinition_Specialization } from '../Resource/DeviceDefinition_Specialization';
import { DeviceDefinition_UdiDeviceIdentifier } from '../Resource/DeviceDefinition_UdiDeviceIdentifier';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ProdCharacteristic } from '../Resource/ProdCharacteristic';
import { ProductShelfLife } from '../Resource/ProductShelfLife';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * The characteristics, operational status and capabilities of a medical-related component of a medical device. 
         */
        export class DeviceDefinition  {

            constructor() {
                
            }

            
                /**
                 * This is a DeviceDefinition resource
                 */
                ResourceType: string = 'DeviceDefinition;'
                

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
                 * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
                 */
                UdiDeviceIdentifier? : Array<DeviceDefinition_UdiDeviceIdentifier>;
                

                /**
                 * A name of the manufacturer.
                 */
                ManufacturerString? : String;
                

                /**
                 * Extensions for manufacturerString
                 */
                _manufacturerString? : Element;
                

                /**
                 * A name of the manufacturer.
                 */
                ManufacturerReference? : Reference;
                

                /**
                 * A name given to the device to identify it.
                 */
                DeviceName? : Array<DeviceDefinition_DeviceName>;
                

                /**
                 * The model number for the device.
                 */
                ModelNumber? : String;
                

                /**
                 * Extensions for modelNumber
                 */
                _modelNumber? : Element;
                

                /**
                 * What kind of device or device system this is.
                 */
                Type? : CodeableConcept;
                

                /**
                 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
                 */
                Specialization? : Array<DeviceDefinition_Specialization>;
                

                /**
                 * The actual design of the device or software version running on the device.
                 */
                Version? : Array<String>;
                

                /**
                 * Extensions for version
                 */
                _version? : Array<Element>;
                

                /**
                 * Safety characteristics of the device.
                 */
                Safety? : Array<CodeableConcept>;
                

                /**
                 * Shelf Life and storage information.
                 */
                ShelfLifeStorage? : Array<ProductShelfLife>;
                

                /**
                 * Dimensions, color etc.
                 */
                PhysicalCharacteristics? : ProdCharacteristic;
                

                /**
                 * Language code for the human-readable text strings produced by the device (all supported).
                 */
                LanguageCode? : Array<CodeableConcept>;
                

                /**
                 * Device capabilities.
                 */
                Capability? : Array<DeviceDefinition_Capability>;
                

                /**
                 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
                 */
                Property? : Array<DeviceDefinition_Property>;
                

                /**
                 * An organization that is responsible for the provision and ongoing maintenance of the device.
                 */
                Owner? : Reference;
                

                /**
                 * Contact details for an organization or a particular human that is responsible for the device.
                 */
                Contact? : Array<ContactPoint>;
                

                /**
                 * A network address on which the device may be contacted directly.
                 */
                Url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * Access to on-line information about the device.
                 */
                OnlineInformation? : Uri;
                

                /**
                 * Extensions for onlineInformation
                 */
                _onlineInformation? : Element;
                

                /**
                 * Descriptive information, usage information or implantation information that is not captured in an existing element.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
                 */
                Quantity? : Quantity;
                

                /**
                 * The parent device it can be part of.
                 */
                ParentDevice? : Reference;
                

                /**
                 * A substance used to create the material(s) of which the device is made.
                 */
                Material? : Array<DeviceDefinition_Material>;
                
        }
        