
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TestScript_Operation} from './RTTI_TestScript_Operation';
import {RTTI_TestScript_Assert} from './RTTI_TestScript_Assert';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
operation: RTTI_TestScript_Operation,
assert: RTTI_TestScript_Assert
        });
        

        export var RTTI_TestScript_Action:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Action = t.TypeOf<typeof RTTI_TestScript_Action>;
        
        