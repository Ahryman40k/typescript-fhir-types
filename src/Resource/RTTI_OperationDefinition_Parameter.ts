
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_OperationDefinition_Binding} from './RTTI_OperationDefinition_Binding';
import {RTTI_OperationDefinition_ReferencedFrom} from './RTTI_OperationDefinition_ReferencedFrom';

export enum OperationDefinition_ParameterUseKind {
                in = 'in',
out = 'out'
            }
export enum OperationDefinition_ParameterSearchTypeKind {
                number = 'number',
date = 'date',
string = 'string',
token = 'token',
reference = 'reference',
composite = 'composite',
quantity = 'quantity',
uri = 'uri',
special = 'special'
            }
const OperationDefinition_ParameterUseKindKeys = t.keyof({
                [OperationDefinition_ParameterUseKind.in]: null,
[OperationDefinition_ParameterUseKind.out]: null
            });
const OperationDefinition_ParameterSearchTypeKindKeys = t.keyof({
                [OperationDefinition_ParameterSearchTypeKind.number]: null,
[OperationDefinition_ParameterSearchTypeKind.date]: null,
[OperationDefinition_ParameterSearchTypeKind.string]: null,
[OperationDefinition_ParameterSearchTypeKind.token]: null,
[OperationDefinition_ParameterSearchTypeKind.reference]: null,
[OperationDefinition_ParameterSearchTypeKind.composite]: null,
[OperationDefinition_ParameterSearchTypeKind.quantity]: null,
[OperationDefinition_ParameterSearchTypeKind.uri]: null,
[OperationDefinition_ParameterSearchTypeKind.special]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
use: OperationDefinition_ParameterUseKindKeys,
_use: RTTI_Element,
min: t.number,
_min: RTTI_Element,
max: t.string,
_max: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element,
type: t.string,
_type: RTTI_Element,
targetProfile: t.array(t.string),
searchType: OperationDefinition_ParameterSearchTypeKindKeys,
_searchType: RTTI_Element,
binding: RTTI_OperationDefinition_Binding,
referencedFrom: t.array(RTTI_OperationDefinition_ReferencedFrom),
part: t.array(RTTI_OperationDefinition_Parameter)
        });
        

        export var RTTI_OperationDefinition_Parameter:any = t.intersection([mandatory, partial]);
        

export type IOperationDefinition_Parameter = t.TypeOf<typeof RTTI_OperationDefinition_Parameter>;
        
        