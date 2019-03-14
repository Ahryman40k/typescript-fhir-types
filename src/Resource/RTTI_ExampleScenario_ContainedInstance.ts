
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
resourceId: t.string,
_resourceId: RTTI_Element,
versionId: t.string,
_versionId: RTTI_Element
        });
        

        export var RTTI_ExampleScenario_ContainedInstance:any = t.intersection([mandatory, partial]);
        

export type IExampleScenario_ContainedInstance = t.TypeOf<typeof RTTI_ExampleScenario_ContainedInstance>;
        
        