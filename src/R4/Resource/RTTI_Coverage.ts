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
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Coverage_Class, ICoverage_Class } from './RTTI_Coverage_Class';
import { RTTI_positiveInt } from '../Scalar/RTTI_positiveInt';
import {
	RTTI_Coverage_CostToBeneficiary,
	ICoverage_CostToBeneficiary
} from './RTTI_Coverage_CostToBeneficiary';
import { IDomainResource } from './IDomainResource';

export interface ICoverage extends IDomainResource {
	/**
	 * This is a Coverage resource
	 */
	resourceType: 'Coverage';

	/**
	 * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
	 */
	beneficiary: IReference;

	/**
	 * The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.
	 */
	payor: IReference[];

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
	 * A unique identifier assigned to this coverage.
	 */
	identifier?: IIdentifier[];

	/**
	 * The status of the resource instance.
	 */
	status?: string;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
	 */
	type?: ICodeableConcept;

	/**
	 * The party who 'owns' the insurance policy.
	 */
	policyHolder?: IReference;

	/**
	 * The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
	 */
	subscriber?: IReference;

	/**
	 * The insurer assigned ID for the Subscriber.
	 */
	subscriberId?: string;

	/**
	 * Extensions for subscriberId
	 */
	_subscriberId?: IElement;

	/**
	 * A unique identifier for a dependent under the coverage.
	 */
	dependent?: string;

	/**
	 * Extensions for dependent
	 */
	_dependent?: IElement;

	/**
	 * The relationship of beneficiary (patient) to the subscriber.
	 */
	relationship?: ICodeableConcept;

	/**
	 * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
	 */
	period?: IPeriod;

	/**
	 * A suite of underwriter specific classifiers.
	 */
	class?: ICoverage_Class[];

	/**
	 * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
	 */
	order?: number;

	/**
	 * Extensions for order
	 */
	_order?: IElement;

	/**
	 * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
	 */
	network?: string;

	/**
	 * Extensions for network
	 */
	_network?: IElement;

	/**
	 * A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card.
	 */
	costToBeneficiary?: ICoverage_CostToBeneficiary[];

	/**
	 * When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs.
	 */
	subrogation?: boolean;

	/**
	 * Extensions for subrogation
	 */
	_subrogation?: IElement;

	/**
	 * The policy(s) which constitute this insurance coverage.
	 */
	contract?: IReference[];
}

export const RTTI_Coverage: t.Type<ICoverage> = t.recursion('ICoverage', () =>
	t.intersection([
		t.type({
			resourceType: t.literal('Coverage'),
			beneficiary: RTTI_Reference,
			payor: t.array(RTTI_Reference)
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
			identifier: t.array(RTTI_Identifier),
			status: RTTI_code,
			_status: RTTI_Element,
			type: RTTI_CodeableConcept,
			policyHolder: RTTI_Reference,
			subscriber: RTTI_Reference,
			subscriberId: t.string,
			_subscriberId: RTTI_Element,
			dependent: t.string,
			_dependent: RTTI_Element,
			relationship: RTTI_CodeableConcept,
			period: RTTI_Period,
			class: t.array(RTTI_Coverage_Class),
			order: RTTI_positiveInt,
			_order: RTTI_Element,
			network: t.string,
			_network: RTTI_Element,
			costToBeneficiary: t.array(RTTI_Coverage_CostToBeneficiary),
			subrogation: t.boolean,
			_subrogation: RTTI_Element,
			contract: t.array(RTTI_Reference)
		})
	])
);
