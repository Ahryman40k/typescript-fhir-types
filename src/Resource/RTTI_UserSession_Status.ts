
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

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


            export interface IUserSession_Status {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The current status of the user session.
                     */
                    code? : UserSession_StatusCodeKind;
                    

                    /**
                     * Extensions for code
                     */
                    _code? : IElement;
                    

                    /**
                     * The source of the status code.
                     */
                    source? : UserSession_StatusSourceKind;
                    

                    /**
                     * Extensions for source
                     */
                    _source? : IElement;
                    
            }
        


        export const RTTI_UserSession_Status: t.Type<IUserSession_Status> = t.recursion( 'IUserSession_Status', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: UserSession_StatusCodeKindKeys,
_code: RTTI_Element,
source: UserSession_StatusSourceKindKeys,
_source: RTTI_Element
        })
        
        );
        

        