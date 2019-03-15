
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Device_UdiCarrier, IDevice_UdiCarrier} from './RTTI_Device_UdiCarrier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Device_DeviceName, IDevice_DeviceName} from './RTTI_Device_DeviceName';
import {RTTI_Device_Specialization, IDevice_Specialization} from './RTTI_Device_Specialization';
import {RTTI_Device_Version, IDevice_Version} from './RTTI_Device_Version';
import {RTTI_Device_Property, IDevice_Property} from './RTTI_Device_Property';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';

export enum DeviceStatusKind {
                active = 'active',
inactive = 'inactive',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const DeviceStatusKindKeys = t.keyof({
                [DeviceStatusKind.active]: null,
[DeviceStatusKind.inactive]: null,
[DeviceStatusKind.enteredInError]: null,
[DeviceStatusKind.unknown]: null
            });


            export interface IDevice {
                
                    /**
                     * This is a Device resource
                     */
                    resourceType: 'Device'
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    // contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The reference to the definition for the device.
                     */
                    definition? : IReference;
                    

                    /**
                     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
                     */
                    udiCarrier? : IDevice_UdiCarrier[];
                    

                    /**
                     * Status of the Device availability.
                     */
                    status? : DeviceStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * Reason for the dtatus of the Device availability.
                     */
                    statusReason? : ICodeableConcept[];
                    

                    /**
                     * The distinct identification code required by §1271.290(c) for a human cell, tissue, or cellular and tissue-based product regulated as a device.
                     */
                    distinctIdentificationCode? : string;
                    

                    /**
                     * Extensions for distinctIdentificationCode
                     */
                    _distinctIdentificationCode? : IElement;
                    

                    /**
                     * A name of the manufacturer.
                     */
                    manufacturer? : string;
                    

                    /**
                     * Extensions for manufacturer
                     */
                    _manufacturer? : IElement;
                    

                    /**
                     * The date and time when the device was manufactured.
                     */
                    manufactureDate? : string;
                    

                    /**
                     * Extensions for manufactureDate
                     */
                    _manufactureDate? : IElement;
                    

                    /**
                     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
                     */
                    expirationDate? : string;
                    

                    /**
                     * Extensions for expirationDate
                     */
                    _expirationDate? : IElement;
                    

                    /**
                     * Lot number assigned by the manufacturer.
                     */
                    lotNumber? : string;
                    

                    /**
                     * Extensions for lotNumber
                     */
                    _lotNumber? : IElement;
                    

                    /**
                     * The serial number assigned by the organization when the device was manufactured.
                     */
                    serialNumber? : string;
                    

                    /**
                     * Extensions for serialNumber
                     */
                    _serialNumber? : IElement;
                    

                    /**
                     * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
                     */
                    deviceName? : IDevice_DeviceName[];
                    

                    /**
                     * The model number for the device.
                     */
                    modelNumber? : string;
                    

                    /**
                     * Extensions for modelNumber
                     */
                    _modelNumber? : IElement;
                    

                    /**
                     * The part number of thedevice.
                     */
                    partNumber? : string;
                    

                    /**
                     * Extensions for partNumber
                     */
                    _partNumber? : IElement;
                    

                    /**
                     * The kind or type of device.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
                     */
                    specialization? : IDevice_Specialization[];
                    

                    /**
                     * The actual design of the device or software version running on the device.
                     */
                    version? : IDevice_Version[];
                    

                    /**
                     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
                     */
                    property? : IDevice_Property[];
                    

                    /**
                     * Patient information, If the device is affixed to a person.
                     */
                    patient? : IReference;
                    

                    /**
                     * An organization that is responsible for the provision and ongoing maintenance of the device.
                     */
                    owner? : IReference;
                    

                    /**
                     * Contact details for an organization or a particular human that is responsible for the device.
                     */
                    contact? : IContactPoint[];
                    

                    /**
                     * The place where the device can be found.
                     */
                    location? : IReference;
                    

                    /**
                     * A network address on which the device may be contacted directly.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * Descriptive information, usage information or implantation information that is not captured in an existing element.
                     */
                    note? : IAnnotation[];
                    

                    /**
                     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
                     */
                    safety? : ICodeableConcept[];
                    

                    /**
                     * The parent device.
                     */
                    parent? : IReference;
                    
            }
        


        export const RTTI_Device: t.Type<IDevice> = t.recursion( 'IDevice', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('Device')
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
// contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
definition: RTTI_Reference,
udiCarrier: t.array(RTTI_Device_UdiCarrier),
status: DeviceStatusKindKeys,
_status: RTTI_Element,
statusReason: t.array(RTTI_CodeableConcept),
distinctIdentificationCode: t.string,
_distinctIdentificationCode: RTTI_Element,
manufacturer: t.string,
_manufacturer: RTTI_Element,
manufactureDate: t.string,
_manufactureDate: RTTI_Element,
expirationDate: t.string,
_expirationDate: RTTI_Element,
lotNumber: t.string,
_lotNumber: RTTI_Element,
serialNumber: t.string,
_serialNumber: RTTI_Element,
deviceName: t.array(RTTI_Device_DeviceName),
modelNumber: t.string,
_modelNumber: RTTI_Element,
partNumber: t.string,
_partNumber: RTTI_Element,
type: RTTI_CodeableConcept,
specialization: t.array(RTTI_Device_Specialization),
version: t.array(RTTI_Device_Version),
property: t.array(RTTI_Device_Property),
patient: RTTI_Reference,
owner: RTTI_Reference,
contact: t.array(RTTI_ContactPoint),
location: RTTI_Reference,
url: t.string,
_url: RTTI_Element,
note: t.array(RTTI_Annotation),
safety: t.array(RTTI_CodeableConcept),
parent: RTTI_Reference
        })
        
            ])
        );
        

        