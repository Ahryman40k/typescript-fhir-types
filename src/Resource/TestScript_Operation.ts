
        import { Code } from '../Scalar/Code';
import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Integer } from '../Scalar/Integer';
import { TestScript_RequestHeader } from '../Resource/TestScript_RequestHeader';

        

        /**
         * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. 
         */
        export class TestScript_Operation  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Server interaction or operation type.
                 */
                type? : Coding;
                

                /**
                 * The type of the resource.  See http://build.fhir.org/resourcelist.html.
                 */
                resource? : Code;
                

                /**
                 * Extensions for resource
                 */
                _resource? : Element;
                

                /**
                 * The label would be used for tracking/logging purposes by test engines.
                 */
                label? : string;
                

                /**
                 * Extensions for label
                 */
                _label? : Element;
                

                /**
                 * The description would be used by test engines for tracking and reporting purposes.
                 */
                description? : string;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The mime-type to use for RESTful operation in the 'Accept' header.
                 */
                accept? : Code;
                

                /**
                 * Extensions for accept
                 */
                _accept? : Element;
                

                /**
                 * The mime-type to use for RESTful operation in the 'Content-Type' header.
                 */
                contentType? : Code;
                

                /**
                 * Extensions for contentType
                 */
                _contentType? : Element;
                

                /**
                 * The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section.
                 */
                destination? : Integer;
                

                /**
                 * Extensions for destination
                 */
                _destination? : Element;
                

                /**
                 * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
                 */
                encodeRequestUrl? : boolean;
                

                /**
                 * Extensions for encodeRequestUrl
                 */
                _encodeRequestUrl? : Element;
                

                /**
                 * The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section.
                 */
                origin? : Integer;
                

                /**
                 * Extensions for origin
                 */
                _origin? : Element;
                

                /**
                 * Path plus parameters after [type].  Used to set parts of the request URL explicitly.
                 */
                params? : string;
                

                /**
                 * Extensions for params
                 */
                _params? : Element;
                

                /**
                 * Header elements would be used to set HTTP headers.
                 */
                requestHeader? : TestScript_RequestHeader[];
                

                /**
                 * The fixture id (maybe new) to map to the request.
                 */
                requestId? : Id;
                

                /**
                 * Extensions for requestId
                 */
                _requestId? : Element;
                

                /**
                 * The fixture id (maybe new) to map to the response.
                 */
                responseId? : Id;
                

                /**
                 * Extensions for responseId
                 */
                _responseId? : Element;
                

                /**
                 * The id of the fixture used as the body of a PUT or POST request.
                 */
                sourceId? : Id;
                

                /**
                 * Extensions for sourceId
                 */
                _sourceId? : Element;
                

                /**
                 * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
                 */
                targetId? : Id;
                

                /**
                 * Extensions for targetId
                 */
                _targetId? : Element;
                

                /**
                 * Complete request URL.
                 */
                url? : string;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                
        }
        