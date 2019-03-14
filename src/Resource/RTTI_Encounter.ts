
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Encounter_StatusHistory} from './RTTI_Encounter_StatusHistory';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Encounter_ClassHistory} from './RTTI_Encounter_ClassHistory';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Encounter_Participant} from './RTTI_Encounter_Participant';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Encounter_Diagnosis} from './RTTI_Encounter_Diagnosis';
import {RTTI_Encounter_Hospitalization} from './RTTI_Encounter_Hospitalization';
import {RTTI_Encounter_Location} from './RTTI_Encounter_Location';

export enum EncounterStatusKind {
                planned = 'planned',
arrived = 'arrived',
triaged = 'triaged',
inProgress = 'inProgress',
onleave = 'onleave',
finished = 'finished',
cancelled = 'cancelled',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const EncounterStatusKindKeys = t.keyof({
                [EncounterStatusKind.planned]: null,
[EncounterStatusKind.arrived]: null,
[EncounterStatusKind.triaged]: null,
[EncounterStatusKind.inProgress]: null,
[EncounterStatusKind.onleave]: null,
[EncounterStatusKind.finished]: null,
[EncounterStatusKind.cancelled]: null,
[EncounterStatusKind.enteredInError]: null,
[EncounterStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
class: RTTI_Coding
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
status: EncounterStatusKindKeys,
_status: RTTI_Element,
statusHistory: t.array(RTTI_Encounter_StatusHistory),
classHistory: t.array(RTTI_Encounter_ClassHistory),
type: t.array(RTTI_CodeableConcept),
serviceType: RTTI_CodeableConcept,
priority: RTTI_CodeableConcept,
subject: RTTI_Reference,
episodeOfCare: t.array(RTTI_Reference),
basedOn: t.array(RTTI_Reference),
participant: t.array(RTTI_Encounter_Participant),
appointment: RTTI_Reference,
period: RTTI_Period,
length: RTTI_Duration,
reason: t.array(RTTI_CodeableConcept),
diagnosis: t.array(RTTI_Encounter_Diagnosis),
account: t.array(RTTI_Reference),
hospitalization: RTTI_Encounter_Hospitalization,
location: t.array(RTTI_Encounter_Location),
serviceProvider: RTTI_Reference,
partOf: RTTI_Reference
        });
        

        export var RTTI_Encounter:any = t.intersection([mandatory, partial]);
        

export type IEncounter = t.TypeOf<typeof RTTI_Encounter>;
        
        