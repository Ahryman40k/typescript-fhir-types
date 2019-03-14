
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           who: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept
        });
        

        export var RTTI_DocumentManifest_Agent:any = t.intersection([mandatory, partial]);
        

export type IDocumentManifest_Agent = t.TypeOf<typeof RTTI_DocumentManifest_Agent>;
        
        