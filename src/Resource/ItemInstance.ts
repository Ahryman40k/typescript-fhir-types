
        import { Code } from '../Scalar/Code';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Integer } from '../Scalar/Integer';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A physical, countable instance of an item, for example one box or one unit. 
         */
        export class ItemInstance  {

            constructor() {
                
            }

            
                /**
                 * This is a ItemInstance resource
                 */
                ResourceType: string = 'ItemInstance;'
                

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
                 * The quantity or amount of instances. For example if several units are being counted for inventory, this quantity can be more than one, provided they are not unique. Seriallized items are considered unique and as such would have a quantity max 1. This element is required and its presence asserts that the reource refers to a physical item.
                 */
                Count? : Integer;
                

                /**
                 * Extensions for count
                 */
                _count? : Element;
                

                /**
                 * The location where the item is phisically located.
                 */
                Location? : Reference;
                

                /**
                 * The patient that the item is associated with (implanted in, given to).
                 */
                Subject? : Reference;
                

                /**
                 * The manufacture or preparation date and time. Times are necessary for several examples - for example biologically derived products, prepared or coumpounded medication, rapidly decaying isotopes.
                 */
                ManufactureDate? : DateTime;
                

                /**
                 * Extensions for manufactureDate
                 */
                _manufactureDate? : Element;
                

                /**
                 * The expiry or preparation date and time.
                 */
                ExpiryDate? : DateTime;
                

                /**
                 * Extensions for expiryDate
                 */
                _expiryDate? : Element;
                

                /**
                 * The Software version associated with the device, typically only used for devices with embedded software or firmware.
                 */
                CurrentSWVersion? : String;
                

                /**
                 * Extensions for currentSWVersion
                 */
                _currentSWVersion? : Element;
                

                /**
                 * The lot or batch number.
                 */
                LotNumber? : String;
                

                /**
                 * Extensions for lotNumber
                 */
                _lotNumber? : Element;
                

                /**
                 * The serial number if available.
                 */
                SerialNumber? : String;
                

                /**
                 * Extensions for serialNumber
                 */
                _serialNumber? : Element;
                

                /**
                 * The machine-readable AIDC string in base64 encoding. Can correspond to the UDI pattern in devices.
                 */
                CarrierAIDC? : String;
                

                /**
                 * Extensions for carrierAIDC
                 */
                _carrierAIDC? : Element;
                

                /**
                 * The human-readable barcode string. Can correspond to the UDI pattern in devices.
                 */
                CarrierHRF? : String;
                

                /**
                 * Extensions for carrierHRF
                 */
                _carrierHRF? : Element;
                
        }
        