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
import { RTTI_Quantity, IQuantity } from './RTTI_Quantity';
import { RTTI_Ratio, IRatio } from './RTTI_Ratio';
import { RTTI_Range, IRange } from './RTTI_Range';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Timing, ITiming } from './RTTI_Timing';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';

export interface IServiceRequest {
	/**
	 * This is a ServiceRequest resource
	 */
	resourceType: 'ServiceRequest';

	/**
	 * On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
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
	 * Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.
	 */
	identifier?: IIdentifier[];

	/**
	 * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
	 */
	instantiatesCanonical?: string[];

	/**
	 * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
	 */
	instantiatesUri?: string[];

	/**
	 * Extensions for instantiatesUri
	 */
	_instantiatesUri?: IElement[];

	/**
	 * Plan/proposal/order fulfilled by this request.
	 */
	basedOn?: IReference[];

	/**
	 * The request takes the place of the referenced completed or terminated request(s).
	 */
	replaces?: IReference[];

	/**
	 * A shared identifier common to all service requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.
	 */
	requisition?: IIdentifier;

	/**
	 * The status of the order.
	 */
	status?: string;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * Whether the request is a proposal, plan, an original order or a reflex order.
	 */
	intent?: string;

	/**
	 * Extensions for intent
	 */
	_intent?: IElement;

	/**
	 * A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure").
	 */
	category?: ICodeableConcept[];

	/**
	 * Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
	 */
	priority?: string;

	/**
	 * Extensions for priority
	 */
	_priority?: IElement;

	/**
	 * Set this to true if the record is saying that the service/procedure should NOT be performed.
	 */
	doNotPerform?: boolean;

	/**
	 * Extensions for doNotPerform
	 */
	_doNotPerform?: IElement;

	/**
	 * A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.
	 */
	code?: ICodeableConcept;

	/**
	 * Additional details and instructions about the how the services are to be delivered.   For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied.
	 */
	orderDetail?: ICodeableConcept[];

	/**
	 * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
	 */
	quantityQuantity?: IQuantity;

	/**
	 * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
	 */
	quantityRatio?: IRatio;

	/**
	 * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
	 */
	quantityRange?: IRange;

	/**
	 * An encounter that provides additional information about the healthcare context in which this request is made.
	 */
	encounter?: IReference;

	/**
	 * The date/time at which the requested service should occur.
	 */
	occurrenceDateTime?: string;

	/**
	 * Extensions for occurrenceDateTime
	 */
	_occurrenceDateTime?: IElement;

	/**
	 * The date/time at which the requested service should occur.
	 */
	occurrencePeriod?: IPeriod;

	/**
	 * The date/time at which the requested service should occur.
	 */
	occurrenceTiming?: ITiming;

	/**
	 * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
	 */
	asNeededBoolean?: boolean;

	/**
	 * Extensions for asNeededBoolean
	 */
	_asNeededBoolean?: IElement;

	/**
	 * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
	 */
	asNeededCodeableConcept?: ICodeableConcept;

	/**
	 * When the request transitioned to being actionable.
	 */
	authoredOn?: string;

	/**
	 * Extensions for authoredOn
	 */
	_authoredOn?: IElement;

	/**
	 * The individual who initiated the request and has responsibility for its activation.
	 */
	requester?: IReference;

	/**
	 * Desired type of performer for doing the requested service.
	 */
	performerType?: ICodeableConcept;

	/**
	 * The desired performer for doing the requested service.  For example, the surgeon, dermatopathologist, endoscopist, etc.
	 */
	performer?: IReference[];

	/**
	 * The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center.
	 */
	locationCode?: ICodeableConcept[];

	/**
	 * A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.
	 */
	locationReference?: IReference[];

	/**
	 * An explanation or justification for why this service is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in `supportingInfo`.
	 */
	reasonCode?: ICodeableConcept[];

	/**
	 * Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`.
	 */
	reasonReference?: IReference[];

	/**
	 * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.
	 */
	insurance?: IReference[];

	/**
	 * Additional clinical information about the patient or specimen that may influence the services or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
	 */
	supportingInfo?: IReference[];

	/**
	 * One or more specimens that the laboratory procedure will use.
	 */
	specimen?: IReference[];

	/**
	 * Anatomic location where the procedure should be performed. This is the target site.
	 */
	bodySite?: ICodeableConcept[];

	/**
	 * Any other notes and comments made about the service request. For example, internal billing notes.
	 */
	note?: IAnnotation[];

	/**
	 * Instructions in terms that are understood by the patient or consumer.
	 */
	patientInstruction?: string;

	/**
	 * Extensions for patientInstruction
	 */
	_patientInstruction?: IElement;

	/**
	 * Key events in the history of the request.
	 */
	relevantHistory?: IReference[];
}

export const RTTI_ServiceRequest: t.Type<IServiceRequest> = t.recursion(
	'IServiceRequest',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('ServiceRequest'),
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
				instantiatesCanonical: t.array(RTTI_canonical),
				instantiatesUri: t.array(RTTI_uri),
				_instantiatesUri: t.array(RTTI_Element),
				basedOn: t.array(RTTI_Reference),
				replaces: t.array(RTTI_Reference),
				requisition: RTTI_Identifier,
				status: RTTI_code,
				_status: RTTI_Element,
				intent: RTTI_code,
				_intent: RTTI_Element,
				category: t.array(RTTI_CodeableConcept),
				priority: RTTI_code,
				_priority: RTTI_Element,
				doNotPerform: t.boolean,
				_doNotPerform: RTTI_Element,
				code: RTTI_CodeableConcept,
				orderDetail: t.array(RTTI_CodeableConcept),
				quantityQuantity: RTTI_Quantity,
				quantityRatio: RTTI_Ratio,
				quantityRange: RTTI_Range,
				encounter: RTTI_Reference,
				occurrenceDateTime: t.string,
				_occurrenceDateTime: RTTI_Element,
				occurrencePeriod: RTTI_Period,
				occurrenceTiming: RTTI_Timing,
				asNeededBoolean: t.boolean,
				_asNeededBoolean: RTTI_Element,
				asNeededCodeableConcept: RTTI_CodeableConcept,
				authoredOn: RTTI_dateTime,
				_authoredOn: RTTI_Element,
				requester: RTTI_Reference,
				performerType: RTTI_CodeableConcept,
				performer: t.array(RTTI_Reference),
				locationCode: t.array(RTTI_CodeableConcept),
				locationReference: t.array(RTTI_Reference),
				reasonCode: t.array(RTTI_CodeableConcept),
				reasonReference: t.array(RTTI_Reference),
				insurance: t.array(RTTI_Reference),
				supportingInfo: t.array(RTTI_Reference),
				specimen: t.array(RTTI_Reference),
				bodySite: t.array(RTTI_CodeableConcept),
				note: t.array(RTTI_Annotation),
				patientInstruction: t.string,
				_patientInstruction: RTTI_Element,
				relevantHistory: t.array(RTTI_Reference)
			})
		])
);
