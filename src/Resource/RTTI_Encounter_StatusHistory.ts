
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';

export enum Encounter_StatusHistoryStatusKind {
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
const Encounter_StatusHistoryStatusKindKeys = t.keyof({
                [Encounter_StatusHistoryStatusKind.planned]: null,
[Encounter_StatusHistoryStatusKind.arrived]: null,
[Encounter_StatusHistoryStatusKind.triaged]: null,
[Encounter_StatusHistoryStatusKind.inProgress]: null,
[Encounter_StatusHistoryStatusKind.onleave]: null,
[Encounter_StatusHistoryStatusKind.finished]: null,
[Encounter_StatusHistoryStatusKind.cancelled]: null,
[Encounter_StatusHistoryStatusKind.enteredInError]: null,
[Encounter_StatusHistoryStatusKind.unknown]: null
            });


        const mandatory = t.type({
           period: RTTI_Period
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
status: Encounter_StatusHistoryStatusKindKeys,
_status: RTTI_Element
        });
        

        export var RTTI_Encounter_StatusHistory:any = t.intersection([mandatory, partial]);
        

export type IEncounter_StatusHistory = t.TypeOf<typeof RTTI_Encounter_StatusHistory>;
        
        