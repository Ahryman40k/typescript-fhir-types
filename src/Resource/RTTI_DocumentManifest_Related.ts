
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: RTTI_Identifier,
ref: RTTI_Reference
        });
        

        export var RTTI_DocumentManifest_Related:any = t.intersection([mandatory, partial]);
        

export type IDocumentManifest_Related = t.TypeOf<typeof RTTI_DocumentManifest_Related>;
        
        