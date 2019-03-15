
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_DeviceDefinition_UdiDeviceIdentifier, IDeviceDefinition_UdiDeviceIdentifier} from './RTTI_DeviceDefinition_UdiDeviceIdentifier';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_DeviceDefinition_DeviceName, IDeviceDefinition_DeviceName} from './RTTI_DeviceDefinition_DeviceName';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_DeviceDefinition_Specialization, IDeviceDefinition_Specialization} from './RTTI_DeviceDefinition_Specialization';

import {RTTI_ProductShelfLife, IProductShelfLife} from './RTTI_ProductShelfLife';
import {RTTI_ProdCharacteristic, IProdCharacteristic} from './RTTI_ProdCharacteristic';
import {RTTI_DeviceDefinition_Capability, IDeviceDefinition_Capability} from './RTTI_DeviceDefinition_Capability';
import {RTTI_DeviceDefinition_Property, IDeviceDefinition_Property} from './RTTI_DeviceDefinition_Property';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_DeviceDefinition_Material, IDeviceDefinition_Material} from './RTTI_DeviceDefinition_Material';




            export interface IDeviceDefinition {
                
                    /**
                     * This is a DeviceDefinition resource
                     */
                    resourceType: 'DeviceDefinition'
                    
                
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
                    contained? : IResourceList[];
                    

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
                     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
                     */
                    udiDeviceIdentifier? : IDeviceDefinition_UdiDeviceIdentifier[];
                    

                    /**
                     * A name of the manufacturer.
                     */
                    manufacturerString? : string;
                    

                    /**
                     * Extensions for manufacturerString
                     */
                    _manufacturerString? : IElement;
                    

                    /**
                     * A name of the manufacturer.
                     */
                    manufacturerReference? : IReference;
                    

                    /**
                     * A name given to the device to identify it.
                     */
                    deviceName? : IDeviceDefinition_DeviceName[];
                    

                    /**
                     * The model number for the device.
                     */
                    modelNumber? : string;
                    

                    /**
                     * Extensions for modelNumber
                     */
                    _modelNumber? : IElement;
                    

                    /**
                     * What kind of device or device system this is.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
                     */
                    specialization? : IDeviceDefinition_Specialization[];
                    

                    /**
                     * The actual design of the device or software version running on the device.
                     */
                    version? : string[];
                    

                    /**
                     * Extensions for version
                     */
                    _version? : IElement[];
                    

                    /**
                     * Safety characteristics of the device.
                     */
                    safety? : ICodeableConcept[];
                    

                    /**
                     * Shelf Life and storage information.
                     */
                    shelfLifeStorage? : IProductShelfLife[];
                    

                    /**
                     * Dimensions, color etc.
                     */
                    physicalCharacteristics? : IProdCharacteristic;
                    

                    /**
                     * Language code for the human-readable text strings produced by the device (all supported).
                     */
                    languageCode? : ICodeableConcept[];
                    

                    /**
                     * Device capabilities.
                     */
                    capability? : IDeviceDefinition_Capability[];
                    

                    /**
                     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
                     */
                    property? : IDeviceDefinition_Property[];
                    

                    /**
                     * An organization that is responsible for the provision and ongoing maintenance of the device.
                     */
                    owner? : IReference;
                    

                    /**
                     * Contact details for an organization or a particular human that is responsible for the device.
                     */
                    contact? : IContactPoint[];
                    

                    /**
                     * A network address on which the device may be contacted directly.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * Access to on-line information about the device.
                     */
                    onlineInformation? : string;
                    

                    /**
                     * Extensions for onlineInformation
                     */
                    _onlineInformation? : IElement;
                    

                    /**
                     * Descriptive information, usage information or implantation information that is not captured in an existing element.
                     */
                    note? : IAnnotation[];
                    

                    /**
                     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
                     */
                    quantity? : IQuantity;
                    

                    /**
                     * The parent device it can be part of.
                     */
                    parentDevice? : IReference;
                    

                    /**
                     * A substance used to create the material(s) of which the device is made.
                     */
                    material? : IDeviceDefinition_Material[];
                    
            }
        


        export const RTTI_DeviceDefinition: t.Type<IDeviceDefinition> = t.recursion( 'IDeviceDefinition', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('DeviceDefinition')
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
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
udiDeviceIdentifier: t.array(RTTI_DeviceDefinition_UdiDeviceIdentifier),
manufacturerString: t.string,
_manufacturerString: RTTI_Element,
manufacturerReference: RTTI_Reference,
deviceName: t.array(RTTI_DeviceDefinition_DeviceName),
modelNumber: t.string,
_modelNumber: RTTI_Element,
type: RTTI_CodeableConcept,
specialization: t.array(RTTI_DeviceDefinition_Specialization),
version: t.array(t.string),
_version: t.array(RTTI_Element),
safety: t.array(RTTI_CodeableConcept),
shelfLifeStorage: t.array(RTTI_ProductShelfLife),
physicalCharacteristics: RTTI_ProdCharacteristic,
languageCode: t.array(RTTI_CodeableConcept),
capability: t.array(RTTI_DeviceDefinition_Capability),
property: t.array(RTTI_DeviceDefinition_Property),
owner: RTTI_Reference,
contact: t.array(RTTI_ContactPoint),
url: t.string,
_url: RTTI_Element,
onlineInformation: t.string,
_onlineInformation: RTTI_Element,
note: t.array(RTTI_Annotation),
quantity: RTTI_Quantity,
parentDevice: RTTI_Reference,
material: t.array(RTTI_DeviceDefinition_Material)
        })
        
            ])
        );
        

        