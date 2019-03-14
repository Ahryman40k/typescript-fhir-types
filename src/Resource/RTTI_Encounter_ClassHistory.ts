
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           class: RTTI_Coding,
period: RTTI_Period
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_Encounter_ClassHistory:any = t.intersection([mandatory, partial]);
        

export type IEncounter_ClassHistory = t.TypeOf<typeof RTTI_Encounter_ClassHistory>;
        
        