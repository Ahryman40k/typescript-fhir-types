
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ExampleScenario_Step} from './RTTI_ExampleScenario_Step';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
title: t.string,
_title: RTTI_Element,
description: t.string,
_description: RTTI_Element,
preConditions: t.string,
_preConditions: RTTI_Element,
postConditions: t.string,
_postConditions: RTTI_Element,
step: t.array(RTTI_ExampleScenario_Step)
        });
        

        export var RTTI_ExampleScenario_Process:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario_Process = t.TypeOf<typeof RTTI_ExampleScenario_Process>;
        
        