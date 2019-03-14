
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';


export enum ElementDefinition_TypeAggregationKind {
                contained = 'contained',
referenced = 'referenced',
bundled = 'bundled'
            }
export enum ElementDefinition_TypeVersioningKind {
                either = 'either',
independent = 'independent',
specific = 'specific'
            }
const ElementDefinition_TypeAggregationKindKeys = t.keyof({
                [ElementDefinition_TypeAggregationKind.contained]: null,
[ElementDefinition_TypeAggregationKind.referenced]: null,
[ElementDefinition_TypeAggregationKind.bundled]: null
            });
const ElementDefinition_TypeVersioningKindKeys = t.keyof({
                [ElementDefinition_TypeVersioningKind.either]: null,
[ElementDefinition_TypeVersioningKind.independent]: null,
[ElementDefinition_TypeVersioningKind.specific]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
profile: t.array(t.string),
targetProfile: t.array(t.string),
aggregation: t.array(ElementDefinition_TypeAggregationKindKeys),
_aggregation: t.array(RTTI_Element),
versioning: ElementDefinition_TypeVersioningKindKeys,
_versioning: RTTI_Element
        });
        

        export var RTTI_ElementDefinition_Type:any = t.intersection([mandatory, partial]);
        

export type IElementDefinition_Type = t.TypeOf<typeof RTTI_ElementDefinition_Type>;
        
        