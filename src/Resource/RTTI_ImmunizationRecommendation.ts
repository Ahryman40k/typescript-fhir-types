
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ImmunizationRecommendation_Recommendation} from './RTTI_ImmunizationRecommendation_Recommendation';




        const mandatory = t.type({
           resourceType: t.string,
patient: RTTI_Reference,
recommendation: t.array(RTTI_ImmunizationRecommendation_Recommendation)
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
date: t.string,
_date: RTTI_Element,
authority: RTTI_Reference
        });
        

        export var RTTI_ImmunizationRecommendation:any = t.intersection([mandatory, partial]);
        

export type IImmunizationRecommendation = t.TypeOf<typeof RTTI_ImmunizationRecommendation>;
        
        