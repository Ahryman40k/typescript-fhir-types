
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactDetail } from '../Resource/ContactDetail';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { GraphDefinition_Link } from '../Resource/GraphDefinition_Link';
import { Id } from '../Scalar/Id';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum GraphDefinitionStatusKind {
                draft,
active,
retired,
unknown
            }

        /**
         * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. 
         */
        export class GraphDefinition  {

            constructor() {
                
            }

            
                /**
                 * This is a GraphDefinition resource
                 */
                resourceType: string = 'GraphDefinition;'
                

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
                 * An absolute URI that is used to identify this graph definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this graph definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the graph definition is stored on different servers.
                 */
                url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * The identifier that is used to identify this version of the graph definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the graph definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                 */
                version? : string;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A natural language name identifying the graph definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * The status of this graph definition. Enables tracking the life-cycle of the content.
                 */
                status? : GraphDefinitionStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A Boolean value to indicate that this graph definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                experimental? : boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * The date  (and optionally time) when the graph definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the graph definition changes.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the graph definition.
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
                 * A free text natural language description of the graph definition from a consumer's perspective.
                 */
                description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate graph definition instances.
                 */
                useContext? : UsageContext[];
                

                /**
                 * A legal or geographic region in which the graph definition is intended to be used.
                 */
                jurisdiction? : CodeableConcept[];
                

                /**
                 * Explanation of why this graph definition is needed and why it has been designed as it has.
                 */
                purpose? : Markdown;
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Element;
                

                /**
                 * The type of FHIR resource at which instances of this graph start.
                 */
                start? : Code;
                

                /**
                 * Extensions for start
                 */
                _start? : Element;
                

                /**
                 * The profile that describes the use of the base resource.
                 */
                profile? : Canonical;
                

                /**
                 * Links this graph makes rules about.
                 */
                link? : GraphDefinition_Link[];
                
        }
        