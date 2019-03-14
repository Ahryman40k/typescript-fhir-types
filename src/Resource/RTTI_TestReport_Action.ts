
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TestReport_Operation} from './RTTI_TestReport_Operation';
import {RTTI_TestReport_Assert} from './RTTI_TestReport_Assert';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
operation: RTTI_TestReport_Operation,
assert: RTTI_TestReport_Assert
        });
        

        export var RTTI_TestReport_Action:any = t.intersection([mandatory, partial]);
        

export type ITestReport_Action = t.TypeOf<typeof RTTI_TestReport_Action>;
        
        