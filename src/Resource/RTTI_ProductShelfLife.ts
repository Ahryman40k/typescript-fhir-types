
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           type: RTTI_CodeableConcept,
period: RTTI_Quantity
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: RTTI_Identifier,
specialPrecautionsForStorage: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_ProductShelfLife:any = t.intersection([mandatory, partial]);
        

export type IProductShelfLife = t.TypeOf<typeof RTTI_ProductShelfLife>;
        
        