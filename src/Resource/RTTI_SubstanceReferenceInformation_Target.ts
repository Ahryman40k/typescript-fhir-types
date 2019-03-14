
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
target: RTTI_Identifier,
type: RTTI_CodeableConcept,
interaction: RTTI_CodeableConcept,
organism: RTTI_CodeableConcept,
organismType: RTTI_CodeableConcept,
source: t.array(RTTI_Reference),
amountQuantity: RTTI_Quantity,
amountRange: RTTI_Range,
amountString: t.string,
_amountString: RTTI_Element,
amountType: RTTI_CodeableConcept
        });
        

        export var RTTI_SubstanceReferenceInformation_Target:any = t.intersection([mandatory, partial]);
        

export type ISubstanceReferenceInformation_Target = t.TypeOf<typeof RTTI_SubstanceReferenceInformation_Target>;
        
        