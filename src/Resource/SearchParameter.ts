
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
import { ResourceList } from '../Union/ResourceList';
import { SearchParameter_Component } from '../Resource/SearchParameter_Component';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum SearchParameterComparatorKind {
                eq,
ne,
gt,
lt,
ge,
le,
sa,
eb,
ap
            }
export enum SearchParameterModifierKind {
                missing,
exact,
contains,
not,
text,
in,
notIn,
below,
above,
type,
identifier,
ofType
            }
export enum SearchParameterStatusKind {
                draft,
active,
retired,
unknown
            }
export enum SearchParameterTypeKind {
                number,
date,
string,
token,
reference,
composite,
quantity,
uri,
special
            }
export enum SearchParameterXpathUsageKind {
                normal,
phonetic,
nearby,
distance,
other
            }

        /**
         * A search parameter that defines a named search item that can be used to search/filter on a resource. 
         */
        export class SearchParameter  {

            constructor() {
                
            }

            
                /**
                 * This is a SearchParameter resource
                 */
                ResourceType: string = 'SearchParameter;'
                

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
                 * An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this search parameter is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the search parameter is stored on different servers.
                 */
                Url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                 */
                Version? : String;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. i.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.
                 */
                DerivedFrom? : Canonical;
                

                /**
                 * The status of this search parameter. Enables tracking the life-cycle of the content.
                 */
                Status? : SearchParameterStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A Boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                Experimental? : Boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * The date  (and optionally time) when the search parameter was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the search parameter.
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
                 * A free text natural language description of the search parameter from a consumer's perspective. and how it used.
                 */
                Description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate search parameter instances.
                 */
                UseContext? : Array<UsageContext>;
                

                /**
                 * A legal or geographic region in which the search parameter is intended to be used.
                 */
                Jurisdiction? : Array<CodeableConcept>;
                

                /**
                 * Explanation of why this search parameter is needed and why it has been designed as it has.
                 */
                Purpose? : Markdown;
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Element;
                

                /**
                 * The code used in the URL or the parameter name in a parameters resource for this search parameter.
                 */
                Code? : Code;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * The base resource type(s) that this search parameter can be used against.
                 */
                Base? : Array<Code>;
                

                /**
                 * Extensions for base
                 */
                _base? : Array<Element>;
                

                /**
                 * The type of value that a search parameter may contain, and how the content is interpreted.
                 */
                Type? : SearchParameterTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * A FHIRPath expression that returns a set of elements for the search parameter.
                 */
                Expression? : String;
                

                /**
                 * Extensions for expression
                 */
                _expression? : Element;
                

                /**
                 * An XPath expression that returns a set of elements for the search parameter.
                 */
                Xpath? : String;
                

                /**
                 * Extensions for xpath
                 */
                _xpath? : Element;
                

                /**
                 * How the search parameter relates to the set of elements returned by evaluating the xpath query.
                 */
                XpathUsage? : SearchParameterXpathUsageKind;
                

                /**
                 * Extensions for xpathUsage
                 */
                _xpathUsage? : Element;
                

                /**
                 * Types of resource (if a resource is referenced).
                 */
                Target? : Array<Code>;
                

                /**
                 * Extensions for target
                 */
                _target? : Array<Element>;
                

                /**
                 * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
                 */
                MultipleOr? : Boolean;
                

                /**
                 * Extensions for multipleOr
                 */
                _multipleOr? : Element;
                

                /**
                 * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
                 */
                MultipleAnd? : Boolean;
                

                /**
                 * Extensions for multipleAnd
                 */
                _multipleAnd? : Element;
                

                /**
                 * Comparators supported for the search parameter.
                 */
                Comparator? : SearchParameterComparatorKind[];
                

                /**
                 * Extensions for comparator
                 */
                _comparator? : Array<Element>;
                

                /**
                 * A modifier supported for the search parameter.
                 */
                Modifier? : SearchParameterModifierKind[];
                

                /**
                 * Extensions for modifier
                 */
                _modifier? : Array<Element>;
                

                /**
                 * Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.
                 */
                Chain? : Array<String>;
                

                /**
                 * Extensions for chain
                 */
                _chain? : Array<Element>;
                

                /**
                 * Used to define the parts of a composite search parameter.
                 */
                Component? : Array<SearchParameter_Component>;
                
        }
        