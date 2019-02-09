
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeSystem_Concept } from '../Resource/CodeSystem_Concept';
import { CodeSystem_Filter } from '../Resource/CodeSystem_Filter';
import { CodeSystem_Property } from '../Resource/CodeSystem_Property';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactDetail } from '../Resource/ContactDetail';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ResourceList } from '../Union/ResourceList';
import { UnsignedInt } from '../Scalar/UnsignedInt';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum CodeSystemStatusKind {
                draft,
active,
retired,
unknown
            }
export enum CodeSystemHierarchyMeaningKind {
                groupedBy,
isA,
partOf,
classifiedWith
            }
export enum CodeSystemContentKind {
                notPresent,
example,
fragment,
complete,
supplement
            }

        /**
         * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. 
         */
        export class CodeSystem  {

            constructor() {
                
            }

            
                /**
                 * This is a CodeSystem resource
                 */
                resourceType: string = 'CodeSystem;'
                

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
                 * An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this code system is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the code system is stored on different servers. This is used in [Coding](datatypes.html#Coding).system.
                 */
                url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance. (business identifier).
                 */
                identifier? : Identifier[];
                

                /**
                 * The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding](datatypes.html#Coding).version.
                 */
                version? : string;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A short, descriptive, user-friendly title for the code system.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The status of this code system. Enables tracking the life-cycle of the content.
                 */
                status? : CodeSystemStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A Boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                experimental? : boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * The date  (and optionally time) when the code system was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the code system.
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
                 * A free text natural language description of the code system from a consumer's perspective.
                 */
                description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate code system instances.
                 */
                useContext? : UsageContext[];
                

                /**
                 * A legal or geographic region in which the code system is intended to be used.
                 */
                jurisdiction? : CodeableConcept[];
                

                /**
                 * Explanation of why this code system is needed and why it has been designed as it has.
                 */
                purpose? : Markdown;
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Element;
                

                /**
                 * A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.
                 */
                copyright? : Markdown;
                

                /**
                 * Extensions for copyright
                 */
                _copyright? : Element;
                

                /**
                 * If code comparison is case sensitive when codes within this system are compared to each other.
                 */
                caseSensitive? : boolean;
                

                /**
                 * Extensions for caseSensitive
                 */
                _caseSensitive? : Element;
                

                /**
                 * Canonical URL of value set that contains the entire code system.
                 */
                valueSet? : Canonical;
                

                /**
                 * The meaning of the hierarchy of concepts as represnted in this resource.
                 */
                hierarchyMeaning? : CodeSystemHierarchyMeaningKind;
                

                /**
                 * Extensions for hierarchyMeaning
                 */
                _hierarchyMeaning? : Element;
                

                /**
                 * The code system defines a compositional (post-coordination) grammar.
                 */
                compositional? : boolean;
                

                /**
                 * Extensions for compositional
                 */
                _compositional? : Element;
                

                /**
                 * This flag is used to signify that the code system does not commit to concept permanence across versions. If true, a version must be specified when referencing this code system.
                 */
                versionNeeded? : boolean;
                

                /**
                 * Extensions for versionNeeded
                 */
                _versionNeeded? : Element;
                

                /**
                 * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
                 */
                content? : CodeSystemContentKind;
                

                /**
                 * Extensions for content
                 */
                _content? : Element;
                

                /**
                 * References the code system that this code system supplement is adding designations and properties to.
                 */
                supplements? : Canonical;
                

                /**
                 * The total number of concepts defined by the code system. Where the code system has a compositional grammar, the basis of this count is defined by the system steward.
                 */
                count? : UnsignedInt;
                

                /**
                 * Extensions for count
                 */
                _count? : Element;
                

                /**
                 * A filter that can be used in a value set compose statement when selecting concepts using a filter.
                 */
                filter? : CodeSystem_Filter[];
                

                /**
                 * A property defines an additional slot through which additional information can be provided about a concept.
                 */
                property? : CodeSystem_Property[];
                

                /**
                 * Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
                 */
                concept? : CodeSystem_Concept[];
                
        }
        