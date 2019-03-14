
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_TerminologyCapabilities_Version} from './RTTI_TerminologyCapabilities_Version';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
uri: t.string,
version: t.array(RTTI_TerminologyCapabilities_Version),
subsumption: t.boolean,
_subsumption: RTTI_Element
        });
        

        export var RTTI_TerminologyCapabilities_CodeSystem:any = t.intersection([mandatory, partial]);
        

export type ITerminologyCapabilities_CodeSystem = t.TypeOf<typeof RTTI_TerminologyCapabilities_CodeSystem>;
        
        