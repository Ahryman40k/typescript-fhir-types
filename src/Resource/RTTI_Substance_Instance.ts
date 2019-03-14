
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: RTTI_Identifier,
expiry: t.string,
_expiry: RTTI_Element,
quantity: RTTI_Quantity
        });
        

        export var RTTI_Substance_Instance:any = t.intersection([mandatory, partial]);
        

export type ISubstance_Instance = t.TypeOf<typeof RTTI_Substance_Instance>;
        
        