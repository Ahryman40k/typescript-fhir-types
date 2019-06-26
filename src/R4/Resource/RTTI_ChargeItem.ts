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
import { RTTI_canonical } from '../Scalar/RTTI_canonical';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Timing, ITiming } from './RTTI_Timing';
import {
	RTTI_ChargeItem_Performer,
	IChargeItem_Performer
} from './RTTI_ChargeItem_Performer';
import { RTTI_Quantity, IQuantity } from './RTTI_Quantity';
import { RTTI_decimal } from '../Scalar/RTTI_decimal';
import { RTTI_Money, IMoney } from './RTTI_Money';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';
export enum ChargeItemStatusKind {
	_planned = 'planned',
	_billable = 'billable',
	_notBillable = 'not-billable',
	_aborted = 'aborted',
	_billed = 'billed',
	_enteredInError = 'entered-in-error',
	_unknown = 'unknown'
}
import { createEnumType } from '../../EnumType';
import { IDomainResource } from './IDomainResource';

export interface IChargeItem extends IDomainResource {
	/**
	 * This is a ChargeItem resource
	 */
	resourceType: 'ChargeItem';

	/**
	 * A code that identifies the charge, like a billing code.
	 */
	code: ICodeableConcept;

	/**
	 * The individual or set of individuals the action is being or was performed on.
	 */
	subject: IReference;

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
	 * Identifiers assigned to this event performer or other systems.
	 */
	identifier?: IIdentifier[];

	/**
	 * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
	 */
	definitionUri?: string[];

	/**
	 * Extensions for definitionUri
	 */
	_definitionUri?: IElement[];

	/**
	 * References the source of pricing information, rules of application for the code this ChargeItem uses.
	 */
	definitionCanonical?: string[];

	/**
	 * The current state of the ChargeItem.
	 */
	status?: ChargeItemStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * ChargeItems can be grouped to larger ChargeItems covering the whole set.
	 */
	partOf?: IReference[];

	/**
	 * The encounter or episode of care that establishes the context for this event.
	 */
	context?: IReference;

	/**
	 * Date/time(s) or duration when the charged service was applied.
	 */
	occurrenceDateTime?: string;

	/**
	 * Extensions for occurrenceDateTime
	 */
	_occurrenceDateTime?: IElement;

	/**
	 * Date/time(s) or duration when the charged service was applied.
	 */
	occurrencePeriod?: IPeriod;

	/**
	 * Date/time(s) or duration when the charged service was applied.
	 */
	occurrenceTiming?: ITiming;

	/**
	 * Indicates who or what performed or participated in the charged service.
	 */
	performer?: IChargeItem_Performer[];

	/**
	 * The organization requesting the service.
	 */
	performingOrganization?: IReference;

	/**
	 * The organization performing the service.
	 */
	requestingOrganization?: IReference;

	/**
	 * The financial cost center permits the tracking of charge attribution.
	 */
	costCenter?: IReference;

	/**
	 * Quantity of which the charge item has been serviced.
	 */
	quantity?: IQuantity;

	/**
	 * The anatomical location where the related service has been applied.
	 */
	bodysite?: ICodeableConcept[];

	/**
	 * Factor overriding the factor determined by the rules associated with the code.
	 */
	factorOverride?: number;

	/**
	 * Extensions for factorOverride
	 */
	_factorOverride?: IElement;

	/**
	 * Total price of the charge overriding the list price associated with the code.
	 */
	priceOverride?: IMoney;

	/**
	 * If the list price or the rule-based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.
	 */
	overrideReason?: string;

	/**
	 * Extensions for overrideReason
	 */
	_overrideReason?: IElement;

	/**
	 * The device, practitioner, etc. who entered the charge item.
	 */
	enterer?: IReference;

	/**
	 * Date the charge item was entered.
	 */
	enteredDate?: string;

	/**
	 * Extensions for enteredDate
	 */
	_enteredDate?: IElement;

	/**
	 * Describes why the event occurred in coded or textual form.
	 */
	reason?: ICodeableConcept[];

	/**
	 * Indicated the rendered service that caused this charge.
	 */
	service?: IReference[];

	/**
	 * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
	 */
	productReference?: IReference;

	/**
	 * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
	 */
	productCodeableConcept?: ICodeableConcept;

	/**
	 * Account into which this ChargeItems belongs.
	 */
	account?: IReference[];

	/**
	 * Comments made about the event by the performer, subject or other participants.
	 */
	note?: IAnnotation[];

	/**
	 * Further information supporting this charge.
	 */
	supportingInformation?: IReference[];
}

export const RTTI_ChargeItem: t.Type<IChargeItem> = t.recursion(
	'IChargeItem',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('ChargeItem'),
				code: RTTI_CodeableConcept,
				subject: RTTI_Reference
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
				definitionUri: t.array(RTTI_uri),
				_definitionUri: t.array(RTTI_Element),
				definitionCanonical: t.array(RTTI_canonical),
				status: createEnumType<ChargeItemStatusKind>(
					ChargeItemStatusKind,
					'ChargeItemStatusKind'
				),
				_status: RTTI_Element,
				partOf: t.array(RTTI_Reference),
				context: RTTI_Reference,
				occurrenceDateTime: t.string,
				_occurrenceDateTime: RTTI_Element,
				occurrencePeriod: RTTI_Period,
				occurrenceTiming: RTTI_Timing,
				performer: t.array(RTTI_ChargeItem_Performer),
				performingOrganization: RTTI_Reference,
				requestingOrganization: RTTI_Reference,
				costCenter: RTTI_Reference,
				quantity: RTTI_Quantity,
				bodysite: t.array(RTTI_CodeableConcept),
				factorOverride: RTTI_decimal,
				_factorOverride: RTTI_Element,
				priceOverride: RTTI_Money,
				overrideReason: t.string,
				_overrideReason: RTTI_Element,
				enterer: RTTI_Reference,
				enteredDate: RTTI_dateTime,
				_enteredDate: RTTI_Element,
				reason: t.array(RTTI_CodeableConcept),
				service: t.array(RTTI_Reference),
				productReference: RTTI_Reference,
				productCodeableConcept: RTTI_CodeableConcept,
				account: t.array(RTTI_Reference),
				note: t.array(RTTI_Annotation),
				supportingInformation: t.array(RTTI_Reference)
			})
		])
);
