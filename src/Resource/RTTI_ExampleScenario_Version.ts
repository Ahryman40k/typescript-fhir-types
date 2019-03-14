
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
versionId: t.string,
_versionId: RTTI_Element,
description: t.string,
_description: RTTI_Element
        });
        

        export var RTTI_ExampleScenario_Version:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario_Version = t.TypeOf<typeof RTTI_ExampleScenario_Version>;
        
        