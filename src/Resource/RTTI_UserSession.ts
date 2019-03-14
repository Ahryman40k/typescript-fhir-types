
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_UserSession_Status} from './RTTI_UserSession_Status';
import {RTTI_UserSession_Context} from './RTTI_UserSession_Context';




        const mandatory = t.type({
           resourceType: t.string,
user: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: RTTI_Identifier,
status: RTTI_UserSession_Status,
workstation: RTTI_Identifier,
focus: t.array(RTTI_Reference),
created: t.string,
_created: RTTI_Element,
expires: t.string,
_expires: RTTI_Element,
context: t.array(RTTI_UserSession_Context)
        });
        

        export var RTTI_UserSession:any = t.intersection([mandatory, partial]);
        

export type IUserSession = t.TypeOf<typeof RTTI_UserSession>;
        
        