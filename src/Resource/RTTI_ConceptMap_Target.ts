
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ConceptMap_DependsOn} from './RTTI_ConceptMap_DependsOn';

export enum ConceptMap_TargetEquivalenceKind {
                relatedto = 'relatedto',
equivalent = 'equivalent',
equal = 'equal',
wider = 'wider',
subsumes = 'subsumes',
narrower = 'narrower',
specializes = 'specializes',
inexact = 'inexact',
unmatched = 'unmatched',
disjoint = 'disjoint'
            }
const ConceptMap_TargetEquivalenceKindKeys = t.keyof({
                [ConceptMap_TargetEquivalenceKind.relatedto]: null,
[ConceptMap_TargetEquivalenceKind.equivalent]: null,
[ConceptMap_TargetEquivalenceKind.equal]: null,
[ConceptMap_TargetEquivalenceKind.wider]: null,
[ConceptMap_TargetEquivalenceKind.subsumes]: null,
[ConceptMap_TargetEquivalenceKind.narrower]: null,
[ConceptMap_TargetEquivalenceKind.specializes]: null,
[ConceptMap_TargetEquivalenceKind.inexact]: null,
[ConceptMap_TargetEquivalenceKind.unmatched]: null,
[ConceptMap_TargetEquivalenceKind.disjoint]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
display: t.string,
_display: RTTI_Element,
equivalence: ConceptMap_TargetEquivalenceKindKeys,
_equivalence: RTTI_Element,
comment: t.string,
_comment: RTTI_Element,
dependsOn: t.array(RTTI_ConceptMap_DependsOn),
product: t.array(RTTI_ConceptMap_DependsOn)
        });
        

        export var RTTI_ConceptMap_Target:any = t.intersection([mandatory, partial]);
        

export type IConceptMap_Target = t.TypeOf<typeof RTTI_ConceptMap_Target>;
        
        