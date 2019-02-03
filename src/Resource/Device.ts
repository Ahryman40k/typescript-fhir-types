
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactPoint } from '../Resource/ContactPoint';
import { DateTime } from '../Scalar/DateTime';
import { Device_DeviceName } from '../Resource/Device_DeviceName';
import { Device_Property } from '../Resource/Device_Property';
import { Device_Specialization } from '../Resource/Device_Specialization';
import { Device_UdiCarrier } from '../Resource/Device_UdiCarrier';
import { Device_Version } from '../Resource/Device_Version';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum DeviceStatusKind {
                active,
inactive,
enteredInError,
unknown
            }

        /**
         * This resource identifies a type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices include durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc. This is the catalog description of a device (not the specific instance). 
         */
        export class Device  {

            constructor() {
                
            }

            
                /**
                 * This is a Device resource
                 */
                ResourceType: string = 'Device;'
                

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
                 * Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The reference to the definition for the device.
                 */
                Definition? : Reference;
                

                /**
                 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
                 */
                UdiCarrier? : Array<Device_UdiCarrier>;
                

                /**
                 * Status of the Device availability.
                 */
                Status? : DeviceStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Reason for the dtatus of the Device availability.
                 */
                StatusReason? : Array<CodeableConcept>;
                

                /**
                 * The distinct identification code required by §1271.290(c) for a human cell, tissue, or cellular and tissue-based product regulated as a device.
                 */
                DistinctIdentificationCode? : String;
                

                /**
                 * Extensions for distinctIdentificationCode
                 */
                _distinctIdentificationCode? : Element;
                

                /**
                 * A name of the manufacturer.
                 */
                Manufacturer? : String;
                

                /**
                 * Extensions for manufacturer
                 */
                _manufacturer? : Element;
                

                /**
                 * The date and time when the device was manufactured.
                 */
                ManufactureDate? : DateTime;
                

                /**
                 * Extensions for manufactureDate
                 */
                _manufactureDate? : Element;
                

                /**
                 * The date and time beyond which this device is no longer valid or should not be used (if applicable).
                 */
                ExpirationDate? : DateTime;
                

                /**
                 * Extensions for expirationDate
                 */
                _expirationDate? : Element;
                

                /**
                 * Lot number assigned by the manufacturer.
                 */
                LotNumber? : String;
                

                /**
                 * Extensions for lotNumber
                 */
                _lotNumber? : Element;
                

                /**
                 * The serial number assigned by the organization when the device was manufactured.
                 */
                SerialNumber? : String;
                

                /**
                 * Extensions for serialNumber
                 */
                _serialNumber? : Element;
                

                /**
                 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
                 */
                DeviceName? : Array<Device_DeviceName>;
                

                /**
                 * The model number for the device.
                 */
                ModelNumber? : String;
                

                /**
                 * Extensions for modelNumber
                 */
                _modelNumber? : Element;
                

                /**
                 * The part number of thedevice.
                 */
                PartNumber? : String;
                

                /**
                 * Extensions for partNumber
                 */
                _partNumber? : Element;
                

                /**
                 * The kind or type of device.
                 */
                Type? : CodeableConcept;
                

                /**
                 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
                 */
                Specialization? : Array<Device_Specialization>;
                

                /**
                 * The actual design of the device or software version running on the device.
                 */
                Version? : Array<Device_Version>;
                

                /**
                 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
                 */
                Property? : Array<Device_Property>;
                

                /**
                 * Patient information, If the device is affixed to a person.
                 */
                Patient? : Reference;
                

                /**
                 * An organization that is responsible for the provision and ongoing maintenance of the device.
                 */
                Owner? : Reference;
                

                /**
                 * Contact details for an organization or a particular human that is responsible for the device.
                 */
                Contact? : Array<ContactPoint>;
                

                /**
                 * The place where the device can be found.
                 */
                Location? : Reference;
                

                /**
                 * A network address on which the device may be contacted directly.
                 */
                Url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * Descriptive information, usage information or implantation information that is not captured in an existing element.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * Provides additional safety characteristics about a medical device.  For example devices containing latex.
                 */
                Safety? : Array<CodeableConcept>;
                

                /**
                 * The parent device.
                 */
                Parent? : Reference;
                
        }
        