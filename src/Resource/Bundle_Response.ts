
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Instant } from '../Scalar/Instant';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A container for a collection of resources. 
         */
        export class Bundle_Response  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
                 */
                Status? : String;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The location header created by processing this operation, populated if the operation returns a location.
                 */
                Location? : Uri;
                

                /**
                 * Extensions for location
                 */
                _location? : Element;
                

                /**
                 * The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).
                 */
                Etag? : String;
                

                /**
                 * Extensions for etag
                 */
                _etag? : Element;
                

                /**
                 * The date/time that the resource was modified on the server.
                 */
                LastModified? : Instant;
                

                /**
                 * Extensions for lastModified
                 */
                _lastModified? : Element;
                

                /**
                 * An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.
                 */
                Outcome? : ResourceList;
                
        }
        