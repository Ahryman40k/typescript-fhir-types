
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TestScript_Action} from './RTTI_TestScript_Action';




        const mandatory = t.type({
           action: t.array(RTTI_TestScript_Action)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_TestScript_Setup:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Setup = t.TypeOf<typeof RTTI_TestScript_Setup>;
        
        