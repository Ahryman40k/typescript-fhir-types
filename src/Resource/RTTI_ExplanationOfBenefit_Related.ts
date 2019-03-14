
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Identifier} from './RTTI_Identifier';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
claim: RTTI_Reference,
relationship: RTTI_CodeableConcept,
reference: RTTI_Identifier
        });
        

        export var RTTI_ExplanationOfBenefit_Related:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_Related = t.TypeOf<typeof RTTI_ExplanationOfBenefit_Related>;
        
        