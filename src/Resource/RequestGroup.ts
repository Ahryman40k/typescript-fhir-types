
        import { Annotation } from '../Resource/Annotation';
import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { RequestGroup_Action } from '../Resource/RequestGroup_Action';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". 
         */
        export class RequestGroup  {

            constructor() {
                
            }

            
                /**
                 * This is a RequestGroup resource
                 */
                ResourceType: string = 'RequestGroup;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Allows a service to provide a unique, business identifier for the request.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
                 */
                InstantiatesCanonical? : Array<Canonical>;
                

                /**
                 * Extensions for instantiatesCanonical
                 */
                _instantiatesCanonical? : Array<Element>;
                

                /**
                 * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
                 */
                InstantiatesUri? : Array<Uri>;
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Array<Element>;
                

                /**
                 * A plan, proposal or order that is fulfilled in whole or in part by this request.
                 */
                BasedOn? : Array<Reference>;
                

                /**
                 * Completed or terminated request(s) whose function is taken by this new request.
                 */
                Replaces? : Array<Reference>;
                

                /**
                 * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.
                 */
                GroupIdentifier? : Identifier;
                

                /**
                 * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
                 */
                Intent? : Code;
                

                /**
                 * Extensions for intent
                 */
                _intent? : Element;
                

                /**
                 * Indicates how quickly the request should be addressed with respect to other requests.
                 */
                Priority? : Code;
                

                /**
                 * Extensions for priority
                 */
                _priority? : Element;
                

                /**
                 * A code that identifies what the overall request group is.
                 */
                Code? : CodeableConcept;
                

                /**
                 * The subject for which the request group was created.
                 */
                Subject? : Reference;
                

                /**
                 * Describes the context of the request group, if any.
                 */
                Context? : Reference;
                

                /**
                 * Indicates when the request group was created.
                 */
                AuthoredOn? : DateTime;
                

                /**
                 * Extensions for authoredOn
                 */
                _authoredOn? : Element;
                

                /**
                 * Provides a reference to the author of the request group.
                 */
                Author? : Reference;
                

                /**
                 * Describes the reason for the request group in coded or textual form.
                 */
                ReasonCode? : Array<CodeableConcept>;
                

                /**
                 * Indicates another resource whose existence justifies this request group.
                 */
                ReasonReference? : Array<Reference>;
                

                /**
                 * Provides a mechanism to communicate additional information about the response.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * The actions, if any, produced by the evaluation of the artifact.
                 */
                Action? : Array<RequestGroup_Action>;
                
        }
        