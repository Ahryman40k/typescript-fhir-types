
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ExampleScenario_Option} from './RTTI_ExampleScenario_Option';




        const mandatory = t.type({
           option: t.array(RTTI_ExampleScenario_Option)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element
        });
        

        export var RTTI_ExampleScenario_Alternative:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario_Alternative = t.TypeOf<typeof RTTI_ExampleScenario_Alternative>;
        
        