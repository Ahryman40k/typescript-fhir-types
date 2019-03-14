
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TestScript_Operation} from './RTTI_TestScript_Operation';




        const mandatory = t.type({
           operation: RTTI_TestScript_Operation
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_TestScript_Action2:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Action2 = t.TypeOf<typeof RTTI_TestScript_Action2>;
        
        