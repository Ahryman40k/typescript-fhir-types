
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ExplanationOfBenefit_Financial} from './RTTI_ExplanationOfBenefit_Financial';




        const mandatory = t.type({
           category: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
excluded: t.boolean,
_excluded: RTTI_Element,
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element,
network: RTTI_CodeableConcept,
unit: RTTI_CodeableConcept,
term: RTTI_CodeableConcept,
financial: t.array(RTTI_ExplanationOfBenefit_Financial)
        });
        

        export var RTTI_ExplanationOfBenefit_BenefitBalance:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_BenefitBalance = t.TypeOf<typeof RTTI_ExplanationOfBenefit_BenefitBalance>;
        
        