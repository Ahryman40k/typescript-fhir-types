
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum OperationDefinition_BindingStrengthKind {
                required = 'required',
extensible = 'extensible',
preferred = 'preferred',
example = 'example'
            }
const OperationDefinition_BindingStrengthKindKeys = t.keyof({
                [OperationDefinition_BindingStrengthKind.required]: null,
[OperationDefinition_BindingStrengthKind.extensible]: null,
[OperationDefinition_BindingStrengthKind.preferred]: null,
[OperationDefinition_BindingStrengthKind.example]: null
            });


        const mandatory = t.type({
           valueSet: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
strength: OperationDefinition_BindingStrengthKindKeys,
_strength: RTTI_Element
        });
        

        export var RTTI_OperationDefinition_Binding:any = t.intersection([mandatory, partial]);
        

export type IOperationDefinition_Binding = t.TypeOf<typeof RTTI_OperationDefinition_Binding>;
        
        