
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ElementDefinition_BindingStrengthKind {
                required = 'required',
extensible = 'extensible',
preferred = 'preferred',
example = 'example'
            }
const ElementDefinition_BindingStrengthKindKeys = t.keyof({
                [ElementDefinition_BindingStrengthKind.required]: null,
[ElementDefinition_BindingStrengthKind.extensible]: null,
[ElementDefinition_BindingStrengthKind.preferred]: null,
[ElementDefinition_BindingStrengthKind.example]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
strength: ElementDefinition_BindingStrengthKindKeys,
_strength: RTTI_Element,
description: t.string,
_description: RTTI_Element,
valueSet: t.string
        });
        

        export var RTTI_ElementDefinition_Binding:any = t.intersection([mandatory, partial]);
        

export type IElementDefinition_Binding = t.TypeOf<typeof RTTI_ElementDefinition_Binding>;
        
        