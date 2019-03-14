
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
lowLimit: RTTI_Quantity,
highLimit: RTTI_Quantity
        });
        

        export var RTTI_SubstanceAmount_ReferenceRange:any = t.intersection([mandatory, partial]);
        

export type ISubstanceAmount_ReferenceRange = t.TypeOf<typeof RTTI_SubstanceAmount_ReferenceRange>;
        
        