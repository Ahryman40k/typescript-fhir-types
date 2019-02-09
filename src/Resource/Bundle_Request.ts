
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Instant } from '../Scalar/Instant';
import { Uri } from '../Scalar/Uri';

        export enum BundleRequestMethodKind {
                get,
head,
post,
put,
delete,
patch
            }

        /**
         * A container for a collection of resources. 
         */
        export class Bundle_Request  {

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
                 * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
                 */
                method? : BundleRequestMethodKind;
                

                /**
                 * Extensions for method
                 */
                _method? : Element;
                

                /**
                 * The URL for this entry, relative to the root (the address to which the request is posted).
                 */
                url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
                 */
                ifNoneMatch? : string;
                

                /**
                 * Extensions for ifNoneMatch
                 */
                _ifNoneMatch? : Element;
                

                /**
                 * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
                 */
                ifModifiedSince? : Instant;
                

                /**
                 * Extensions for ifModifiedSince
                 */
                _ifModifiedSince? : Element;
                

                /**
                 * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
                 */
                ifMatch? : string;
                

                /**
                 * Extensions for ifMatch
                 */
                _ifMatch? : Element;
                

                /**
                 * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
                 */
                ifNoneExist? : string;
                

                /**
                 * Extensions for ifNoneExist
                 */
                _ifNoneExist? : Element;
                
        }
        