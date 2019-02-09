
        import { Canonical } from '../Scalar/Canonical';
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
import { OperationDefinition_Overload } from '../Resource/OperationDefinition_Overload';
import { OperationDefinition_Parameter } from '../Resource/OperationDefinition_Parameter';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum OperationDefinitionStatusKind {
                draft,
active,
retired,
unknown
            }
export enum OperationDefinitionKindKind {
                operation,
query
            }

        /**
         * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). 
         */
        export class OperationDefinition  {

            constructor() {
                
            }

            
                /**
                 * This is a OperationDefinition resource
                 */
                resourceType: string = 'OperationDefinition;'
                

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
                 * An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this operation definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the operation definition is stored on different servers.
                 */
                url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                 */
                version? : string;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A short, descriptive, user-friendly title for the operation definition.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The status of this operation definition. Enables tracking the life-cycle of the content.
                 */
                status? : OperationDefinitionStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Whether this is an operation or a named query.
                 */
                kind? : OperationDefinitionKindKind;
                

                /**
                 * Extensions for kind
                 */
                _kind? : Element;
                

                /**
                 * A Boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                experimental? : boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * The date  (and optionally time) when the operation definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the operation definition.
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
                 * A free text natural language description of the operation definition from a consumer's perspective.
                 */
                description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate operation definition instances.
                 */
                useContext? : UsageContext[];
                

                /**
                 * A legal or geographic region in which the operation definition is intended to be used.
                 */
                jurisdiction? : CodeableConcept[];
                

                /**
                 * Explanation of why this operation definition is needed and why it has been designed as it has.
                 */
                purpose? : Markdown;
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Element;
                

                /**
                 * Whether the operation affects state = false (see [HTTP specification definition of idempotent](https://tools.ietf.org/html/rfc7231#section-4.2.2). Side effects such as producing audit trail entries do not count as 'changing state/content'.
                 */
                affectsState? : boolean;
                

                /**
                 * Extensions for affectsState
                 */
                _affectsState? : Element;
                

                /**
                 * The name used to invoke the operation.
                 */
                code? : Code;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * Additional information about how to use this operation or named query.
                 */
                comment? : Markdown;
                

                /**
                 * Extensions for comment
                 */
                _comment? : Element;
                

                /**
                 * Indicates that this operation definition is a constraining profile on the base.
                 */
                base? : Canonical;
                

                /**
                 * The types on which this operation can be executed.
                 */
                resource? : Code[];
                

                /**
                 * Extensions for resource
                 */
                _resource? : Element[];
                

                /**
                 * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
                 */
                system? : boolean;
                

                /**
                 * Extensions for system
                 */
                _system? : Element;
                

                /**
                 * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
                 */
                type? : boolean;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * Indicates whether this operation can be invoked on a particular instance of one of the given types.
                 */
                instance? : boolean;
                

                /**
                 * Extensions for instance
                 */
                _instance? : Element;
                

                /**
                 * Additional validation information for the in parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource as a whole.
                 */
                inputProfile? : Canonical;
                

                /**
                 * Additional validation information for the out parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource.
                 */
                outputProfile? : Canonical;
                

                /**
                 * The parameters for the operation/query.
                 */
                parameter? : OperationDefinition_Parameter[];
                

                /**
                 * Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.
                 */
                overload? : OperationDefinition_Overload[];
                
        }
        