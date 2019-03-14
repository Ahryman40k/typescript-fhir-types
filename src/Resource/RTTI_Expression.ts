
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ExpressionLanguageKind {
                textCql = 'textCql',
textFhirpath = 'textFhirpath',
applicationXFhirQuery = 'applicationXFhirQuery'
            }
const ExpressionLanguageKindKeys = t.keyof({
                [ExpressionLanguageKind.textCql]: null,
[ExpressionLanguageKind.textFhirpath]: null,
[ExpressionLanguageKind.applicationXFhirQuery]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
description: t.string,
_description: RTTI_Element,
name: t.string,
_name: RTTI_Element,
language: ExpressionLanguageKindKeys,
_language: RTTI_Element,
expression: t.string,
_expression: RTTI_Element,
reference: t.string,
_reference: RTTI_Element
        });
        

        export var RTTI_Expression:any = t.intersection([mandatory, partial]);
        

export type IExpression = t.TypeOf<typeof RTTI_Expression>;
        
        