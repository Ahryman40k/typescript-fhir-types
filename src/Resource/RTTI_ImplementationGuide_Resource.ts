
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           reference: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element,
exampleBoolean: t.boolean,
_exampleBoolean: RTTI_Element,
exampleCanonical: t.string,
_exampleCanonical: RTTI_Element,
package: t.string,
_package: RTTI_Element
        });
        

        export var RTTI_ImplementationGuide_Resource:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_Resource = t.TypeOf<typeof RTTI_ImplementationGuide_Resource>;
        
        