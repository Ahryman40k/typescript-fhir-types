
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';


import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_NutritionOrder_OralDiet} from './RTTI_NutritionOrder_OralDiet';
import {RTTI_NutritionOrder_Supplement} from './RTTI_NutritionOrder_Supplement';
import {RTTI_NutritionOrder_EnteralFormula} from './RTTI_NutritionOrder_EnteralFormula';
import {RTTI_Annotation} from './RTTI_Annotation';




        const mandatory = t.type({
           resourceType: t.string,
patient: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
instantiatesCanonical: t.array(t.string),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
instantiates: t.array(t.string),
_instantiates: t.array(RTTI_Element),
status: t.string,
_status: RTTI_Element,
intent: t.string,
_intent: RTTI_Element,
context: RTTI_Reference,
dateTime: t.string,
_dateTime: RTTI_Element,
orderer: RTTI_Reference,
allergyIntolerance: t.array(RTTI_Reference),
foodPreferenceModifier: t.array(RTTI_CodeableConcept),
excludeFoodModifier: t.array(RTTI_CodeableConcept),
oralDiet: RTTI_NutritionOrder_OralDiet,
supplement: t.array(RTTI_NutritionOrder_Supplement),
enteralFormula: RTTI_NutritionOrder_EnteralFormula,
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_NutritionOrder:any = t.intersection([mandatory, partial]);
        

export type INutritionOrder = t.TypeOf<typeof RTTI_NutritionOrder>;
        
        