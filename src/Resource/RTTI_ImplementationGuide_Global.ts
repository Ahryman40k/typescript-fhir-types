
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           profile: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.string,
_type: RTTI_Element
        });
        

        export var RTTI_ImplementationGuide_Global:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_Global = t.TypeOf<typeof RTTI_ImplementationGuide_Global>;
        
        