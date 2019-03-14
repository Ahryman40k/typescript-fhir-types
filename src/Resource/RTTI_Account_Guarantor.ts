
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           party: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
onHold: t.boolean,
_onHold: RTTI_Element,
period: RTTI_Period
        });
        

        export var RTTI_Account_Guarantor:any = t.intersection([mandatory, partial]);
        

export type IAccount_Guarantor = t.TypeOf<typeof RTTI_Account_Guarantor>;
        
        