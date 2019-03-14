
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TestReport_Operation} from './RTTI_TestReport_Operation';




        const mandatory = t.type({
           operation: RTTI_TestReport_Operation
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_TestReport_Action2:any = t.intersection([mandatory, partial]);
        

export type ITestReport_Action2 = t.TypeOf<typeof RTTI_TestReport_Action2>;
        
        