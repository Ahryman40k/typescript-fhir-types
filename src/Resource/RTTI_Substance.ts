
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Substance_Instance} from './RTTI_Substance_Instance';
import {RTTI_Substance_Ingredient} from './RTTI_Substance_Ingredient';

export enum SubstanceStatusKind {
                active = 'active',
inactive = 'inactive',
enteredInError = 'enteredInError'
            }
const SubstanceStatusKindKeys = t.keyof({
                [SubstanceStatusKind.active]: null,
[SubstanceStatusKind.inactive]: null,
[SubstanceStatusKind.enteredInError]: null
            });


        const mandatory = t.type({
           resourceType: t.string,
code: RTTI_CodeableConcept
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
status: SubstanceStatusKindKeys,
_status: RTTI_Element,
category: t.array(RTTI_CodeableConcept),
description: t.string,
_description: RTTI_Element,
instance: t.array(RTTI_Substance_Instance),
ingredient: t.array(RTTI_Substance_Ingredient)
        });
        

        export var RTTI_Substance:any = t.intersection([mandatory, partial]);
        

export type ISubstance = t.TypeOf<typeof RTTI_Substance>;
        
        