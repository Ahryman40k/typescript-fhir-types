
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TestScript_Link} from './RTTI_TestScript_Link';
import {RTTI_TestScript_Capability} from './RTTI_TestScript_Capability';




        const mandatory = t.type({
           capability: t.array(RTTI_TestScript_Capability)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
link: t.array(RTTI_TestScript_Link)
        });
        

        export var RTTI_TestScript_Metadata:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Metadata = t.TypeOf<typeof RTTI_TestScript_Metadata>;
        
        