
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_TestScript_Rule1} from './RTTI_TestScript_Rule1';




        const mandatory = t.type({
           resource: RTTI_Reference,
rule: t.array(RTTI_TestScript_Rule1)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_TestScript_Ruleset:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Ruleset = t.TypeOf<typeof RTTI_TestScript_Ruleset>;
        
        