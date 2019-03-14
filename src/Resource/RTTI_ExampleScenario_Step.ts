
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ExampleScenario_Process} from './RTTI_ExampleScenario_Process';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ExampleScenario_Operation} from './RTTI_ExampleScenario_Operation';
import {RTTI_ExampleScenario_Alternative} from './RTTI_ExampleScenario_Alternative';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
process: t.array(RTTI_ExampleScenario_Process),
pause: t.boolean,
_pause: RTTI_Element,
operation: RTTI_ExampleScenario_Operation,
alternative: RTTI_ExampleScenario_Alternative
        });
        

        export var RTTI_ExampleScenario_Step:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario_Step = t.TypeOf<typeof RTTI_ExampleScenario_Step>;
        
        