
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum AllergyIntolerance_ReactionSeverityKind {
                mild = 'mild',
moderate = 'moderate',
severe = 'severe'
            }
const AllergyIntolerance_ReactionSeverityKindKeys = t.keyof({
                [AllergyIntolerance_ReactionSeverityKind.mild]: null,
[AllergyIntolerance_ReactionSeverityKind.moderate]: null,
[AllergyIntolerance_ReactionSeverityKind.severe]: null
            });


        const mandatory = t.type({
           manifestation: t.array(RTTI_CodeableConcept)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
substance: RTTI_CodeableConcept,
description: t.string,
_description: RTTI_Element,
onset: t.string,
_onset: RTTI_Element,
severity: AllergyIntolerance_ReactionSeverityKindKeys,
_severity: RTTI_Element,
exposureRoute: RTTI_CodeableConcept,
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_AllergyIntolerance_Reaction:any = t.intersection([mandatory, partial]);
        

export type IAllergyIntolerance_Reaction = t.TypeOf<typeof RTTI_AllergyIntolerance_Reaction>;
        
        