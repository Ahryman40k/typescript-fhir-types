
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
valueCodeableConcept: RTTI_CodeableConcept,
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element,
valueQuantity: RTTI_Quantity,
valueRange: RTTI_Range,
exclude: t.boolean,
_exclude: RTTI_Element,
period: RTTI_Period
        });
        

        export var RTTI_Group_Characteristic:any = t.intersection([mandatory, partial]);
        

export type IGroup_Characteristic = t.TypeOf<typeof RTTI_Group_Characteristic>;
        
        