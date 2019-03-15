
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Period, IPeriod } from './RTTI_Period';

export enum Appointment_ParticipantRequiredKind {
    required = 'required',
    optional = 'optional',
    informationOnly = 'informationOnly'
}
export enum Appointment_ParticipantStatusKind {
    accepted = 'accepted',
    declined = 'declined',
    tentative = 'tentative',
    needsAction = 'needsAction'
}
const Appointment_ParticipantRequiredKindKeys = t.keyof({
    [Appointment_ParticipantRequiredKind.required]: null,
    [Appointment_ParticipantRequiredKind.optional]: null,
    [Appointment_ParticipantRequiredKind.informationOnly]: null
});
const Appointment_ParticipantStatusKindKeys = t.keyof({
    [Appointment_ParticipantStatusKind.accepted]: null,
    [Appointment_ParticipantStatusKind.declined]: null,
    [Appointment_ParticipantStatusKind.tentative]: null,
    [Appointment_ParticipantStatusKind.needsAction]: null
});


export interface IAppointment_Participant {


    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;


    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * Role of participant in the appointment.
     */
    type?: ICodeableConcept[];


    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: IReference;


    /**
     * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */
    required?: Appointment_ParticipantRequiredKind;


    /**
     * Extensions for required
     */
    _required?: IElement;


    /**
     * Participation status of the actor.
     */
    status?: Appointment_ParticipantStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * Participation period of the actor.
     */
    period?: IPeriod;

}



export const RTTI_Appointment_Participant: t.Type<IAppointment_Participant> = t.recursion('IAppointment_Participant', () =>

    t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        type: t.array(RTTI_CodeableConcept),
        actor: RTTI_Reference,
        required: Appointment_ParticipantRequiredKindKeys,
        _required: RTTI_Element,
        status: Appointment_ParticipantStatusKindKeys,
        _status: RTTI_Element,
        period: RTTI_Period
    })

);


