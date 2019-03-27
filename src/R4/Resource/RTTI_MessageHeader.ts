import * as t from 'io-ts';
import { RTTI_id } from '../Scalar/RTTI_id';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_uri } from '../Scalar/RTTI_uri';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_code } from '../Scalar/RTTI_code';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Coding, ICoding } from './RTTI_Coding';
import {
	RTTI_MessageHeader_Destination,
	IMessageHeader_Destination
} from './RTTI_MessageHeader_Destination';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import {
	RTTI_MessageHeader_Source,
	IMessageHeader_Source
} from './RTTI_MessageHeader_Source';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import {
	RTTI_MessageHeader_Response,
	IMessageHeader_Response
} from './RTTI_MessageHeader_Response';
import { RTTI_canonical } from '../Scalar/RTTI_canonical';

export interface IMessageHeader {
	/**
	 * This is a MessageHeader resource
	 */
	resourceType: 'MessageHeader';

	/**
	 * The source application from which this message originated.
	 */
	source: IMessageHeader_Source;

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
	 * Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://terminology.hl7.org/CodeSystem/message-events".  Alternatively uri to the EventDefinition.
	 */
	eventCoding?: ICoding;

	/**
	 * Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://terminology.hl7.org/CodeSystem/message-events".  Alternatively uri to the EventDefinition.
	 */
	eventUri?: string;

	/**
	 * Extensions for eventUri
	 */
	_eventUri?: IElement;

	/**
	 * The destination application which the message is intended for.
	 */
	destination?: IMessageHeader_Destination[];

	/**
	 * Identifies the sending system to allow the use of a trust relationship.
	 */
	sender?: IReference;

	/**
	 * The person or device that performed the data entry leading to this message. When there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions.
	 */
	enterer?: IReference;

	/**
	 * The logical author of the message - the person or device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions.
	 */
	author?: IReference;

	/**
	 * The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party.
	 */
	responsible?: IReference;

	/**
	 * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
	 */
	reason?: ICodeableConcept;

	/**
	 * Information about the message that this message is a response to.  Only present if this message is a response.
	 */
	response?: IMessageHeader_Response;

	/**
	 * The actual data of the message - a reference to the root/focus class of the event.
	 */
	focus?: IReference[];

	/**
	 * Permanent link to the MessageDefinition for this message.
	 */
	definition?: string;
}

export const RTTI_MessageHeader: t.Type<IMessageHeader> = t.recursion(
	'IMessageHeader',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('MessageHeader'),
				source: RTTI_MessageHeader_Source
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
				eventCoding: RTTI_Coding,
				eventUri: t.string,
				_eventUri: RTTI_Element,
				destination: t.array(RTTI_MessageHeader_Destination),
				sender: RTTI_Reference,
				enterer: RTTI_Reference,
				author: RTTI_Reference,
				responsible: RTTI_Reference,
				reason: RTTI_CodeableConcept,
				response: RTTI_MessageHeader_Response,
				focus: t.array(RTTI_Reference),
				definition: RTTI_canonical
			})
		])
);
