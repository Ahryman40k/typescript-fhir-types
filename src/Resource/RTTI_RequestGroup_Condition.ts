
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
kind: t.string,
_kind: RTTI_Element,
description: t.string,
_description: RTTI_Element,
language: t.string,
_language: RTTI_Element,
expression: t.string,
_expression: RTTI_Element
        });
        

        export var RTTI_RequestGroup_Condition:any = t.intersection([mandatory, partial]);
        

export type IRequestGroup_Condition = t.TypeOf<typeof RTTI_RequestGroup_Condition>;
        
        