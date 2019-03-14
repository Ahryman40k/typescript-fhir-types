
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

export enum PlanDefinition_ParticipantTypeKind {
                patient = 'patient',
practitioner = 'practitioner',
relatedPerson = 'relatedPerson',
device = 'device'
            }
const PlanDefinition_ParticipantTypeKindKeys = t.keyof({
                [PlanDefinition_ParticipantTypeKind.patient]: null,
[PlanDefinition_ParticipantTypeKind.practitioner]: null,
[PlanDefinition_ParticipantTypeKind.relatedPerson]: null,
[PlanDefinition_ParticipantTypeKind.device]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: PlanDefinition_ParticipantTypeKindKeys,
_type: RTTI_Element,
role: RTTI_CodeableConcept
        });
        

        export var RTTI_PlanDefinition_Participant:any = t.intersection([mandatory, partial]);
        

export type IPlanDefinition_Participant = t.TypeOf<typeof RTTI_PlanDefinition_Participant>;
        
        