
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           coverage: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
priority: t.number,
_priority: RTTI_Element
        });
        

        export var RTTI_Account_Coverage:any = t.intersection([mandatory, partial]);
        

export type IAccount_Coverage = t.TypeOf<typeof RTTI_Account_Coverage>;
        
        