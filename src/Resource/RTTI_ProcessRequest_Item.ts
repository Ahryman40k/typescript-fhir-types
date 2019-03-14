
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequenceLinkId: t.number,
_sequenceLinkId: RTTI_Element
        });
        

        export var RTTI_ProcessRequest_Item:any = t.intersection([mandatory, partial]);
        

export type IProcessRequest_Item = t.TypeOf<typeof RTTI_ProcessRequest_Item>;
        
        