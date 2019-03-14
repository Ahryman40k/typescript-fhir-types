
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';

export enum EpisodeOfCare_StatusHistoryStatusKind {
                planned = 'planned',
waitlist = 'waitlist',
active = 'active',
onhold = 'onhold',
finished = 'finished',
cancelled = 'cancelled',
enteredInError = 'enteredInError'
            }
const EpisodeOfCare_StatusHistoryStatusKindKeys = t.keyof({
                [EpisodeOfCare_StatusHistoryStatusKind.planned]: null,
[EpisodeOfCare_StatusHistoryStatusKind.waitlist]: null,
[EpisodeOfCare_StatusHistoryStatusKind.active]: null,
[EpisodeOfCare_StatusHistoryStatusKind.onhold]: null,
[EpisodeOfCare_StatusHistoryStatusKind.finished]: null,
[EpisodeOfCare_StatusHistoryStatusKind.cancelled]: null,
[EpisodeOfCare_StatusHistoryStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           period: RTTI_Period
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
status: EpisodeOfCare_StatusHistoryStatusKindKeys,
_status: RTTI_Element
        });
        

        export var RTTI_EpisodeOfCare_StatusHistory:any = t.intersection([mandatory, partial]);
        

export type IEpisodeOfCare_StatusHistory = t.TypeOf<typeof RTTI_EpisodeOfCare_StatusHistory>;
        
        