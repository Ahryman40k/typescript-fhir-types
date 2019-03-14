
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           entity: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
period: RTTI_Period,
inactive: t.boolean,
_inactive: RTTI_Element
        });
        

        export var RTTI_Group_Member:any = t.intersection([mandatory, partial]);
        

export type IGroup_Member = t.TypeOf<typeof RTTI_Group_Member>;
        
        