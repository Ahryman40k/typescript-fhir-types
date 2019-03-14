
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
relation: t.string,
_relation: RTTI_Element,
url: t.string,
_url: RTTI_Element
        });
        

        export var RTTI_Bundle_Link:any = t.intersection([mandatory, partial]);
        

export type IBundle_Link = t.TypeOf<typeof RTTI_Bundle_Link>;
        
        