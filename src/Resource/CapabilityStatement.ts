
        import { Canonical } from '../Scalar/Canonical';
import { CapabilityStatement_Document } from '../Resource/CapabilityStatement_Document';
import { CapabilityStatement_Implementation } from '../Resource/CapabilityStatement_Implementation';
import { CapabilityStatement_Messaging } from '../Resource/CapabilityStatement_Messaging';
import { CapabilityStatement_Rest } from '../Resource/CapabilityStatement_Rest';
import { CapabilityStatement_Software } from '../Resource/CapabilityStatement_Software';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactDetail } from '../Resource/ContactDetail';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum CapabilityStatementStatusKind {
                draft,
active,
retired,
unknown
            }
export enum CapabilityStatementKindKind {
                instance,
capability,
requirements
            }

        /**
         * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. 
         */
        export class CapabilityStatement  {

            constructor() {
                
            }

            
                /**
                 * This is a CapabilityStatement resource
                 */
                ResourceType: string = 'CapabilityStatement;'
                

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
                 * An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this capability statement is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the capability statement is stored on different servers.
                 */
                Url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                 */
                Version? : String;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A short, descriptive, user-friendly title for the capability statement.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The status of this capability statement. Enables tracking the life-cycle of the content.
                 */
                Status? : CapabilityStatementStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A Boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                Experimental? : Boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * The date  (and optionally time) when the capability statement was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the capability statement.
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
                 * A free text natural language description of the capability statement from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
                 */
                Description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate capability statement instances.
                 */
                UseContext? : Array<UsageContext>;
                

                /**
                 * A legal or geographic region in which the capability statement is intended to be used.
                 */
                Jurisdiction? : Array<CodeableConcept>;
                

                /**
                 * Explanation of why this capability statement is needed and why it has been designed as it has.
                 */
                Purpose? : Markdown;
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Element;
                

                /**
                 * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
                 */
                Copyright? : Markdown;
                

                /**
                 * Extensions for copyright
                 */
                _copyright? : Element;
                

                /**
                 * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
                 */
                Kind? : CapabilityStatementKindKind;
                

                /**
                 * Extensions for kind
                 */
                _kind? : Element;
                

                /**
                 * Reference to a canonical URL of another CapabilityStatement that this software implements. This capability statement is a published API description that corresponds to a business service. The server may actually implement a subset of the capability statement it claims to implement, so the capability statement must specify the full capability details.
                 */
                Instantiates? : Array<Canonical>;
                

                /**
                 * Reference to a canonical URL of another CapabilityStatement that this software adds to. The capability statement automatically includes everything in the other statement, and it is not duplicated, though the server may repeat the same resources, interactions and operations to add additional details to them.
                 */
                Imports? : Array<Canonical>;
                

                /**
                 * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
                 */
                Software? : CapabilityStatement_Software;
                

                /**
                 * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
                 */
                Implementation? : CapabilityStatement_Implementation;
                

                /**
                 * The version of the FHIR specification on which this capability statement is based.
                 */
                FhirVersion? : Id;
                

                /**
                 * Extensions for fhirVersion
                 */
                _fhirVersion? : Element;
                

                /**
                 * A list of the formats supported by this implementation using their content types.
                 */
                Format? : Array<Code>;
                

                /**
                 * Extensions for format
                 */
                _format? : Array<Element>;
                

                /**
                 * A list of the patch formats supported by this implementation using their content types.
                 */
                PatchFormat? : Array<Code>;
                

                /**
                 * Extensions for patchFormat
                 */
                _patchFormat? : Array<Element>;
                

                /**
                 * A list of implementation guides that the server does (or should) support in their entirety.
                 */
                ImplementationGuide? : Array<Canonical>;
                

                /**
                 * A definition of the restful capabilities of the solution, if any.
                 */
                Rest? : Array<CapabilityStatement_Rest>;
                

                /**
                 * A description of the messaging capabilities of the solution.
                 */
                Messaging? : Array<CapabilityStatement_Messaging>;
                

                /**
                 * A document definition.
                 */
                Document? : Array<CapabilityStatement_Document>;
                
        }
        