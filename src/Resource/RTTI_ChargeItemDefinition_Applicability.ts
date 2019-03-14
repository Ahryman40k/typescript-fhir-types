
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
description: t.string,
_description: RTTI_Element,
language: t.string,
_language: RTTI_Element,
expression: t.string,
_expression: RTTI_Element
        });
        

        export var RTTI_ChargeItemDefinition_Applicability:any = t.intersection([mandatory, partial]);
        

export type IChargeItemDefinition_Applicability = t.TypeOf<typeof RTTI_ChargeItemDefinition_Applicability>;
        
        