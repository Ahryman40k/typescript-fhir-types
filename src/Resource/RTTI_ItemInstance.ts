
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';




            export interface IItemInstance {
                
                    /**
                     * This is a ItemInstance resource
                     */
                    resourceType: 'ItemInstance';
                    
                
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
                     * The quantity or amount of instances. For example if several units are being counted for inventory, this quantity can be more than one, provided they are not unique. Seriallized items are considered unique and as such would have a quantity max 1. This element is required and its presence asserts that the reource refers to a physical item.
                     */
                    count? : number;
                    

                    /**
                     * Extensions for count
                     */
                    _count? : IElement;
                    

                    /**
                     * The location where the item is phisically located.
                     */
                    location? : IReference;
                    

                    /**
                     * The patient that the item is associated with (implanted in, given to).
                     */
                    subject? : IReference;
                    

                    /**
                     * The manufacture or preparation date and time. Times are necessary for several examples - for example biologically derived products, prepared or coumpounded medication, rapidly decaying isotopes.
                     */
                    manufactureDate? : string;
                    

                    /**
                     * Extensions for manufactureDate
                     */
                    _manufactureDate? : IElement;
                    

                    /**
                     * The expiry or preparation date and time.
                     */
                    expiryDate? : string;
                    

                    /**
                     * Extensions for expiryDate
                     */
                    _expiryDate? : IElement;
                    

                    /**
                     * The Software version associated with the device, typically only used for devices with embedded software or firmware.
                     */
                    currentSWVersion? : string;
                    

                    /**
                     * Extensions for currentSWVersion
                     */
                    _currentSWVersion? : IElement;
                    

                    /**
                     * The lot or batch number.
                     */
                    lotNumber? : string;
                    

                    /**
                     * Extensions for lotNumber
                     */
                    _lotNumber? : IElement;
                    

                    /**
                     * The serial number if available.
                     */
                    serialNumber? : string;
                    

                    /**
                     * Extensions for serialNumber
                     */
                    _serialNumber? : IElement;
                    

                    /**
                     * The machine-readable AIDC string in base64 encoding. Can correspond to the UDI pattern in devices.
                     */
                    carrierAIDC? : string;
                    

                    /**
                     * Extensions for carrierAIDC
                     */
                    _carrierAIDC? : IElement;
                    

                    /**
                     * The human-readable barcode string. Can correspond to the UDI pattern in devices.
                     */
                    carrierHRF? : string;
                    

                    /**
                     * Extensions for carrierHRF
                     */
                    _carrierHRF? : IElement;
                    
            }
        


        export const RTTI_ItemInstance: t.Type<IItemInstance> = t.recursion( 'IItemInstance', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('ItemInstance')
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
count: t.number,
_count: RTTI_Element,
location: RTTI_Reference,
subject: RTTI_Reference,
manufactureDate: t.string,
_manufactureDate: RTTI_Element,
expiryDate: t.string,
_expiryDate: RTTI_Element,
currentSWVersion: t.string,
_currentSWVersion: RTTI_Element,
lotNumber: t.string,
_lotNumber: RTTI_Element,
serialNumber: t.string,
_serialNumber: RTTI_Element,
carrierAIDC: t.string,
_carrierAIDC: RTTI_Element,
carrierHRF: t.string,
_carrierHRF: RTTI_Element
        })
        
            ])
        );
        

        