
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { createEnumType } from '../../EnumType';

export enum SlotStatusKind {
    busy = 'busy',
    free = 'free',
    busyUnavailable = 'busy-unavailable',
    busyTentative = 'busy-tentative',
    enteredInError = 'entered-in-error'
}
/*
const SlotStatusKindKeys = t.keyof({
    [SlotStatusKind.busy]: null,
    [SlotStatusKind.free]: null,
    [SlotStatusKind.busyUnavailable]: null,
    [SlotStatusKind.busyTentative]: null,
    [SlotStatusKind.enteredInError]: null
});
*/

export interface ISlot {

    /**
     * This is a Slot resource
     */
    resourceType: 'Slot';


    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: IReference;


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * External Ids for this item.
     */
    identifier?: IIdentifier[];


    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: ICodeableConcept[];


    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    serviceType?: ICodeableConcept[];


    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: ICodeableConcept[];


    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: ICodeableConcept;


    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status?: SlotStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * Date/Time that the slot is to begin.
     */
    start?: string;


    /**
     * Extensions for start
     */
    _start?: IElement;


    /**
     * Date/Time that the slot is to conclude.
     */
    end?: string;


    /**
     * Extensions for end
     */
    _end?: IElement;


    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: boolean;


    /**
     * Extensions for overbooked
     */
    _overbooked?: IElement;


    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: string;


    /**
     * Extensions for comment
     */
    _comment?: IElement;

}



export const RTTI_Slot: t.Type<ISlot> = t.recursion('ISlot', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('Slot'),
            schedule: RTTI_Reference
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
            serviceCategory: t.array(RTTI_CodeableConcept),
            serviceType: t.array(RTTI_CodeableConcept),
            specialty: t.array(RTTI_CodeableConcept),
            appointmentType: RTTI_CodeableConcept,
            status: createEnumType<SlotStatusKind>(SlotStatusKind, 'SlotStatusKind'),
            _status: RTTI_Element,
            start: t.string,
            _start: RTTI_Element,
            end: t.string,
            _end: RTTI_Element,
            overbooked: t.boolean,
            _overbooked: RTTI_Element,
            comment: t.string,
            _comment: RTTI_Element
        })

    ])
);


