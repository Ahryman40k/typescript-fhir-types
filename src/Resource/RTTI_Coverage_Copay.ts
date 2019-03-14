
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           value: RTTI_Quantity
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_Coding
        });
        

        export var RTTI_Coverage_Copay:any = t.intersection([mandatory, partial]);
        

export type ICoverage_Copay = t.TypeOf<typeof RTTI_Coverage_Copay>;
        
        