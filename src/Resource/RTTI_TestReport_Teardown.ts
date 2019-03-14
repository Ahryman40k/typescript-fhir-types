
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TestReport_Action2} from './RTTI_TestReport_Action2';




        const mandatory = t.type({
           action: t.array(RTTI_TestReport_Action2)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_TestReport_Teardown:any = t.intersection([mandatory, partial]);
        

export type ITestReport_Teardown = t.TypeOf<typeof RTTI_TestReport_Teardown>;
        
        