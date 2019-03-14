
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
op: t.array(t.string),
_op: t.array(RTTI_Element)
        });
        

        export var RTTI_TerminologyCapabilities_Filter:any = t.intersection([mandatory, partial]);
        

export type ITerminologyCapabilities_Filter = t.TypeOf<typeof RTTI_TerminologyCapabilities_Filter>;
        
        