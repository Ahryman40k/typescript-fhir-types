
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Range} from './RTTI_Range';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
actionId: t.string,
_actionId: RTTI_Element,
relationship: t.string,
_relationship: RTTI_Element,
offsetDuration: RTTI_Duration,
offsetRange: RTTI_Range
        });
        

        export var RTTI_RequestGroup_RelatedAction:any = t.intersection([mandatory, partial]);
        

export type IRequestGroup_RelatedAction = t.TypeOf<typeof RTTI_RequestGroup_RelatedAction>;
        
        