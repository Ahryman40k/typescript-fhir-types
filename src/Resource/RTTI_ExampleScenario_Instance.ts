
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ExampleScenario_Version} from './RTTI_ExampleScenario_Version';
import {RTTI_ExampleScenario_ContainedInstance} from './RTTI_ExampleScenario_ContainedInstance';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
resourceId: t.string,
_resourceId: RTTI_Element,
resourceType: t.string,
_resourceType: RTTI_Element,
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element,
version: t.array(RTTI_ExampleScenario_Version),
containedInstance: t.array(RTTI_ExampleScenario_ContainedInstance)
        });
        

        export var RTTI_ExampleScenario_Instance:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario_Instance = t.TypeOf<typeof RTTI_ExampleScenario_Instance>;
        
        