
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_TestScript_Param} from './RTTI_TestScript_Param';




        const mandatory = t.type({
           resource: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
param: t.array(RTTI_TestScript_Param)
        });
        

        export var RTTI_TestScript_Rule:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Rule = t.TypeOf<typeof RTTI_TestScript_Rule>;
        
        