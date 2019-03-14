
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
autocreate: t.boolean,
_autocreate: RTTI_Element,
autodelete: t.boolean,
_autodelete: RTTI_Element,
resource: RTTI_Reference
        });
        

        export var RTTI_TestScript_Fixture:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Fixture = t.TypeOf<typeof RTTI_TestScript_Fixture>;
        
        