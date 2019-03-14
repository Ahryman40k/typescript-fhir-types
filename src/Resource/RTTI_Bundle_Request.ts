
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum Bundle_RequestMethodKind {
                get = 'get',
head = 'head',
post = 'post',
put = 'put',
delete = 'delete',
patch = 'patch'
            }
const Bundle_RequestMethodKindKeys = t.keyof({
                [Bundle_RequestMethodKind.get]: null,
[Bundle_RequestMethodKind.head]: null,
[Bundle_RequestMethodKind.post]: null,
[Bundle_RequestMethodKind.put]: null,
[Bundle_RequestMethodKind.delete]: null,
[Bundle_RequestMethodKind.patch]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
method: Bundle_RequestMethodKindKeys,
_method: RTTI_Element,
url: t.string,
_url: RTTI_Element,
ifNoneMatch: t.string,
_ifNoneMatch: RTTI_Element,
ifModifiedSince: t.string,
_ifModifiedSince: RTTI_Element,
ifMatch: t.string,
_ifMatch: RTTI_Element,
ifNoneExist: t.string,
_ifNoneExist: RTTI_Element
        });
        

        export var RTTI_Bundle_Request:any = t.intersection([mandatory, partial]);
        

export type IBundle_Request = t.TypeOf<typeof RTTI_Bundle_Request>;
        
        