
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_EpisodeOfCare_StatusHistory} from './RTTI_EpisodeOfCare_StatusHistory';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_EpisodeOfCare_Diagnosis} from './RTTI_EpisodeOfCare_Diagnosis';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';

export enum EpisodeOfCareStatusKind {
                planned = 'planned',
waitlist = 'waitlist',
active = 'active',
onhold = 'onhold',
finished = 'finished',
cancelled = 'cancelled',
enteredInError = 'enteredInError'
            }
const EpisodeOfCareStatusKindKeys = t.keyof({
                [EpisodeOfCareStatusKind.planned]: null,
[EpisodeOfCareStatusKind.waitlist]: null,
[EpisodeOfCareStatusKind.active]: null,
[EpisodeOfCareStatusKind.onhold]: null,
[EpisodeOfCareStatusKind.finished]: null,
[EpisodeOfCareStatusKind.cancelled]: null,
[EpisodeOfCareStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
patient: RTTI_Reference
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
status: EpisodeOfCareStatusKindKeys,
_status: RTTI_Element,
statusHistory: t.array(RTTI_EpisodeOfCare_StatusHistory),
type: t.array(RTTI_CodeableConcept),
diagnosis: t.array(RTTI_EpisodeOfCare_Diagnosis),
managingOrganization: RTTI_Reference,
period: RTTI_Period,
referralRequest: t.array(RTTI_Reference),
careManager: RTTI_Reference,
team: t.array(RTTI_Reference),
account: t.array(RTTI_Reference)
        });
        

        export var RTTI_EpisodeOfCare:any = t.intersection([mandatory, partial]);
        

export type IEpisodeOfCare = t.TypeOf<typeof RTTI_EpisodeOfCare>;
        
        