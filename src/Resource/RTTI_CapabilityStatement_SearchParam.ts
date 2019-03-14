
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum CapabilityStatement_SearchParamTypeKind {
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
const CapabilityStatement_SearchParamTypeKindKeys = t.keyof({
                [CapabilityStatement_SearchParamTypeKind.number]: null,
[CapabilityStatement_SearchParamTypeKind.date]: null,
[CapabilityStatement_SearchParamTypeKind.string]: null,
[CapabilityStatement_SearchParamTypeKind.token]: null,
[CapabilityStatement_SearchParamTypeKind.reference]: null,
[CapabilityStatement_SearchParamTypeKind.composite]: null,
[CapabilityStatement_SearchParamTypeKind.quantity]: null,
[CapabilityStatement_SearchParamTypeKind.uri]: null,
[CapabilityStatement_SearchParamTypeKind.special]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
definition: t.string,
type: CapabilityStatement_SearchParamTypeKindKeys,
_type: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_CapabilityStatement_SearchParam:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_SearchParam = t.TypeOf<typeof RTTI_CapabilityStatement_SearchParam>;
        
        