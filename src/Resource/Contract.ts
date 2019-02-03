
        import { Attachment } from '../Resource/Attachment';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Contract_ContentDefinition } from '../Resource/Contract_ContentDefinition';
import { Contract_Friendly } from '../Resource/Contract_Friendly';
import { Contract_Legal } from '../Resource/Contract_Legal';
import { Contract_Rule } from '../Resource/Contract_Rule';
import { Contract_Signer } from '../Resource/Contract_Signer';
import { Contract_Term } from '../Resource/Contract_Term';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. 
         */
        export class Contract  {

            constructor() {
                
            }

            
                /**
                 * This is a Contract resource
                 */
                ResourceType: string = 'Contract;'
                

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
                 * Unique identifier for this Contract or a derivative that references a Source Contract.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Canonical identifier for this contract, represented as a URI (globally unique).
                 */
                Url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * An edition identifier used for business purposes to label business significant variants.
                 */
                Version? : String;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * The status of the resource instance.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
                 */
                LegalState? : CodeableConcept;
                

                /**
                 * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
                 */
                InstantiatesCanonical? : Reference;
                

                /**
                 * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
                 */
                InstantiatesUri? : Uri;
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Element;
                

                /**
                 * The minimal content derived from the basal information source at a specific stage in its lifecycle.
                 */
                ContentDerivative? : CodeableConcept;
                

                /**
                 * When this  Contract was issued.
                 */
                Issued? : DateTime;
                

                /**
                 * Extensions for issued
                 */
                _issued? : Element;
                

                /**
                 * Relevant time or time-period when this Contract is applicable.
                 */
                Applies? : Period;
                

                /**
                 * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
                 */
                ExpirationType? : CodeableConcept;
                

                /**
                 * The target entity impacted by or of interest to parties to the agreement.
                 */
                Subject? : Array<Reference>;
                

                /**
                 * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
                 */
                Authority? : Array<Reference>;
                

                /**
                 * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
                 */
                Domain? : Array<Reference>;
                

                /**
                 * Sites in which the contract is complied with,  exercised, or in force.
                 */
                Site? : Array<Reference>;
                

                /**
                 * A natural language name identifying this Contract definition, derivative, or instance in any legal state. Provides additional information about its content. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
                 */
                Subtitle? : String;
                

                /**
                 * Extensions for subtitle
                 */
                _subtitle? : Element;
                

                /**
                 * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
                 */
                Alias? : Array<String>;
                

                /**
                 * Extensions for alias
                 */
                _alias? : Array<Element>;
                

                /**
                 * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
                 */
                Author? : Reference;
                

                /**
                 * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
                 */
                Scope? : CodeableConcept;
                

                /**
                 * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
                 */
                TopicCodeableConcept? : CodeableConcept;
                

                /**
                 * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
                 */
                TopicReference? : Reference;
                

                /**
                 * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
                 */
                Type? : CodeableConcept;
                

                /**
                 * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
                 */
                SubType? : Array<CodeableConcept>;
                

                /**
                 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
                 */
                ContentDefinition? : Contract_ContentDefinition;
                

                /**
                 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
                 */
                Term? : Array<Contract_Term>;
                

                /**
                 * Information that may be needed by/relevant to the performer in their execution of this term action.
                 */
                SupportingInfo? : Array<Reference>;
                

                /**
                 * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
                 */
                RelevantHistory? : Array<Reference>;
                

                /**
                 * Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.
                 */
                Signer? : Array<Contract_Signer>;
                

                /**
                 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
                 */
                Friendly? : Array<Contract_Friendly>;
                

                /**
                 * List of Legal expressions or representations of this Contract.
                 */
                Legal? : Array<Contract_Legal>;
                

                /**
                 * List of Computable Policy Rule Language Representations of this Contract.
                 */
                Rule? : Array<Contract_Rule>;
                

                /**
                 * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
                 */
                LegallyBindingAttachment? : Attachment;
                

                /**
                 * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
                 */
                LegallyBindingReference? : Reference;
                
        }
        