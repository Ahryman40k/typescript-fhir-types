
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
repetitions: t.number,
_repetitions: RTTI_Element,
period: RTTI_Period,
recipient: t.array(RTTI_Reference)
        });
        

        export var RTTI_Task_Restriction:any = t.intersection([mandatory, partial]);
        

export type ITask_Restriction = t.TypeOf<typeof RTTI_Task_Restriction>;
        
        