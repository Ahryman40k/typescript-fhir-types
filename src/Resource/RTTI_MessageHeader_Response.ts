
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export enum MessageHeader_ResponseCodeKind {
                ok = 'ok',
transientError = 'transientError',
fatalError = 'fatalError'
            }
const MessageHeader_ResponseCodeKindKeys = t.keyof({
                [MessageHeader_ResponseCodeKind.ok]: null,
[MessageHeader_ResponseCodeKind.transientError]: null,
[MessageHeader_ResponseCodeKind.fatalError]: null
            });


            export interface IMessageHeader_Response {
                
                
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
                     * The MessageHeader.id of the message to which this message is a response.
                     */
                    identifier? : string;
                    

                    /**
                     * Extensions for identifier
                     */
                    _identifier? : IElement;
                    

                    /**
                     * Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
                     */
                    code? : MessageHeader_ResponseCodeKind;
                    

                    /**
                     * Extensions for code
                     */
                    _code? : IElement;
                    

                    /**
                     * Full details of any issues found in the message.
                     */
                    details? : IReference;
                    
            }
        


        export const RTTI_MessageHeader_Response: t.Type<IMessageHeader_Response> = t.recursion( 'IMessageHeader_Response', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.string,
_identifier: RTTI_Element,
code: MessageHeader_ResponseCodeKindKeys,
_code: RTTI_Element,
details: RTTI_Reference
        })
        
        );
        

        