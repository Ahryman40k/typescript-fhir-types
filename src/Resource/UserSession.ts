
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Instant } from '../Scalar/Instant';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';
import { UserSession_Context } from '../Resource/UserSession_Context';
import { UserSession_Status } from '../Resource/UserSession_Status';

        

        /**
         * Information about a user's current session. 
         */
        export class UserSession  {

            constructor() {
                this.user = new Reference();
            }

            
                /**
                 * This is a UserSession resource
                 */
                resourceType: string = 'UserSession;'
                

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
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Allows a service to provide a unique, business identifier for the session.
                 */
                identifier? : Identifier;
                

                /**
                 * A practitioner, patient, device, or related person engaged in the session.
                 */
                user : Reference;
                

                /**
                 * Status of the session.
                 */
                status? : UserSession_Status;
                

                /**
                 * Location that identifies the physical place at which the user's session is occurring. For the purposes of context synchronization, this is intended to represent the user's workstation.
                 */
                workstation? : Identifier;
                

                /**
                 * The current focus of the user's session. Common values are a reference to a Patient, Encounter, ImagingStudy, etc.
                 */
                focus? : Reference[];
                

                /**
                 * Indicates the timestamp when the user session was first created.
                 */
                created? : Instant;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * Indicates the timestamp when the user session will expire (i.e. no longer be valid).
                 */
                expires? : Instant;
                

                /**
                 * Extensions for expires
                 */
                _expires? : Element;
                

                /**
                 * Provides additional information associated with the context.
                 */
                context? : UserSession_Context[];
                
        }
        