import * as t from 'io-ts';
import { RTTI_id } from '../Scalar/RTTI_id';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_uri } from '../Scalar/RTTI_uri';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_code } from '../Scalar/RTTI_code';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_ContactDetail, IContactDetail } from './RTTI_ContactDetail';
import { RTTI_markdown } from '../Scalar/RTTI_markdown';
import { RTTI_UsageContext, IUsageContext } from './RTTI_UsageContext';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_canonical } from '../Scalar/RTTI_canonical';
import { RTTI_unsignedInt } from '../Scalar/RTTI_unsignedInt';
import {
	RTTI_CodeSystem_Filter,
	ICodeSystem_Filter
} from './RTTI_CodeSystem_Filter';
import {
	RTTI_CodeSystem_Property,
	ICodeSystem_Property
} from './RTTI_CodeSystem_Property';
import {
	RTTI_CodeSystem_Concept,
	ICodeSystem_Concept
} from './RTTI_CodeSystem_Concept';
export enum CodeSystemStatusKind {
	_draft = 'draft',
	_active = 'active',
	_retired = 'retired',
	_unknown = 'unknown'
}
export enum CodeSystemHierarchyMeaningKind {
	_groupedBy = 'grouped-by',
	_isA = 'is-a',
	_partOf = 'part-of',
	_classifiedWith = 'classified-with'
}
export enum CodeSystemContentKind {
	_notPresent = 'not-present',
	_example = 'example',
	_fragment = 'fragment',
	_complete = 'complete',
	_supplement = 'supplement'
}
import { createEnumType } from '../../EnumType';
import { IDomainResource } from './IDomainResource';

export interface ICodeSystem extends IDomainResource {
	/**
	 * This is a CodeSystem resource
	 */
	resourceType: 'CodeSystem';

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
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
	modifierExtension?: IExtension[];

	/**
	 * An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this code system is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the code system is stored on different servers. This is used in [Coding](datatypes.html#Coding).system.
	 */
	url?: string;

	/**
	 * Extensions for url
	 */
	_url?: IElement;

	/**
	 * A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.
	 */
	identifier?: IIdentifier[];

	/**
	 * The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding](datatypes.html#Coding).version.
	 */
	version?: string;

	/**
	 * Extensions for version
	 */
	_version?: IElement;

	/**
	 * A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * A short, descriptive, user-friendly title for the code system.
	 */
	title?: string;

	/**
	 * Extensions for title
	 */
	_title?: IElement;

	/**
	 * The date (and optionally time) when the code system resource was created or revised.
	 */
	status?: CodeSystemStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * A Boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
	 */
	experimental?: boolean;

	/**
	 * Extensions for experimental
	 */
	_experimental?: IElement;

	/**
	 * The date  (and optionally time) when the code system was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.
	 */
	date?: string;

	/**
	 * Extensions for date
	 */
	_date?: IElement;

	/**
	 * The name of the organization or individual that published the code system.
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
	 * A free text natural language description of the code system from a consumer's perspective.
	 */
	description?: string;

	/**
	 * Extensions for description
	 */
	_description?: IElement;

	/**
	 * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate code system instances.
	 */
	useContext?: IUsageContext[];

	/**
	 * A legal or geographic region in which the code system is intended to be used.
	 */
	jurisdiction?: ICodeableConcept[];

	/**
	 * Explanation of why this code system is needed and why it has been designed as it has.
	 */
	purpose?: string;

	/**
	 * Extensions for purpose
	 */
	_purpose?: IElement;

	/**
	 * A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.
	 */
	copyright?: string;

	/**
	 * Extensions for copyright
	 */
	_copyright?: IElement;

	/**
	 * If code comparison is case sensitive when codes within this system are compared to each other.
	 */
	caseSensitive?: boolean;

	/**
	 * Extensions for caseSensitive
	 */
	_caseSensitive?: IElement;

	/**
	 * Canonical reference to the value set that contains the entire code system.
	 */
	valueSet?: string;

	/**
	 * The meaning of the hierarchy of concepts as represented in this resource.
	 */
	hierarchyMeaning?: CodeSystemHierarchyMeaningKind;

	/**
	 * Extensions for hierarchyMeaning
	 */
	_hierarchyMeaning?: IElement;

	/**
	 * The code system defines a compositional (post-coordination) grammar.
	 */
	compositional?: boolean;

	/**
	 * Extensions for compositional
	 */
	_compositional?: IElement;

	/**
	 * This flag is used to signify that the code system does not commit to concept permanence across versions. If true, a version must be specified when referencing this code system.
	 */
	versionNeeded?: boolean;

	/**
	 * Extensions for versionNeeded
	 */
	_versionNeeded?: IElement;

	/**
	 * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
	 */
	content?: CodeSystemContentKind;

	/**
	 * Extensions for content
	 */
	_content?: IElement;

	/**
	 * The canonical URL of the code system that this code system supplement is adding designations and properties to.
	 */
	supplements?: string;

	/**
	 * The total number of concepts defined by the code system. Where the code system has a compositional grammar, the basis of this count is defined by the system steward.
	 */
	count?: number;

	/**
	 * Extensions for count
	 */
	_count?: IElement;

	/**
	 * A filter that can be used in a value set compose statement when selecting concepts using a filter.
	 */
	filter?: ICodeSystem_Filter[];

	/**
	 * A property defines an additional slot through which additional information can be provided about a concept.
	 */
	property?: ICodeSystem_Property[];

	/**
	 * Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meanings of the hierarchical relationships are.
	 */
	concept?: ICodeSystem_Concept[];
}

export const RTTI_CodeSystem: t.Type<ICodeSystem> = t.recursion(
	'ICodeSystem',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('CodeSystem')
			}),
			t.partial({
				id: RTTI_id,
				meta: RTTI_Meta,
				implicitRules: RTTI_uri,
				_implicitRules: RTTI_Element,
				language: RTTI_code,
				_language: RTTI_Element,
				text: RTTI_Narrative,
				contained: t.array(RTTI_ResourceList),
				extension: t.array(RTTI_Extension),
				modifierExtension: t.array(RTTI_Extension),
				url: RTTI_uri,
				_url: RTTI_Element,
				identifier: t.array(RTTI_Identifier),
				version: t.string,
				_version: RTTI_Element,
				name: t.string,
				_name: RTTI_Element,
				title: t.string,
				_title: RTTI_Element,
				status: createEnumType<CodeSystemStatusKind>(
					CodeSystemStatusKind,
					'CodeSystemStatusKind'
				),
				_status: RTTI_Element,
				experimental: t.boolean,
				_experimental: RTTI_Element,
				date: RTTI_dateTime,
				_date: RTTI_Element,
				publisher: t.string,
				_publisher: RTTI_Element,
				contact: t.array(RTTI_ContactDetail),
				description: RTTI_markdown,
				_description: RTTI_Element,
				useContext: t.array(RTTI_UsageContext),
				jurisdiction: t.array(RTTI_CodeableConcept),
				purpose: RTTI_markdown,
				_purpose: RTTI_Element,
				copyright: RTTI_markdown,
				_copyright: RTTI_Element,
				caseSensitive: t.boolean,
				_caseSensitive: RTTI_Element,
				valueSet: RTTI_canonical,
				hierarchyMeaning: createEnumType<CodeSystemHierarchyMeaningKind>(
					CodeSystemHierarchyMeaningKind,
					'CodeSystemHierarchyMeaningKind'
				),
				_hierarchyMeaning: RTTI_Element,
				compositional: t.boolean,
				_compositional: RTTI_Element,
				versionNeeded: t.boolean,
				_versionNeeded: RTTI_Element,
				content: createEnumType<CodeSystemContentKind>(
					CodeSystemContentKind,
					'CodeSystemContentKind'
				),
				_content: RTTI_Element,
				supplements: RTTI_canonical,
				count: RTTI_unsignedInt,
				_count: RTTI_Element,
				filter: t.array(RTTI_CodeSystem_Filter),
				property: t.array(RTTI_CodeSystem_Property),
				concept: t.array(RTTI_CodeSystem_Concept)
			})
		])
);
