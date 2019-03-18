
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_ContactDetail, IContactDetail } from './RTTI_ContactDetail';
import { RTTI_UsageContext, IUsageContext } from './RTTI_UsageContext';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';

import { RTTI_CapabilityStatement_Software, ICapabilityStatement_Software } from './RTTI_CapabilityStatement_Software';
import { RTTI_CapabilityStatement_Implementation, ICapabilityStatement_Implementation } from './RTTI_CapabilityStatement_Implementation';

import { RTTI_CapabilityStatement_Rest, ICapabilityStatement_Rest } from './RTTI_CapabilityStatement_Rest';
import { RTTI_CapabilityStatement_Messaging, ICapabilityStatement_Messaging } from './RTTI_CapabilityStatement_Messaging';
import { RTTI_CapabilityStatement_Document, ICapabilityStatement_Document } from './RTTI_CapabilityStatement_Document';

export enum CapabilityStatementStatusKind {
    draft = 'draft',
    active = 'active',
    retired = 'retired',
    unknown = 'unknown'
}
export enum CapabilityStatementKindKind {
    instance = 'instance',
    capability = 'capability',
    requirements = 'requirements'
}
const CapabilityStatementStatusKindKeys = t.keyof({
    [CapabilityStatementStatusKind.draft]: null,
    [CapabilityStatementStatusKind.active]: null,
    [CapabilityStatementStatusKind.retired]: null,
    [CapabilityStatementStatusKind.unknown]: null
});
const CapabilityStatementKindKindKeys = t.keyof({
    [CapabilityStatementKindKind.instance]: null,
    [CapabilityStatementKindKind.capability]: null,
    [CapabilityStatementKindKind.requirements]: null
});


export interface ICapabilityStatement {

    /**
     * This is a CapabilityStatement resource
     */
    resourceType: 'CapabilityStatement'


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
     * An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this capability statement is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the capability statement is stored on different servers.
     */
    url?: string;


    /**
     * Extensions for url
     */
    _url?: IElement;


    /**
     * The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;


    /**
     * Extensions for version
     */
    _version?: IElement;


    /**
     * A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;


    /**
     * Extensions for name
     */
    _name?: IElement;


    /**
     * A short, descriptive, user-friendly title for the capability statement.
     */
    title?: string;


    /**
     * Extensions for title
     */
    _title?: IElement;


    /**
     * The status of this capability statement. Enables tracking the life-cycle of the content.
     */
    status?: CapabilityStatementStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * A Boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;


    /**
     * Extensions for experimental
     */
    _experimental?: IElement;


    /**
     * The date  (and optionally time) when the capability statement was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.
     */
    date?: string;


    /**
     * Extensions for date
     */
    _date?: IElement;


    /**
     * The name of the organization or individual that published the capability statement.
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
     * A free text natural language description of the capability statement from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
     */
    description?: string;


    /**
     * Extensions for description
     */
    _description?: IElement;


    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate capability statement instances.
     */
    useContext?: IUsageContext[];


    /**
     * A legal or geographic region in which the capability statement is intended to be used.
     */
    jurisdiction?: ICodeableConcept[];


    /**
     * Explanation of why this capability statement is needed and why it has been designed as it has.
     */
    purpose?: string;


    /**
     * Extensions for purpose
     */
    _purpose?: IElement;


    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: string;


    /**
     * Extensions for copyright
     */
    _copyright?: IElement;


    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind?: CapabilityStatementKindKind;


    /**
     * Extensions for kind
     */
    _kind?: IElement;


    /**
     * Reference to a canonical URL of another CapabilityStatement that this software implements. This capability statement is a published API description that corresponds to a business service. The server may actually implement a subset of the capability statement it claims to implement, so the capability statement must specify the full capability details.
     */
    instantiates?: string[];


    /**
     * Reference to a canonical URL of another CapabilityStatement that this software adds to. The capability statement automatically includes everything in the other statement, and it is not duplicated, though the server may repeat the same resources, interactions and operations to add additional details to them.
     */
    imports?: string[];


    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: ICapabilityStatement_Software;


    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: ICapabilityStatement_Implementation;


    /**
     * The version of the FHIR specification on which this capability statement is based.
     */
    fhirVersion?: string;


    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: IElement;


    /**
     * A list of the formats supported by this implementation using their content types.
     */
    format?: string[];


    /**
     * Extensions for format
     */
    _format?: IElement[];


    /**
     * A list of the patch formats supported by this implementation using their content types.
     */
    patchFormat?: string[];


    /**
     * Extensions for patchFormat
     */
    _patchFormat?: IElement[];


    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: string[];


    /**
     * A definition of the restful capabilities of the solution, if any.
     */
    rest?: ICapabilityStatement_Rest[];


    /**
     * A description of the messaging capabilities of the solution.
     */
    messaging?: ICapabilityStatement_Messaging[];


    /**
     * A document definition.
     */
    document?: ICapabilityStatement_Document[];

}



export const RTTI_CapabilityStatement: t.Type<ICapabilityStatement> = t.recursion('ICapabilityStatement', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('CapabilityStatement')
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
            title: t.string,
            _title: RTTI_Element,
            status: CapabilityStatementStatusKindKeys,
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
            copyright: t.string,
            _copyright: RTTI_Element,
            kind: CapabilityStatementKindKindKeys,
            _kind: RTTI_Element,
            instantiates: t.array(t.string),
            imports: t.array(t.string),
            software: RTTI_CapabilityStatement_Software,
            implementation: RTTI_CapabilityStatement_Implementation,
            fhirVersion: t.string,
            _fhirVersion: RTTI_Element,
            format: t.array(t.string),
            _format: t.array(RTTI_Element),
            patchFormat: t.array(t.string),
            _patchFormat: t.array(RTTI_Element),
            implementationGuide: t.array(t.string),
            rest: t.array(RTTI_CapabilityStatement_Rest),
            messaging: t.array(RTTI_CapabilityStatement_Messaging),
            document: t.array(RTTI_CapabilityStatement_Document)
        })

    ])
);


