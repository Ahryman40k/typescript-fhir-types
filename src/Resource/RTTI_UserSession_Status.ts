
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum UserSession_StatusCodeKind {
                activating = 'activating',
active = 'active',
suspended = 'suspended',
closing = 'closing',
closed = 'closed'
            }
export enum UserSession_StatusSourceKind {
                user = 'user',
system = 'system'
            }
const UserSession_StatusCodeKindKeys = t.keyof({
                [UserSession_StatusCodeKind.activating]: null,
[UserSession_StatusCodeKind.active]: null,
[UserSession_StatusCodeKind.suspended]: null,
[UserSession_StatusCodeKind.closing]: null,
[UserSession_StatusCodeKind.closed]: null
            });
const UserSession_StatusSourceKindKeys = t.keyof({
                [UserSession_StatusSourceKind.user]: null,
[UserSession_StatusSourceKind.system]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: UserSession_StatusCodeKindKeys,
_code: RTTI_Element,
source: UserSession_StatusSourceKindKeys,
_source: RTTI_Element
        });
        

        export var RTTI_UserSession_Status:any = t.intersection([mandatory, partial]);
        

export type IUserSession_Status = t.TypeOf<typeof RTTI_UserSession_Status>;
        
        