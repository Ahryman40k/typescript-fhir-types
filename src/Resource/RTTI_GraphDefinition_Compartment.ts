
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum GraphDefinition_CompartmentUseKind {
                condition = 'condition',
requirement = 'requirement'
            }
export enum GraphDefinition_CompartmentRuleKind {
                identical = 'identical',
matching = 'matching',
different = 'different',
custom = 'custom'
            }
const GraphDefinition_CompartmentUseKindKeys = t.keyof({
                [GraphDefinition_CompartmentUseKind.condition]: null,
[GraphDefinition_CompartmentUseKind.requirement]: null
            });
const GraphDefinition_CompartmentRuleKindKeys = t.keyof({
                [GraphDefinition_CompartmentRuleKind.identical]: null,
[GraphDefinition_CompartmentRuleKind.matching]: null,
[GraphDefinition_CompartmentRuleKind.different]: null,
[GraphDefinition_CompartmentRuleKind.custom]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
use: GraphDefinition_CompartmentUseKindKeys,
_use: RTTI_Element,
code: t.string,
_code: RTTI_Element,
rule: GraphDefinition_CompartmentRuleKindKeys,
_rule: RTTI_Element,
expression: t.string,
_expression: RTTI_Element,
description: t.string,
_description: RTTI_Element
        });
        

        export var RTTI_GraphDefinition_Compartment:any = t.intersection([mandatory, partial]);
        

export type IGraphDefinition_Compartment = t.TypeOf<typeof RTTI_GraphDefinition_Compartment>;
        
        