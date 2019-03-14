
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TestReport_Action} from './RTTI_TestReport_Action';




        const mandatory = t.type({
           action: t.array(RTTI_TestReport_Action)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_TestReport_Setup:any = t.intersection([mandatory, partial]);
        

export type ITestReport_Setup = t.TypeOf<typeof RTTI_TestReport_Setup>;
        
        