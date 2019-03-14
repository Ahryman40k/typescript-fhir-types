
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';






        const mandatory = t.type({
           capabilities: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
required: t.boolean,
_required: RTTI_Element,
validated: t.boolean,
_validated: RTTI_Element,
description: t.string,
_description: RTTI_Element,
origin: t.array(t.number),
_origin: t.array(RTTI_Element),
destination: t.number,
_destination: RTTI_Element,
link: t.array(t.string),
_link: t.array(RTTI_Element)
        });
        

        export var RTTI_TestScript_Capability:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Capability = t.TypeOf<typeof RTTI_TestScript_Capability>;
        
        