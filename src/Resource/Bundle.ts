
        import { Bundle_Entry } from '../Resource/Bundle_Entry';
import { Bundle_Link } from '../Resource/Bundle_Link';
import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Instant } from '../Scalar/Instant';
import { Meta } from '../Resource/Meta';
import { Signature } from '../Resource/Signature';
import { UnsignedInt } from '../Scalar/UnsignedInt';
import { Uri } from '../Scalar/Uri';

        export enum BundleTypeKind {
                document,
message,
transaction,
transactionResponse,
batch,
batchResponse,
history,
searchset,
collection
            }

        /**
         * A container for a collection of resources. 
         */
        export class Bundle  {

            constructor() {
                
            }

            
                /**
                 * This is a Bundle resource
                 */
                resourceType: string = 'Bundle;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
                 */
                identifier? : Identifier;
                

                /**
                 * Indicates the purpose of this bundle - how it is intended to be used.
                 */
                type? : BundleTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.
                 */
                timestamp? : Instant;
                

                /**
                 * Extensions for timestamp
                 */
                _timestamp? : Element;
                

                /**
                 * If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle.
                 */
                total? : UnsignedInt;
                

                /**
                 * Extensions for total
                 */
                _total? : Element;
                

                /**
                 * A series of links that provide context to this bundle.
                 */
                link? : Bundle_Link[];
                

                /**
                 * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
                 */
                entry? : Bundle_Entry[];
                

                /**
                 * Digital Signature - base64 encoded. XML-DSig or a JWT.
                 */
                signature? : Signature;
                
        }
        