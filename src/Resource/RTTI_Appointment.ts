
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Appointment_Participant} from './RTTI_Appointment_Participant';
import {RTTI_Period} from './RTTI_Period';

export enum AppointmentStatusKind {
                proposed = 'proposed',
pending = 'pending',
booked = 'booked',
arrived = 'arrived',
fulfilled = 'fulfilled',
cancelled = 'cancelled',
noshow = 'noshow',
enteredInError = 'enteredInError',
checkedIn = 'checkedIn'
            }
const AppointmentStatusKindKeys = t.keyof({
                [AppointmentStatusKind.proposed]: null,
[AppointmentStatusKind.pending]: null,
[AppointmentStatusKind.booked]: null,
[AppointmentStatusKind.arrived]: null,
[AppointmentStatusKind.fulfilled]: null,
[AppointmentStatusKind.cancelled]: null,
[AppointmentStatusKind.noshow]: null,
[AppointmentStatusKind.enteredInError]: null,
[AppointmentStatusKind.checkedIn]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
participant: t.array(RTTI_Appointment_Participant)
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
status: AppointmentStatusKindKeys,
_status: RTTI_Element,
serviceCategory: t.array(RTTI_CodeableConcept),
serviceType: t.array(RTTI_CodeableConcept),
specialty: t.array(RTTI_CodeableConcept),
appointmentType: RTTI_CodeableConcept,
reason: t.array(RTTI_CodeableConcept),
indication: t.array(RTTI_Reference),
priority: t.number,
_priority: RTTI_Element,
description: t.string,
_description: RTTI_Element,
supportingInformation: t.array(RTTI_Reference),
start: t.string,
_start: RTTI_Element,
end: t.string,
_end: RTTI_Element,
minutesDuration: t.number,
_minutesDuration: RTTI_Element,
slot: t.array(RTTI_Reference),
created: t.string,
_created: RTTI_Element,
comment: t.string,
_comment: RTTI_Element,
patientInstruction: t.string,
_patientInstruction: RTTI_Element,
basedOn: t.array(RTTI_Reference),
requestedPeriod: t.array(RTTI_Period)
        });
        

        export var RTTI_Appointment:any = t.intersection([mandatory, partial]);
        

export type IAppointment = t.TypeOf<typeof RTTI_Appointment>;
        
        