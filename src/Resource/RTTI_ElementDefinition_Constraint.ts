
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ElementDefinition_ConstraintSeverityKind {
                error = 'error',
warning = 'warning'
            }
const ElementDefinition_ConstraintSeverityKindKeys = t.keyof({
                [ElementDefinition_ConstraintSeverityKind.error]: null,
[ElementDefinition_ConstraintSeverityKind.warning]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
key: t.string,
_key: RTTI_Element,
requirements: t.string,
_requirements: RTTI_Element,
severity: ElementDefinition_ConstraintSeverityKindKeys,
_severity: RTTI_Element,
human: t.string,
_human: RTTI_Element,
expression: t.string,
_expression: RTTI_Element,
xpath: t.string,
_xpath: RTTI_Element,
source: t.string
        });
        

        export var RTTI_ElementDefinition_Constraint:any = t.intersection([mandatory, partial]);
        

export type IElementDefinition_Constraint = t.TypeOf<typeof RTTI_ElementDefinition_Constraint>;
        
        