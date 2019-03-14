
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ExampleScenario_ContainedInstance} from './RTTI_ExampleScenario_ContainedInstance';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
number: t.string,
_number: RTTI_Element,
type: t.string,
_type: RTTI_Element,
name: t.string,
_name: RTTI_Element,
initiator: t.string,
_initiator: RTTI_Element,
receiver: t.string,
_receiver: RTTI_Element,
description: t.string,
_description: RTTI_Element,
initiatorActive: t.boolean,
_initiatorActive: RTTI_Element,
receiverActive: t.boolean,
_receiverActive: RTTI_Element,
request: RTTI_ExampleScenario_ContainedInstance,
response: RTTI_ExampleScenario_ContainedInstance
        });
        

        export var RTTI_ExampleScenario_Operation:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario_Operation = t.TypeOf<typeof RTTI_ExampleScenario_Operation>;
        
        