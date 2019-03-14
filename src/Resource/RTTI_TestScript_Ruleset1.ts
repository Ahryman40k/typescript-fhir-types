
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_TestScript_Rule3} from './RTTI_TestScript_Rule3';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
rulesetId: t.string,
_rulesetId: RTTI_Element,
rule: t.array(RTTI_TestScript_Rule3)
        });
        

        export var RTTI_TestScript_Ruleset1:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Ruleset1 = t.TypeOf<typeof RTTI_TestScript_Ruleset1>;
        
        