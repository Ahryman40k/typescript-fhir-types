
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
authority: t.string,
_authority: RTTI_Element,
uri: t.string,
_uri: RTTI_Element
        });
        

        export var RTTI_Consent_Policy:any = t.intersection([mandatory, partial]);
        

export type IConsent_Policy = t.TypeOf<typeof RTTI_Consent_Policy>;
        
        