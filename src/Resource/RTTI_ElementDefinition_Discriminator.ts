
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ElementDefinition_DiscriminatorTypeKind {
                value = 'value',
exists = 'exists',
pattern = 'pattern',
type = 'type',
profile = 'profile'
            }
const ElementDefinition_DiscriminatorTypeKindKeys = t.keyof({
                [ElementDefinition_DiscriminatorTypeKind.value]: null,
[ElementDefinition_DiscriminatorTypeKind.exists]: null,
[ElementDefinition_DiscriminatorTypeKind.pattern]: null,
[ElementDefinition_DiscriminatorTypeKind.type]: null,
[ElementDefinition_DiscriminatorTypeKind.profile]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: ElementDefinition_DiscriminatorTypeKindKeys,
_type: RTTI_Element,
path: t.string,
_path: RTTI_Element
        });
        

        export var RTTI_ElementDefinition_Discriminator:any = t.intersection([mandatory, partial]);
        

export type IElementDefinition_Discriminator = t.TypeOf<typeof RTTI_ElementDefinition_Discriminator>;
        
        