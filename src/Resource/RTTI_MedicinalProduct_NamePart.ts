
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           type: RTTI_Coding
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
part: t.string,
_part: RTTI_Element
        });
        

        export var RTTI_MedicinalProduct_NamePart:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProduct_NamePart = t.TypeOf<typeof RTTI_MedicinalProduct_NamePart>;
        
        