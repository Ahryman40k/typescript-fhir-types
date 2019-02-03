
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Instant } from '../Scalar/Instant';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Provenance_Agent } from '../Resource/Provenance_Agent';
import { Provenance_Entity } from '../Resource/Provenance_Entity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Signature } from '../Resource/Signature';
import { Uri } from '../Scalar/Uri';

        

        /**
         * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies. 
         */
        export class Provenance  {

            constructor() {
                this.Target = new Array<Reference>();
this.Agent = new Array<Provenance_Agent>();
            }

            
                /**
                 * This is a Provenance resource
                 */
                ResourceType: string = 'Provenance;'
                

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
                 * The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
                 */
                Target : Array<Reference>;
                

                /**
                 * The period during which the activity occurred.
                 */
                OccurredPeriod? : Period;
                

                /**
                 * The period during which the activity occurred.
                 */
                OccurredDateTime? : String;
                

                /**
                 * Extensions for occurredDateTime
                 */
                _occurredDateTime? : Element;
                

                /**
                 * The instant of time at which the activity was recorded.
                 */
                Recorded? : Instant;
                

                /**
                 * Extensions for recorded
                 */
                _recorded? : Element;
                

                /**
                 * Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.
                 */
                Policy? : Array<Uri>;
                

                /**
                 * Extensions for policy
                 */
                _policy? : Array<Element>;
                

                /**
                 * Where the activity occurred, if relevant.
                 */
                Location? : Reference;
                

                /**
                 * The reason that the activity was taking place.
                 */
                Reason? : Array<CodeableConcept>;
                

                /**
                 * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
                 */
                Activity? : CodeableConcept;
                

                /**
                 * An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.
                 */
                Agent : Array<Provenance_Agent>;
                

                /**
                 * An entity used in this activity.
                 */
                Entity? : Array<Provenance_Entity>;
                

                /**
                 * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
                 */
                Signature? : Array<Signature>;
                
        }
        