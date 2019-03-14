
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';

export enum Encounter_LocationStatusKind {
                planned = 'planned',
active = 'active',
reserved = 'reserved',
completed = 'completed'
            }
const Encounter_LocationStatusKindKeys = t.keyof({
                [Encounter_LocationStatusKind.planned]: null,
[Encounter_LocationStatusKind.active]: null,
[Encounter_LocationStatusKind.reserved]: null,
[Encounter_LocationStatusKind.completed]: null
            });


        const mandatory = t.type({
           location: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
status: Encounter_LocationStatusKindKeys,
_status: RTTI_Element,
period: RTTI_Period
        });
        

        export var RTTI_Encounter_Location:any = t.intersection([mandatory, partial]);
        

export type IEncounter_Location = t.TypeOf<typeof RTTI_Encounter_Location>;
        
        