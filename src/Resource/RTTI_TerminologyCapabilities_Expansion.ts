
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_TerminologyCapabilities_Parameter} from './RTTI_TerminologyCapabilities_Parameter';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
hierarchical: t.boolean,
_hierarchical: RTTI_Element,
paging: t.boolean,
_paging: RTTI_Element,
incomplete: t.boolean,
_incomplete: RTTI_Element,
parameter: t.array(RTTI_TerminologyCapabilities_Parameter),
textFilter: t.string,
_textFilter: RTTI_Element
        });
        

        export var RTTI_TerminologyCapabilities_Expansion:any = t.intersection([mandatory, partial]);
        

export type ITerminologyCapabilities_Expansion = t.TypeOf<typeof RTTI_TerminologyCapabilities_Expansion>;
        
        