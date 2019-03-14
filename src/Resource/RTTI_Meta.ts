
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
versionId: t.string,
_versionId: RTTI_Element,
lastUpdated: t.string,
_lastUpdated: RTTI_Element,
source: t.string,
_source: RTTI_Element,
profile: t.array(t.string),
security: t.array(RTTI_Coding),
tag: t.array(RTTI_Coding)
        });
        

        export var RTTI_Meta:any = t.intersection([mandatory, partial]);
        

export type IMeta = t.TypeOf<typeof RTTI_Meta>;
        
        