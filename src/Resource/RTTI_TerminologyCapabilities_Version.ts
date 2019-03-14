
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_TerminologyCapabilities_Filter} from './RTTI_TerminologyCapabilities_Filter';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
isDefault: t.boolean,
_isDefault: RTTI_Element,
compositional: t.boolean,
_compositional: RTTI_Element,
language: t.array(t.string),
_language: t.array(RTTI_Element),
filter: t.array(RTTI_TerminologyCapabilities_Filter),
property: t.array(t.string),
_property: t.array(RTTI_Element)
        });
        

        export var RTTI_TerminologyCapabilities_Version:any = t.intersection([mandatory, partial]);
        

export type ITerminologyCapabilities_Version = t.TypeOf<typeof RTTI_TerminologyCapabilities_Version>;
        
        