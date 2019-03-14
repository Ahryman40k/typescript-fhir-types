
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ElementDefinition_Discriminator} from './RTTI_ElementDefinition_Discriminator';
import {RTTI_Element} from './RTTI_Element';

export enum ElementDefinition_SlicingRulesKind {
                closed = 'closed',
open = 'open',
openAtEnd = 'openAtEnd'
            }
const ElementDefinition_SlicingRulesKindKeys = t.keyof({
                [ElementDefinition_SlicingRulesKind.closed]: null,
[ElementDefinition_SlicingRulesKind.open]: null,
[ElementDefinition_SlicingRulesKind.openAtEnd]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
discriminator: t.array(RTTI_ElementDefinition_Discriminator),
description: t.string,
_description: RTTI_Element,
ordered: t.boolean,
_ordered: RTTI_Element,
rules: ElementDefinition_SlicingRulesKindKeys,
_rules: RTTI_Element
        });
        

        export var RTTI_ElementDefinition_Slicing:any = t.intersection([mandatory, partial]);
        

export type IElementDefinition_Slicing = t.TypeOf<typeof RTTI_ElementDefinition_Slicing>;
        
        