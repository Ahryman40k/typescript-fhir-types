
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           link: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
comment: t.string,
_comment: RTTI_Element
        });
        

        export var RTTI_DiagnosticReport_Media:any = t.intersection([mandatory, partial]);
        

export type IDiagnosticReport_Media = t.TypeOf<typeof RTTI_DiagnosticReport_Media>;
        
        