
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_ContactDetail, IContactDetail } from './RTTI_ContactDetail';
import { RTTI_UsageContext, IUsageContext } from './RTTI_UsageContext';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';


import { RTTI_SearchParameter_Component, ISearchParameter_Component } from './RTTI_SearchParameter_Component';

export enum SearchParameterComparatorKind {
    eq = 'eq',
    ne = 'ne',
    gt = 'gt',
    lt = 'lt',
    ge = 'ge',
    le = 'le',
    sa = 'sa',
    eb = 'eb',
    ap = 'ap'
}
export enum SearchParameterModifierKind {
    missing = 'missing',
    exact = 'exact',
    contains = 'contains',
    not = 'not',
    text = 'text',
    in = 'in',
    notIn = 'notIn',
    below = 'below',
    above = 'above',
    type = 'type',
    identifier = 'identifier',
    ofType = 'ofType'
}
export enum SearchParameterStatusKind {
    draft = 'draft',
    active = 'active',
    retired = 'retired',
    unknown = 'unknown'
}
export enum SearchParameterTypeKind {
    number = 'number',
    date = 'date',
    string = 'string',
    token = 'token',
    reference = 'reference',
    composite = 'composite',
    quantity = 'quantity',
    uri = 'uri',
    special = 'special'
}
export enum SearchParameterXpathUsageKind {
    normal = 'normal',
    phonetic = 'phonetic',
    nearby = 'nearby',
    distance = 'distance',
    other = 'other'
}
const SearchParameterComparatorKindKeys = t.keyof({
    [SearchParameterComparatorKind.eq]: null,
    [SearchParameterComparatorKind.ne]: null,
    [SearchParameterComparatorKind.gt]: null,
    [SearchParameterComparatorKind.lt]: null,
    [SearchParameterComparatorKind.ge]: null,
    [SearchParameterComparatorKind.le]: null,
    [SearchParameterComparatorKind.sa]: null,
    [SearchParameterComparatorKind.eb]: null,
    [SearchParameterComparatorKind.ap]: null
});
const SearchParameterModifierKindKeys = t.keyof({
    [SearchParameterModifierKind.missing]: null,
    [SearchParameterModifierKind.exact]: null,
    [SearchParameterModifierKind.contains]: null,
    [SearchParameterModifierKind.not]: null,
    [SearchParameterModifierKind.text]: null,
    [SearchParameterModifierKind.in]: null,
    [SearchParameterModifierKind.notIn]: null,
    [SearchParameterModifierKind.below]: null,
    [SearchParameterModifierKind.above]: null,
    [SearchParameterModifierKind.type]: null,
    [SearchParameterModifierKind.identifier]: null,
    [SearchParameterModifierKind.ofType]: null
});
const SearchParameterStatusKindKeys = t.keyof({
    [SearchParameterStatusKind.draft]: null,
    [SearchParameterStatusKind.active]: null,
    [SearchParameterStatusKind.retired]: null,
    [SearchParameterStatusKind.unknown]: null
});
const SearchParameterTypeKindKeys = t.keyof({
    [SearchParameterTypeKind.number]: null,
    [SearchParameterTypeKind.date]: null,
    [SearchParameterTypeKind.string]: null,
    [SearchParameterTypeKind.token]: null,
    [SearchParameterTypeKind.reference]: null,
    [SearchParameterTypeKind.composite]: null,
    [SearchParameterTypeKind.quantity]: null,
    [SearchParameterTypeKind.uri]: null,
    [SearchParameterTypeKind.special]: null
});
const SearchParameterXpathUsageKindKeys = t.keyof({
    [SearchParameterXpathUsageKind.normal]: null,
    [SearchParameterXpathUsageKind.phonetic]: null,
    [SearchParameterXpathUsageKind.nearby]: null,
    [SearchParameterXpathUsageKind.distance]: null,
    [SearchParameterXpathUsageKind.other]: null
});


export interface ISearchParameter {

    /**
     * This is a SearchParameter resource
     */
    resourceType: 'SearchParameter';


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this search parameter is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the search parameter is stored on different servers.
     */
    url?: string;


    /**
     * Extensions for url
     */
    _url?: IElement;


    /**
     * The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;


    /**
     * Extensions for version
     */
    _version?: IElement;


    /**
     * A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;


    /**
     * Extensions for name
     */
    _name?: IElement;


    /**
     * Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. i.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.
     */
    derivedFrom?: string;


    /**
     * The status of this search parameter. Enables tracking the life-cycle of the content.
     */
    status?: SearchParameterStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * A Boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;


    /**
     * Extensions for experimental
     */
    _experimental?: IElement;


    /**
     * The date  (and optionally time) when the search parameter was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
     */
    date?: string;


    /**
     * Extensions for date
     */
    _date?: IElement;


    /**
     * The name of the organization or individual that published the search parameter.
     */
    publisher?: string;


    /**
     * Extensions for publisher
     */
    _publisher?: IElement;


    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: IContactDetail[];


    /**
     * A free text natural language description of the search parameter from a consumer's perspective. and how it used.
     */
    description?: string;


    /**
     * Extensions for description
     */
    _description?: IElement;


    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate search parameter instances.
     */
    useContext?: IUsageContext[];


    /**
     * A legal or geographic region in which the search parameter is intended to be used.
     */
    jurisdiction?: ICodeableConcept[];


    /**
     * Explanation of why this search parameter is needed and why it has been designed as it has.
     */
    purpose?: string;


    /**
     * Extensions for purpose
     */
    _purpose?: IElement;


    /**
     * The code used in the URL or the parameter name in a parameters resource for this search parameter.
     */
    code?: string;


    /**
     * Extensions for code
     */
    _code?: IElement;


    /**
     * The base resource type(s) that this search parameter can be used against.
     */
    base?: string[];


    /**
     * Extensions for base
     */
    _base?: IElement[];


    /**
     * The type of value that a search parameter may contain, and how the content is interpreted.
     */
    type?: SearchParameterTypeKind;


    /**
     * Extensions for type
     */
    _type?: IElement;


    /**
     * A FHIRPath expression that returns a set of elements for the search parameter.
     */
    expression?: string;


    /**
     * Extensions for expression
     */
    _expression?: IElement;


    /**
     * An XPath expression that returns a set of elements for the search parameter.
     */
    xpath?: string;


    /**
     * Extensions for xpath
     */
    _xpath?: IElement;


    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: SearchParameterXpathUsageKind;


    /**
     * Extensions for xpathUsage
     */
    _xpathUsage?: IElement;


    /**
     * Types of resource (if a resource is referenced).
     */
    target?: string[];


    /**
     * Extensions for target
     */
    _target?: IElement[];


    /**
     * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
     */
    multipleOr?: boolean;


    /**
     * Extensions for multipleOr
     */
    _multipleOr?: IElement;


    /**
     * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
     */
    multipleAnd?: boolean;


    /**
     * Extensions for multipleAnd
     */
    _multipleAnd?: IElement;


    /**
     * Comparators supported for the search parameter.
     */
    comparator?: SearchParameterComparatorKind[];


    /**
     * Extensions for comparator
     */
    _comparator?: IElement[];


    /**
     * A modifier supported for the search parameter.
     */
    modifier?: SearchParameterModifierKind[];


    /**
     * Extensions for modifier
     */
    _modifier?: IElement[];


    /**
     * Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.
     */
    chain?: string[];


    /**
     * Extensions for chain
     */
    _chain?: IElement[];


    /**
     * Used to define the parts of a composite search parameter.
     */
    component?: ISearchParameter_Component[];

}



export const RTTI_SearchParameter: t.Type<ISearchParameter> = t.recursion('ISearchParameter', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('SearchParameter')
        })
        ,

        t.partial({
            id: t.string,
            meta: RTTI_Meta,
            implicitRules: t.string,
            _implicitRules: RTTI_Element,
            language: t.string,
            _language: RTTI_Element,
            text: RTTI_Narrative,
            contained: t.array(RTTI_ResourceList),
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            url: t.string,
            _url: RTTI_Element,
            version: t.string,
            _version: RTTI_Element,
            name: t.string,
            _name: RTTI_Element,
            derivedFrom: t.string,
            status: SearchParameterStatusKindKeys,
            _status: RTTI_Element,
            experimental: t.boolean,
            _experimental: RTTI_Element,
            date: t.string,
            _date: RTTI_Element,
            publisher: t.string,
            _publisher: RTTI_Element,
            contact: t.array(RTTI_ContactDetail),
            description: t.string,
            _description: RTTI_Element,
            useContext: t.array(RTTI_UsageContext),
            jurisdiction: t.array(RTTI_CodeableConcept),
            purpose: t.string,
            _purpose: RTTI_Element,
            code: t.string,
            _code: RTTI_Element,
            base: t.array(t.string),
            _base: t.array(RTTI_Element),
            type: SearchParameterTypeKindKeys,
            _type: RTTI_Element,
            expression: t.string,
            _expression: RTTI_Element,
            xpath: t.string,
            _xpath: RTTI_Element,
            xpathUsage: SearchParameterXpathUsageKindKeys,
            _xpathUsage: RTTI_Element,
            target: t.array(t.string),
            _target: t.array(RTTI_Element),
            multipleOr: t.boolean,
            _multipleOr: RTTI_Element,
            multipleAnd: t.boolean,
            _multipleAnd: RTTI_Element,
            comparator: t.array(SearchParameterComparatorKindKeys),
            _comparator: t.array(RTTI_Element),
            modifier: t.array(SearchParameterModifierKindKeys),
            _modifier: t.array(RTTI_Element),
            chain: t.array(t.string),
            _chain: t.array(RTTI_Element),
            component: t.array(RTTI_SearchParameter_Component)
        })

    ])
);


