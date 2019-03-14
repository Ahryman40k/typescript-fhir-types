
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
subType: RTTI_CodeableConcept,
publisher: RTTI_Reference,
publicationDate: t.string,
_publicationDate: RTTI_Element,
publicationStatus: t.string,
_publicationStatus: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element
        });
        

        export var RTTI_Contract_ContentDefinition:any = t.intersection([mandatory, partial]);
        

export type IContract_ContentDefinition = t.TypeOf<typeof RTTI_Contract_ContentDefinition>;
        
        