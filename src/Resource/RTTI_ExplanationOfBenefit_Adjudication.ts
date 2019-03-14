
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           category: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
reason: RTTI_CodeableConcept,
amount: RTTI_Money,
value: t.number,
_value: RTTI_Element
        });
        

        export var RTTI_ExplanationOfBenefit_Adjudication:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_Adjudication = t.TypeOf<typeof RTTI_ExplanationOfBenefit_Adjudication>;
        
        