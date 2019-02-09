
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Id } from '../Scalar/Id';
import { Meta } from '../Resource/Meta';
import { Parameters_Parameter } from '../Resource/Parameters_Parameter';
import { Uri } from '../Scalar/Uri';

        

        /**
         * This special resource type is used to represent an operation request and response (operations.html). It has no other use, and there is no RESTful endpoint associated with it. 
         */
        export class Parameters  {

            constructor() {
                
            }

            
                /**
                 * This is a Parameters resource
                 */
                resourceType: string = 'Parameters;'
                

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
                 * A parameter passed to or received from the operation.
                 */
                parameter? : Parameters_Parameter[];
                
        }
        