
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';

import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           classification: RTTI_Coding
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
number: t.array(t.number),
_number: t.array(RTTI_Element),
category: t.array(RTTI_Coding),
control: t.array(RTTI_Coding)
        });
        

        export var RTTI_Contract_SecurityLabel:any = t.intersection([mandatory, partial]);
        

export type IContract_SecurityLabel = t.TypeOf<typeof RTTI_Contract_SecurityLabel>;
        
        