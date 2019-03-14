
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
contentType: t.string,
_contentType: RTTI_Element,
securityContext: RTTI_Reference,
data: t.string,
_data: RTTI_Element
        });
        

        export var RTTI_Binary:any = t.intersection([mandatory, partial]);
        

export type IBinary = t.TypeOf<typeof RTTI_Binary>;
        
        