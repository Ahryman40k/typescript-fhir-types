
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
substanceReference: RTTI_Reference,
substanceCodeableConcept: RTTI_CodeableConcept,
relationship: RTTI_CodeableConcept,
interaction: RTTI_CodeableConcept,
isDefining: t.boolean,
_isDefining: RTTI_Element,
amountQuantity: RTTI_Quantity,
amountRange: RTTI_Range,
amountString: t.string,
_amountString: RTTI_Element,
amountType: RTTI_CodeableConcept,
amountText: t.string,
_amountText: RTTI_Element,
source: t.array(RTTI_Reference)
        });
        

        export var RTTI_SubstanceReferenceInformation_Relationship:any = t.intersection([mandatory, partial]);
        

export type ISubstanceReferenceInformation_Relationship = t.TypeOf<typeof RTTI_SubstanceReferenceInformation_Relationship>;
        
        