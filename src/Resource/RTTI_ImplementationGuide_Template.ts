
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
source: t.string,
_source: RTTI_Element,
scope: t.string,
_scope: RTTI_Element
        });
        

        export var RTTI_ImplementationGuide_Template:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_Template = t.TypeOf<typeof RTTI_ImplementationGuide_Template>;
        
        