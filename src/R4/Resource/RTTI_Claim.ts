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
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Claim_Related, IClaim_Related } from './RTTI_Claim_Related';
import { RTTI_Claim_Payee, IClaim_Payee } from './RTTI_Claim_Payee';
import { RTTI_Claim_CareTeam, IClaim_CareTeam } from './RTTI_Claim_CareTeam';
import {
	RTTI_Claim_SupportingInfo,
	IClaim_SupportingInfo
} from './RTTI_Claim_SupportingInfo';
import { RTTI_Claim_Diagnosis, IClaim_Diagnosis } from './RTTI_Claim_Diagnosis';
import { RTTI_Claim_Procedure, IClaim_Procedure } from './RTTI_Claim_Procedure';
import { RTTI_Claim_Insurance, IClaim_Insurance } from './RTTI_Claim_Insurance';
import { RTTI_Claim_Accident, IClaim_Accident } from './RTTI_Claim_Accident';
import { RTTI_Claim_Item, IClaim_Item } from './RTTI_Claim_Item';
import { RTTI_Money, IMoney } from './RTTI_Money';
export enum ClaimUseKind {
	_claim = 'claim',
	_preauthorization = 'preauthorization',
	_predetermination = 'predetermination'
}
import { createEnumType } from '../../EnumType';

export interface IClaim {
	/**
	 * This is a Claim resource
	 */
	resourceType: 'Claim';

	/**
	 * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
	 */
	type: ICodeableConcept;

	/**
	 * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
	 */
	patient: IReference;

	/**
	 * The provider which is responsible for the claim, predetermination or preauthorization.
	 */
	provider: IReference;

	/**
	 * The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
	 */
	priority: ICodeableConcept;

	/**
	 * Financial instruments for reimbursement for the health care products and services specified on the claim.
	 */
	insurance: IClaim_Insurance[];

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
	 * A unique identifier assigned to this claim.
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
	 * A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
	 */
	subType?: ICodeableConcept;

	/**
	 * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
	 */
	use?: ClaimUseKind;

	/**
	 * Extensions for use
	 */
	_use?: IElement;

	/**
	 * The period for which charges are being submitted.
	 */
	billablePeriod?: IPeriod;

	/**
	 * The date this resource was created.
	 */
	created?: string;

	/**
	 * Extensions for created
	 */
	_created?: IElement;

	/**
	 * Individual who created the claim, predetermination or preauthorization.
	 */
	enterer?: IReference;

	/**
	 * The Insurer who is target of the request.
	 */
	insurer?: IReference;

	/**
	 * A code to indicate whether and for whom funds are to be reserved for future claims.
	 */
	fundsReserve?: ICodeableConcept;

	/**
	 * Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
	 */
	related?: IClaim_Related[];

	/**
	 * Prescription to support the dispensing of pharmacy, device or vision products.
	 */
	prescription?: IReference;

	/**
	 * Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products.
	 */
	originalPrescription?: IReference;

	/**
	 * The party to be reimbursed for cost of the products and services according to the terms of the policy.
	 */
	payee?: IClaim_Payee;

	/**
	 * A reference to a referral resource.
	 */
	referral?: IReference;

	/**
	 * Facility where the services were provided.
	 */
	facility?: IReference;

	/**
	 * The members of the team who provided the products and services.
	 */
	careTeam?: IClaim_CareTeam[];

	/**
	 * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
	 */
	supportingInfo?: IClaim_SupportingInfo[];

	/**
	 * Information about diagnoses relevant to the claim items.
	 */
	diagnosis?: IClaim_Diagnosis[];

	/**
	 * Procedures performed on the patient relevant to the billing items with the claim.
	 */
	procedure?: IClaim_Procedure[];

	/**
	 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
	 */
	accident?: IClaim_Accident;

	/**
	 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
	 */
	item?: IClaim_Item[];

	/**
	 * The total value of the all the items in the claim.
	 */
	total?: IMoney;
}

export const RTTI_Claim: t.Type<IClaim> = t.recursion('IClaim', () =>
	t.intersection([
		t.type({
			resourceType: t.literal('Claim'),
			type: RTTI_CodeableConcept,
			patient: RTTI_Reference,
			provider: RTTI_Reference,
			priority: RTTI_CodeableConcept,
			insurance: t.array(RTTI_Claim_Insurance)
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
			subType: RTTI_CodeableConcept,
			use: createEnumType<ClaimUseKind>(ClaimUseKind, 'ClaimUseKind'),
			_use: RTTI_Element,
			billablePeriod: RTTI_Period,
			created: RTTI_dateTime,
			_created: RTTI_Element,
			enterer: RTTI_Reference,
			insurer: RTTI_Reference,
			fundsReserve: RTTI_CodeableConcept,
			related: t.array(RTTI_Claim_Related),
			prescription: RTTI_Reference,
			originalPrescription: RTTI_Reference,
			payee: RTTI_Claim_Payee,
			referral: RTTI_Reference,
			facility: RTTI_Reference,
			careTeam: t.array(RTTI_Claim_CareTeam),
			supportingInfo: t.array(RTTI_Claim_SupportingInfo),
			diagnosis: t.array(RTTI_Claim_Diagnosis),
			procedure: t.array(RTTI_Claim_Procedure),
			accident: RTTI_Claim_Accident,
			item: t.array(RTTI_Claim_Item),
			total: RTTI_Money
		})
	])
);
