
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Signature} from './RTTI_Signature';




        const mandatory = t.type({
           type: RTTI_Coding,
party: RTTI_Reference,
signature: t.array(RTTI_Signature)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_Contract_Signer:any = t.intersection([mandatory, partial]);
        

export type IContract_Signer = t.TypeOf<typeof RTTI_Contract_Signer>;
        
        