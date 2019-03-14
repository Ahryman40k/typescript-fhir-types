
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_TestScript_Param1} from './RTTI_TestScript_Param1';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
ruleId: t.string,
_ruleId: RTTI_Element,
param: t.array(RTTI_TestScript_Param1)
        });
        

        export var RTTI_TestScript_Rule1:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Rule1 = t.TypeOf<typeof RTTI_TestScript_Rule1>;
        
        