
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Reference} from './RTTI_Reference';

export enum ResearchSubjectStatusKind {
                candidate = 'candidate',
eligible = 'eligible',
followUp = 'followUp',
ineligible = 'ineligible',
notRegistered = 'notRegistered',
offStudy = 'offStudy',
onStudy = 'onStudy',
onStudyIntervention = 'onStudyIntervention',
onStudyObservation = 'onStudyObservation',
pendingOnStudy = 'pendingOnStudy',
potentialCandidate = 'potentialCandidate',
screening = 'screening',
withdrawn = 'withdrawn'
            }
const ResearchSubjectStatusKindKeys = t.keyof({
                [ResearchSubjectStatusKind.candidate]: null,
[ResearchSubjectStatusKind.eligible]: null,
[ResearchSubjectStatusKind.followUp]: null,
[ResearchSubjectStatusKind.ineligible]: null,
[ResearchSubjectStatusKind.notRegistered]: null,
[ResearchSubjectStatusKind.offStudy]: null,
[ResearchSubjectStatusKind.onStudy]: null,
[ResearchSubjectStatusKind.onStudyIntervention]: null,
[ResearchSubjectStatusKind.onStudyObservation]: null,
[ResearchSubjectStatusKind.pendingOnStudy]: null,
[ResearchSubjectStatusKind.potentialCandidate]: null,
[ResearchSubjectStatusKind.screening]: null,
[ResearchSubjectStatusKind.withdrawn]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
study: RTTI_Reference,
individual: RTTI_Reference
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
status: ResearchSubjectStatusKindKeys,
_status: RTTI_Element,
period: RTTI_Period,
assignedArm: t.string,
_assignedArm: RTTI_Element,
actualArm: t.string,
_actualArm: RTTI_Element,
consent: RTTI_Reference
        });
        

        export var RTTI_ResearchSubject:any = t.intersection([mandatory, partial]);
        

export type IResearchSubject = t.TypeOf<typeof RTTI_ResearchSubject>;
        
        