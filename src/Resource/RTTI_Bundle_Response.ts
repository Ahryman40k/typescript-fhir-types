
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {ResourceList} from '../Union/ResourceList';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
status: t.string,
_status: RTTI_Element,
location: t.string,
_location: RTTI_Element,
etag: t.string,
_etag: RTTI_Element,
lastModified: t.string,
_lastModified: RTTI_Element,
outcome: ResourceList
        });
        

        export var RTTI_Bundle_Response:any = t.intersection([mandatory, partial]);
        

export type IBundle_Response = t.TypeOf<typeof RTTI_Bundle_Response>;
        
        