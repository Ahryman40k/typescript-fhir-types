
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ChargeItemDefinition_Applicability} from './RTTI_ChargeItemDefinition_Applicability';
import {RTTI_ChargeItemDefinition_PriceComponent} from './RTTI_ChargeItemDefinition_PriceComponent';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
applicability: t.array(RTTI_ChargeItemDefinition_Applicability),
priceComponent: t.array(RTTI_ChargeItemDefinition_PriceComponent)
        });
        

        export var RTTI_ChargeItemDefinition_PropertyGroup:any = t.intersection([mandatory, partial]);
        

export type IChargeItemDefinition_PropertyGroup = t.TypeOf<typeof RTTI_ChargeItemDefinition_PropertyGroup>;
        
        