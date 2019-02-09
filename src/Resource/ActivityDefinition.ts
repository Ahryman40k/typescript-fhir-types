
        import { ActivityDefinition_DynamicValue } from '../Resource/ActivityDefinition_DynamicValue';
import { ActivityDefinition_Participant } from '../Resource/ActivityDefinition_Participant';
import { Age } from '../Resource/Age';
import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactDetail } from '../Resource/ContactDetail';
import { Date } from '../Scalar/Date';
import { DateTime } from '../Scalar/DateTime';
import { Dosage } from '../Resource/Dosage';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Reference } from '../Resource/Reference';
import { RelatedArtifact } from '../Resource/RelatedArtifact';
import { ResourceList } from '../Union/ResourceList';
import { Timing } from '../Resource/Timing';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum ActivityDefinitionStatusKind {
                draft,
active,
retired,
unknown
            }

        /**
         * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. 
         */
        export class ActivityDefinition  {

            constructor() {
                
            }

            
                /**
                 * This is a ActivityDefinition resource
                 */
                resourceType: string = 'ActivityDefinition;'
                

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
                 * An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this activity definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the activity definition is stored on different servers.
                 */
                url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
                 */
                identifier? : Identifier[];
                

                /**
                 * The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
                 */
                version? : string;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A short, descriptive, user-friendly title for the activity definition.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * An explanatory or alternate title for the activity definition giving additional information about its content.
                 */
                subtitle? : string;
                

                /**
                 * Extensions for subtitle
                 */
                _subtitle? : Element;
                

                /**
                 * The status of this activity definition. Enables tracking the life-cycle of the content.
                 */
                status? : ActivityDefinitionStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A Boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                experimental? : boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * A code or group definition that describes the intended subject of the activity being defined.
                 */
                subjectCodeableConcept? : CodeableConcept;
                

                /**
                 * A code or group definition that describes the intended subject of the activity being defined.
                 */
                subjectReference? : Reference;
                

                /**
                 * The date  (and optionally time) when the activity definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the activity definition.
                 */
                publisher? : string;
                

                /**
                 * Extensions for publisher
                 */
                _publisher? : Element;
                

                /**
                 * Contact details to assist a user in finding and communicating with the publisher.
                 */
                contact? : ContactDetail[];
                

                /**
                 * A free text natural language description of the activity definition from a consumer's perspective.
                 */
                description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate activity definition instances.
                 */
                useContext? : UsageContext[];
                

                /**
                 * A legal or geographic region in which the activity definition is intended to be used.
                 */
                jurisdiction? : CodeableConcept[];
                

                /**
                 * Explanation of why this activity definition is needed and why it has been designed as it has.
                 */
                purpose? : Markdown;
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Element;
                

                /**
                 * A detailed description of how the activity definition is used from a clinical perspective.
                 */
                usage? : string;
                

                /**
                 * Extensions for usage
                 */
                _usage? : Element;
                

                /**
                 * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
                 */
                copyright? : Markdown;
                

                /**
                 * Extensions for copyright
                 */
                _copyright? : Element;
                

                /**
                 * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
                 */
                approvalDate? : Date;
                

                /**
                 * Extensions for approvalDate
                 */
                _approvalDate? : Element;
                

                /**
                 * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
                 */
                lastReviewDate? : Date;
                

                /**
                 * Extensions for lastReviewDate
                 */
                _lastReviewDate? : Element;
                

                /**
                 * The period during which the activity definition content was or is planned to be in active use.
                 */
                effectivePeriod? : Period;
                

                /**
                 * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
                 */
                topic? : CodeableConcept[];
                

                /**
                 * An individiual or organization primarily involved in the creation and maintenance of the content.
                 */
                author? : ContactDetail[];
                

                /**
                 * An individual or organization primarily responsible for internal coherence of the content.
                 */
                editor? : ContactDetail[];
                

                /**
                 * An individual or organization primarily responsible for review of some aspect of the content.
                 */
                reviewer? : ContactDetail[];
                

                /**
                 * An individual or organization responsible for officially endorsing the content for use in some setting.
                 */
                endorser? : ContactDetail[];
                

                /**
                 * Related artifacts such as additional documentation, justification, or bibliographic references.
                 */
                relatedArtifact? : RelatedArtifact[];
                

                /**
                 * A reference to a Library resource containing any formal logic used by the activity definition.
                 */
                library? : Canonical[];
                

                /**
                 * A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.
                 */
                kind? : Code;
                

                /**
                 * Extensions for kind
                 */
                _kind? : Element;
                

                /**
                 * A profile to which the target of the activity definition is expected to conform.
                 */
                profile? : Canonical;
                

                /**
                 * Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.
                 */
                code? : CodeableConcept;
                

                /**
                 * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
                 */
                intent? : Code;
                

                /**
                 * Extensions for intent
                 */
                _intent? : Element;
                

                /**
                 * Indicates how quickly the activity  should be addressed with respect to other requests.
                 */
                priority? : Code;
                

                /**
                 * Extensions for priority
                 */
                _priority? : Element;
                

                /**
                 * Set this to true if the definition is to indicate that a particular activity should NOT be performed. If true, this element should be interpreted to reinforce a negative coding. For example NPO as a code with a doNotPerform of true would still indicate to NOT perform the action.
                 */
                doNotPerform? : boolean;
                

                /**
                 * Extensions for doNotPerform
                 */
                _doNotPerform? : Element;
                

                /**
                 * The period, timing or frequency upon which the described activity is to occur.
                 */
                timingTiming? : Timing;
                

                /**
                 * The period, timing or frequency upon which the described activity is to occur.
                 */
                timingDateTime? : string;
                

                /**
                 * Extensions for timingDateTime
                 */
                _timingDateTime? : Element;
                

                /**
                 * The period, timing or frequency upon which the described activity is to occur.
                 */
                timingAge? : Age;
                

                /**
                 * The period, timing or frequency upon which the described activity is to occur.
                 */
                timingPeriod? : Period;
                

                /**
                 * The period, timing or frequency upon which the described activity is to occur.
                 */
                timingRange? : Range;
                

                /**
                 * The period, timing or frequency upon which the described activity is to occur.
                 */
                timingDuration? : Duration;
                

                /**
                 * Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
                 */
                location? : Reference;
                

                /**
                 * Indicates who should participate in performing the action described.
                 */
                participant? : ActivityDefinition_Participant[];
                

                /**
                 * Identifies the food, drug or other product being consumed or supplied in the activity.
                 */
                productReference? : Reference;
                

                /**
                 * Identifies the food, drug or other product being consumed or supplied in the activity.
                 */
                productCodeableConcept? : CodeableConcept;
                

                /**
                 * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
                 */
                quantity? : Quantity;
                

                /**
                 * Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources.
                 */
                dosage? : Dosage[];
                

                /**
                 * Indicates the sites on the subject's body where the procedure should be performed (I.e. the target sites).
                 */
                bodySite? : CodeableConcept[];
                

                /**
                 * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
                 */
                specimenRequirement? : Reference[];
                

                /**
                 * Defines observation requirements for the action to be performed, such as body weight or surface area.
                 */
                observationRequirement? : Reference[];
                

                /**
                 * Defines the observations that are expected to be produced by the action.
                 */
                observationResultRequirement? : Reference[];
                

                /**
                 * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
                 */
                transform? : Canonical;
                

                /**
                 * Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the request resource that would contain the result.
                 */
                dynamicValue? : ActivityDefinition_DynamicValue[];
                
        }
        