
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_MedicinalProductIngredient_SpecifiedSubstance} from './RTTI_MedicinalProductIngredient_SpecifiedSubstance';
import {RTTI_MedicinalProductIngredient_Substance} from './RTTI_MedicinalProductIngredient_Substance';




        const mandatory = t.type({
           resourceType: t.string,
role: RTTI_CodeableConcept
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
identifier: RTTI_Identifier,
allergenicIndicator: t.boolean,
_allergenicIndicator: RTTI_Element,
manufacturer: t.array(RTTI_Reference),
specifiedSubstance: t.array(RTTI_MedicinalProductIngredient_SpecifiedSubstance),
substance: RTTI_MedicinalProductIngredient_Substance
        });
        

        export var RTTI_MedicinalProductIngredient:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductIngredient = t.TypeOf<typeof RTTI_MedicinalProductIngredient>;
        
        