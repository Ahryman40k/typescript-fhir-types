
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_ImplementationGuide_Package} from './RTTI_ImplementationGuide_Package';
import {RTTI_ImplementationGuide_Resource} from './RTTI_ImplementationGuide_Resource';
import {RTTI_ImplementationGuide_Page} from './RTTI_ImplementationGuide_Page';
import {RTTI_ImplementationGuide_Parameter} from './RTTI_ImplementationGuide_Parameter';
import {RTTI_ImplementationGuide_Template} from './RTTI_ImplementationGuide_Template';




        const mandatory = t.type({
           resource: t.array(RTTI_ImplementationGuide_Resource)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
package: t.array(RTTI_ImplementationGuide_Package),
page: RTTI_ImplementationGuide_Page,
parameter: t.array(RTTI_ImplementationGuide_Parameter),
template: t.array(RTTI_ImplementationGuide_Template)
        });
        

        export var RTTI_ImplementationGuide_Definition:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_Definition = t.TypeOf<typeof RTTI_ImplementationGuide_Definition>;
        
        