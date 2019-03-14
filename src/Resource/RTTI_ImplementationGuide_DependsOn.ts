
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           uri: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
packageId: t.string,
_packageId: RTTI_Element,
version: t.string,
_version: RTTI_Element
        });
        

        export var RTTI_ImplementationGuide_DependsOn:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_DependsOn = t.TypeOf<typeof RTTI_ImplementationGuide_DependsOn>;
        
        