
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactDetail } from '../Resource/ContactDetail';
import { Date } from '../Scalar/Date';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { PlanDefinition_Action } from '../Resource/PlanDefinition_Action';
import { PlanDefinition_Goal } from '../Resource/PlanDefinition_Goal';
import { Reference } from '../Resource/Reference';
import { RelatedArtifact } from '../Resource/RelatedArtifact';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum PlanDefinitionStatusKind {
                draft,
active,
retired,
unknown
            }

        /**
         * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. 
         */
        export class PlanDefinition  {

            constructor() {
                
            }

            
                /**
                 * This is a PlanDefinition resource
                 */
                ResourceType: string = 'PlanDefinition;'
                

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
                 * An absolute URI that is used to identify this plan definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this plan definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the plan definition is stored on different servers.
                 */
                Url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * A formal identifier that is used to identify this plan definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The identifier that is used to identify this version of the plan definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the plan definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
                 */
                Version? : String;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A natural language name identifying the plan definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A short, descriptive, user-friendly title for the plan definition.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * An explanatory or alternate title for the plan definition giving additional information about its content.
                 */
                Subtitle? : String;
                

                /**
                 * Extensions for subtitle
                 */
                _subtitle? : Element;
                

                /**
                 * A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
                 */
                Type? : CodeableConcept;
                

                /**
                 * The status of this plan definition. Enables tracking the life-cycle of the content.
                 */
                Status? : PlanDefinitionStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A Boolean value to indicate that this plan definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                Experimental? : Boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * A code or group definition that describes the intended subject of the plan definition.
                 */
                SubjectCodeableConcept? : CodeableConcept;
                

                /**
                 * A code or group definition that describes the intended subject of the plan definition.
                 */
                SubjectReference? : Reference;
                

                /**
                 * The date  (and optionally time) when the plan definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the plan definition changes.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the plan definition.
                 */
                Publisher? : String;
                

                /**
                 * Extensions for publisher
                 */
                _publisher? : Element;
                

                /**
                 * Contact details to assist a user in finding and communicating with the publisher.
                 */
                Contact? : Array<ContactDetail>;
                

                /**
                 * A free text natural language description of the plan definition from a consumer's perspective.
                 */
                Description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate plan definition instances.
                 */
                UseContext? : Array<UsageContext>;
                

                /**
                 * A legal or geographic region in which the plan definition is intended to be used.
                 */
                Jurisdiction? : Array<CodeableConcept>;
                

                /**
                 * Explanation of why this plan definition is needed and why it has been designed as it has.
                 */
                Purpose? : Markdown;
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Element;
                

                /**
                 * A detailed description of how the plan definition is used from a clinical perspective.
                 */
                Usage? : String;
                

                /**
                 * Extensions for usage
                 */
                _usage? : Element;
                

                /**
                 * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
                 */
                Copyright? : Markdown;
                

                /**
                 * Extensions for copyright
                 */
                _copyright? : Element;
                

                /**
                 * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
                 */
                ApprovalDate? : Date;
                

                /**
                 * Extensions for approvalDate
                 */
                _approvalDate? : Element;
                

                /**
                 * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
                 */
                LastReviewDate? : Date;
                

                /**
                 * Extensions for lastReviewDate
                 */
                _lastReviewDate? : Element;
                

                /**
                 * The period during which the plan definition content was or is planned to be in active use.
                 */
                EffectivePeriod? : Period;
                

                /**
                 * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
                 */
                Topic? : Array<CodeableConcept>;
                

                /**
                 * An individiual or organization primarily involved in the creation and maintenance of the content.
                 */
                Author? : Array<ContactDetail>;
                

                /**
                 * An individual or organization primarily responsible for internal coherence of the content.
                 */
                Editor? : Array<ContactDetail>;
                

                /**
                 * An individual or organization primarily responsible for review of some aspect of the content.
                 */
                Reviewer? : Array<ContactDetail>;
                

                /**
                 * An individual or organization responsible for officially endorsing the content for use in some setting.
                 */
                Endorser? : Array<ContactDetail>;
                

                /**
                 * Related artifacts such as additional documentation, justification, or bibliographic references.
                 */
                RelatedArtifact? : Array<RelatedArtifact>;
                

                /**
                 * A reference to a Library resource containing any formal logic used by the plan definition.
                 */
                Library? : Array<Canonical>;
                

                /**
                 * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
                 */
                Goal? : Array<PlanDefinition_Goal>;
                

                /**
                 * An action or group of actions to be taken as part of the plan.
                 */
                Action? : Array<PlanDefinition_Action>;
                
        }
        