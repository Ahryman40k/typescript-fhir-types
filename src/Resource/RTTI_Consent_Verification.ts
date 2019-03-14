
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
verified: t.boolean,
_verified: RTTI_Element,
verifiedWith: RTTI_Reference,
verificationDate: t.string,
_verificationDate: RTTI_Element
        });
        

        export var RTTI_Consent_Verification:any = t.intersection([mandatory, partial]);
        

export type IConsent_Verification = t.TypeOf<typeof RTTI_Consent_Verification>;
        
        