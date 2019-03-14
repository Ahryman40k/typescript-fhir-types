
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Linkage_Item} from './RTTI_Linkage_Item';




        const mandatory = t.type({
           resourceType: t.string,
item: t.array(RTTI_Linkage_Item)
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
active: t.boolean,
_active: RTTI_Element,
author: RTTI_Reference
        });
        

        export var RTTI_Linkage:any = t.intersection([mandatory, partial]);
        

export type ILinkage = t.TypeOf<typeof RTTI_Linkage>;
        
        