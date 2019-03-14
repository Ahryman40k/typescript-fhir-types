
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';

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


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
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
        });
        

        export var RTTI_Appointment_Participant:any = t.intersection([mandatory, partial]);
        

export type IAppointment_Participant = t.TypeOf<typeof RTTI_Appointment_Participant>;
        
        