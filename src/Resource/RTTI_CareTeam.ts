
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_CareTeam_Participant} from './RTTI_CareTeam_Participant';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum CareTeamStatusKind {
                proposed = 'proposed',
active = 'active',
suspended = 'suspended',
inactive = 'inactive',
enteredInError = 'enteredInError'
            }
const CareTeamStatusKindKeys = t.keyof({
                [CareTeamStatusKind.proposed]: null,
[CareTeamStatusKind.active]: null,
[CareTeamStatusKind.suspended]: null,
[CareTeamStatusKind.inactive]: null,
[CareTeamStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string
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
status: CareTeamStatusKindKeys,
_status: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
name: t.string,
_name: RTTI_Element,
subject: RTTI_Reference,
context: RTTI_Reference,
period: RTTI_Period,
participant: t.array(RTTI_CareTeam_Participant),
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
managingOrganization: t.array(RTTI_Reference),
telecom: t.array(RTTI_ContactPoint),
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_CareTeam:any = t.intersection([mandatory, partial]);
        

export type ICareTeam = t.TypeOf<typeof RTTI_CareTeam>;
        
        