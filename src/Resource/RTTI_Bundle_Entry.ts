
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Bundle_Link} from './RTTI_Bundle_Link';
import {RTTI_Element} from './RTTI_Element';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Bundle_Search} from './RTTI_Bundle_Search';
import {RTTI_Bundle_Request} from './RTTI_Bundle_Request';
import {RTTI_Bundle_Response} from './RTTI_Bundle_Response';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
link: t.array(RTTI_Bundle_Link),
fullUrl: t.string,
_fullUrl: RTTI_Element,
resource: ResourceList,
search: RTTI_Bundle_Search,
request: RTTI_Bundle_Request,
response: RTTI_Bundle_Response
        });
        

        export var RTTI_Bundle_Entry:any = t.intersection([mandatory, partial]);
        

export type IBundle_Entry = t.TypeOf<typeof RTTI_Bundle_Entry>;
        
        