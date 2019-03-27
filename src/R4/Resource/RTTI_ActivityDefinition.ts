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
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_ContactDetail, IContactDetail } from './RTTI_ContactDetail';
import { RTTI_markdown } from '../Scalar/RTTI_markdown';
import { RTTI_UsageContext, IUsageContext } from './RTTI_UsageContext';
import { RTTI_date } from '../Scalar/RTTI_date';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_RelatedArtifact, IRelatedArtifact } from './RTTI_RelatedArtifact';
import { RTTI_canonical } from '../Scalar/RTTI_canonical';
import { RTTI_Timing, ITiming } from './RTTI_Timing';
import { RTTI_Age, IAge } from './RTTI_Age';
import { RTTI_Range, IRange } from './RTTI_Range';
import { RTTI_Duration, IDuration } from './RTTI_Duration';
import {
	RTTI_ActivityDefinition_Participant,
	IActivityDefinition_Participant
} from './RTTI_ActivityDefinition_Participant';
import { RTTI_Quantity, IQuantity } from './RTTI_Quantity';
import { RTTI_Dosage, IDosage } from './RTTI_Dosage';
import {
	RTTI_ActivityDefinition_DynamicValue,
	IActivityDefinition_DynamicValue
} from './RTTI_ActivityDefinition_DynamicValue';
export enum ActivityDefinitionStatusKind {
	_draft = 'draft',
	_active = 'active',
	_retired = 'retired',
	_unknown = 'unknown'
}
import { createEnumType } from '../../EnumType';

export interface IActivityDefinition {
	/**
	 * This is a ActivityDefinition resource
	 */
	resourceType: 'ActivityDefinition';

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
	 * An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this activity definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the activity definition is stored on different servers.
	 */
	url?: string;

	/**
	 * Extensions for url
	 */
	_url?: IElement;

	/**
	 * A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
	 */
	identifier?: IIdentifier[];

	/**
	 * The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
	 */
	version?: string;

	/**
	 * Extensions for version
	 */
	_version?: IElement;

	/**
	 * A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * A short, descriptive, user-friendly title for the activity definition.
	 */
	title?: string;

	/**
	 * Extensions for title
	 */
	_title?: IElement;

	/**
	 * An explanatory or alternate title for the activity definition giving additional information about its content.
	 */
	subtitle?: string;

	/**
	 * Extensions for subtitle
	 */
	_subtitle?: IElement;

	/**
	 * The status of this activity definition. Enables tracking the life-cycle of the content.
	 */
	status?: ActivityDefinitionStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * A Boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
	 */
	experimental?: boolean;

	/**
	 * Extensions for experimental
	 */
	_experimental?: IElement;

	/**
	 * A code or group definition that describes the intended subject of the activity being defined.
	 */
	subjectCodeableConcept?: ICodeableConcept;

	/**
	 * A code or group definition that describes the intended subject of the activity being defined.
	 */
	subjectReference?: IReference;

	/**
	 * The date  (and optionally time) when the activity definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.
	 */
	date?: string;

	/**
	 * Extensions for date
	 */
	_date?: IElement;

	/**
	 * The name of the organization or individual that published the activity definition.
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
	 * A free text natural language description of the activity definition from a consumer's perspective.
	 */
	description?: string;

	/**
	 * Extensions for description
	 */
	_description?: IElement;

	/**
	 * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate activity definition instances.
	 */
	useContext?: IUsageContext[];

	/**
	 * A legal or geographic region in which the activity definition is intended to be used.
	 */
	jurisdiction?: ICodeableConcept[];

	/**
	 * Explanation of why this activity definition is needed and why it has been designed as it has.
	 */
	purpose?: string;

	/**
	 * Extensions for purpose
	 */
	_purpose?: IElement;

	/**
	 * A detailed description of how the activity definition is used from a clinical perspective.
	 */
	usage?: string;

	/**
	 * Extensions for usage
	 */
	_usage?: IElement;

	/**
	 * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
	 */
	copyright?: string;

	/**
	 * Extensions for copyright
	 */
	_copyright?: IElement;

	/**
	 * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
	 */
	approvalDate?: string;

	/**
	 * Extensions for approvalDate
	 */
	_approvalDate?: IElement;

	/**
	 * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
	 */
	lastReviewDate?: string;

	/**
	 * Extensions for lastReviewDate
	 */
	_lastReviewDate?: IElement;

	/**
	 * The period during which the activity definition content was or is planned to be in active use.
	 */
	effectivePeriod?: IPeriod;

	/**
	 * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
	 */
	topic?: ICodeableConcept[];

	/**
	 * An individiual or organization primarily involved in the creation and maintenance of the content.
	 */
	author?: IContactDetail[];

	/**
	 * An individual or organization primarily responsible for internal coherence of the content.
	 */
	editor?: IContactDetail[];

	/**
	 * An individual or organization primarily responsible for review of some aspect of the content.
	 */
	reviewer?: IContactDetail[];

	/**
	 * An individual or organization responsible for officially endorsing the content for use in some setting.
	 */
	endorser?: IContactDetail[];

	/**
	 * Related artifacts such as additional documentation, justification, or bibliographic references.
	 */
	relatedArtifact?: IRelatedArtifact[];

	/**
	 * A reference to a Library resource containing any formal logic used by the activity definition.
	 */
	library?: string[];

	/**
	 * A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.
	 */
	kind?: string;

	/**
	 * Extensions for kind
	 */
	_kind?: IElement;

	/**
	 * A profile to which the target of the activity definition is expected to conform.
	 */
	profile?: string;

	/**
	 * Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.
	 */
	code?: ICodeableConcept;

	/**
	 * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
	 */
	intent?: string;

	/**
	 * Extensions for intent
	 */
	_intent?: IElement;

	/**
	 * Indicates how quickly the activity  should be addressed with respect to other requests.
	 */
	priority?: string;

	/**
	 * Extensions for priority
	 */
	_priority?: IElement;

	/**
	 * Set this to true if the definition is to indicate that a particular activity should NOT be performed. If true, this element should be interpreted to reinforce a negative coding. For example NPO as a code with a doNotPerform of true would still indicate to NOT perform the action.
	 */
	doNotPerform?: boolean;

	/**
	 * Extensions for doNotPerform
	 */
	_doNotPerform?: IElement;

	/**
	 * The period, timing or frequency upon which the described activity is to occur.
	 */
	timingTiming?: ITiming;

	/**
	 * The period, timing or frequency upon which the described activity is to occur.
	 */
	timingDateTime?: string;

	/**
	 * Extensions for timingDateTime
	 */
	_timingDateTime?: IElement;

	/**
	 * The period, timing or frequency upon which the described activity is to occur.
	 */
	timingAge?: IAge;

	/**
	 * The period, timing or frequency upon which the described activity is to occur.
	 */
	timingPeriod?: IPeriod;

	/**
	 * The period, timing or frequency upon which the described activity is to occur.
	 */
	timingRange?: IRange;

	/**
	 * The period, timing or frequency upon which the described activity is to occur.
	 */
	timingDuration?: IDuration;

	/**
	 * Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
	 */
	location?: IReference;

	/**
	 * Indicates who should participate in performing the action described.
	 */
	participant?: IActivityDefinition_Participant[];

	/**
	 * Identifies the food, drug or other product being consumed or supplied in the activity.
	 */
	productReference?: IReference;

	/**
	 * Identifies the food, drug or other product being consumed or supplied in the activity.
	 */
	productCodeableConcept?: ICodeableConcept;

	/**
	 * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
	 */
	quantity?: IQuantity;

	/**
	 * Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources.
	 */
	dosage?: IDosage[];

	/**
	 * Indicates the sites on the subject's body where the procedure should be performed (I.e. the target sites).
	 */
	bodySite?: ICodeableConcept[];

	/**
	 * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
	 */
	specimenRequirement?: IReference[];

	/**
	 * Defines observation requirements for the action to be performed, such as body weight or surface area.
	 */
	observationRequirement?: IReference[];

	/**
	 * Defines the observations that are expected to be produced by the action.
	 */
	observationResultRequirement?: IReference[];

	/**
	 * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
	 */
	transform?: string;

	/**
	 * Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the request resource that would contain the result.
	 */
	dynamicValue?: IActivityDefinition_DynamicValue[];
}

export const RTTI_ActivityDefinition: t.Type<IActivityDefinition> = t.recursion(
	'IActivityDefinition',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('ActivityDefinition')
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
				subtitle: t.string,
				_subtitle: RTTI_Element,
				status: createEnumType<ActivityDefinitionStatusKind>(
					ActivityDefinitionStatusKind,
					'ActivityDefinitionStatusKind'
				),
				_status: RTTI_Element,
				experimental: t.boolean,
				_experimental: RTTI_Element,
				subjectCodeableConcept: RTTI_CodeableConcept,
				subjectReference: RTTI_Reference,
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
				usage: t.string,
				_usage: RTTI_Element,
				copyright: RTTI_markdown,
				_copyright: RTTI_Element,
				approvalDate: RTTI_date,
				_approvalDate: RTTI_Element,
				lastReviewDate: RTTI_date,
				_lastReviewDate: RTTI_Element,
				effectivePeriod: RTTI_Period,
				topic: t.array(RTTI_CodeableConcept),
				author: t.array(RTTI_ContactDetail),
				editor: t.array(RTTI_ContactDetail),
				reviewer: t.array(RTTI_ContactDetail),
				endorser: t.array(RTTI_ContactDetail),
				relatedArtifact: t.array(RTTI_RelatedArtifact),
				library: t.array(RTTI_canonical),
				kind: RTTI_code,
				_kind: RTTI_Element,
				profile: RTTI_canonical,
				code: RTTI_CodeableConcept,
				intent: RTTI_code,
				_intent: RTTI_Element,
				priority: RTTI_code,
				_priority: RTTI_Element,
				doNotPerform: t.boolean,
				_doNotPerform: RTTI_Element,
				timingTiming: RTTI_Timing,
				timingDateTime: t.string,
				_timingDateTime: RTTI_Element,
				timingAge: RTTI_Age,
				timingPeriod: RTTI_Period,
				timingRange: RTTI_Range,
				timingDuration: RTTI_Duration,
				location: RTTI_Reference,
				participant: t.array(RTTI_ActivityDefinition_Participant),
				productReference: RTTI_Reference,
				productCodeableConcept: RTTI_CodeableConcept,
				quantity: RTTI_Quantity,
				dosage: t.array(RTTI_Dosage),
				bodySite: t.array(RTTI_CodeableConcept),
				specimenRequirement: t.array(RTTI_Reference),
				observationRequirement: t.array(RTTI_Reference),
				observationResultRequirement: t.array(RTTI_Reference),
				transform: RTTI_canonical,
				dynamicValue: t.array(RTTI_ActivityDefinition_DynamicValue)
			})
		])
);
