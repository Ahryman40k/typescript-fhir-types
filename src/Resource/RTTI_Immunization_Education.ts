
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
documentType: t.string,
_documentType: RTTI_Element,
reference: t.string,
_reference: RTTI_Element,
publicationDate: t.string,
_publicationDate: RTTI_Element,
presentationDate: t.string,
_presentationDate: RTTI_Element
        });
        

        export var RTTI_Immunization_Education:any = t.intersection([mandatory, partial]);
        

export type IImmunization_Education = t.TypeOf<typeof RTTI_Immunization_Education>;
        
        