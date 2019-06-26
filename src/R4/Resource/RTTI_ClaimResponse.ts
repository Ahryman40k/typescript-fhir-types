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
import { RTTI_Period, IPeriod } from './RTTI_Period';
import {
	RTTI_ClaimResponse_Item,
	IClaimResponse_Item
} from './RTTI_ClaimResponse_Item';
import {
	RTTI_ClaimResponse_AddItem,
	IClaimResponse_AddItem
} from './RTTI_ClaimResponse_AddItem';
import {
	RTTI_ClaimResponse_Adjudication,
	IClaimResponse_Adjudication
} from './RTTI_ClaimResponse_Adjudication';
import {
	RTTI_ClaimResponse_Total,
	IClaimResponse_Total
} from './RTTI_ClaimResponse_Total';
import {
	RTTI_ClaimResponse_Payment,
	IClaimResponse_Payment
} from './RTTI_ClaimResponse_Payment';
import { RTTI_Attachment, IAttachment } from './RTTI_Attachment';
import {
	RTTI_ClaimResponse_ProcessNote,
	IClaimResponse_ProcessNote
} from './RTTI_ClaimResponse_ProcessNote';
import {
	RTTI_ClaimResponse_Insurance,
	IClaimResponse_Insurance
} from './RTTI_ClaimResponse_Insurance';
import {
	RTTI_ClaimResponse_Error,
	IClaimResponse_Error
} from './RTTI_ClaimResponse_Error';
import { IDomainResource } from './IDomainResource';

export interface IClaimResponse extends IDomainResource {
	/**
	 * This is a ClaimResponse resource
	 */
	resourceType: 'ClaimResponse';

	/**
	 * A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
	 */
	type: ICodeableConcept;

	/**
	 * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
	 */
	patient: IReference;

	/**
	 * The party responsible for authorization, adjudication and reimbursement.
	 */
	insurer: IReference;

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
	 * A unique identifier assigned to this claim response.
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
	use?: string;

	/**
	 * Extensions for use
	 */
	_use?: IElement;

	/**
	 * The date this resource was created.
	 */
	created?: string;

	/**
	 * Extensions for created
	 */
	_created?: IElement;

	/**
	 * The provider which is responsible for the claim, predetermination or preauthorization.
	 */
	requestor?: IReference;

	/**
	 * Original request resource reference.
	 */
	request?: IReference;

	/**
	 * The outcome of the claim, predetermination, or preauthorization processing.
	 */
	outcome?: string;

	/**
	 * Extensions for outcome
	 */
	_outcome?: IElement;

	/**
	 * A human readable description of the status of the adjudication.
	 */
	disposition?: string;

	/**
	 * Extensions for disposition
	 */
	_disposition?: IElement;

	/**
	 * Reference from the Insurer which is used in later communications which refers to this adjudication.
	 */
	preAuthRef?: string;

	/**
	 * Extensions for preAuthRef
	 */
	_preAuthRef?: IElement;

	/**
	 * The time frame during which this authorization is effective.
	 */
	preAuthPeriod?: IPeriod;

	/**
	 * Type of Party to be reimbursed: subscriber, provider, other.
	 */
	payeeType?: ICodeableConcept;

	/**
	 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
	 */
	item?: IClaimResponse_Item[];

	/**
	 * The first-tier service adjudications for payor added product or service lines.
	 */
	addItem?: IClaimResponse_AddItem[];

	/**
	 * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
	 */
	adjudication?: IClaimResponse_Adjudication[];

	/**
	 * Categorized monetary totals for the adjudication.
	 */
	total?: IClaimResponse_Total[];

	/**
	 * Payment details for the adjudication of the claim.
	 */
	payment?: IClaimResponse_Payment;

	/**
	 * A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.
	 */
	fundsReserve?: ICodeableConcept;

	/**
	 * A code for the form to be used for printing the content.
	 */
	formCode?: ICodeableConcept;

	/**
	 * The actual form, by reference or inclusion, for printing the content or an EOB.
	 */
	form?: IAttachment;

	/**
	 * A note that describes or explains adjudication results in a human readable form.
	 */
	processNote?: IClaimResponse_ProcessNote[];

	/**
	 * Request for additional supporting or authorizing information.
	 */
	communicationRequest?: IReference[];

	/**
	 * Financial instruments for reimbursement for the health care products and services specified on the claim.
	 */
	insurance?: IClaimResponse_Insurance[];

	/**
	 * Errors encountered during the processing of the adjudication.
	 */
	error?: IClaimResponse_Error[];
}

export const RTTI_ClaimResponse: t.Type<IClaimResponse> = t.recursion(
	'IClaimResponse',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('ClaimResponse'),
				type: RTTI_CodeableConcept,
				patient: RTTI_Reference,
				insurer: RTTI_Reference
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
				use: RTTI_code,
				_use: RTTI_Element,
				created: RTTI_dateTime,
				_created: RTTI_Element,
				requestor: RTTI_Reference,
				request: RTTI_Reference,
				outcome: RTTI_code,
				_outcome: RTTI_Element,
				disposition: t.string,
				_disposition: RTTI_Element,
				preAuthRef: t.string,
				_preAuthRef: RTTI_Element,
				preAuthPeriod: RTTI_Period,
				payeeType: RTTI_CodeableConcept,
				item: t.array(RTTI_ClaimResponse_Item),
				addItem: t.array(RTTI_ClaimResponse_AddItem),
				adjudication: t.array(RTTI_ClaimResponse_Adjudication),
				total: t.array(RTTI_ClaimResponse_Total),
				payment: RTTI_ClaimResponse_Payment,
				fundsReserve: RTTI_CodeableConcept,
				formCode: RTTI_CodeableConcept,
				form: RTTI_Attachment,
				processNote: t.array(RTTI_ClaimResponse_ProcessNote),
				communicationRequest: t.array(RTTI_Reference),
				insurance: t.array(RTTI_ClaimResponse_Insurance),
				error: t.array(RTTI_ClaimResponse_Error)
			})
		])
);
