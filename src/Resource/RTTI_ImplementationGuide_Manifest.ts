
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ImplementationGuide_Resource1} from './RTTI_ImplementationGuide_Resource1';
import {RTTI_ImplementationGuide_Page1} from './RTTI_ImplementationGuide_Page1';





        const mandatory = t.type({
           resource: t.array(RTTI_ImplementationGuide_Resource1)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
rendering: t.string,
_rendering: RTTI_Element,
page: t.array(RTTI_ImplementationGuide_Page1),
image: t.array(t.string),
_image: t.array(RTTI_Element),
other: t.array(t.string),
_other: t.array(RTTI_Element)
        });
        

        export var RTTI_ImplementationGuide_Manifest:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_Manifest = t.TypeOf<typeof RTTI_ImplementationGuide_Manifest>;
        
        