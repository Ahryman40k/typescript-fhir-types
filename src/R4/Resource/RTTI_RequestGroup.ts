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
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';
import {
	RTTI_RequestGroup_Action,
	IRequestGroup_Action
} from './RTTI_RequestGroup_Action';
import { IDomainResource } from './IDomainResource';

export interface IRequestGroup extends IDomainResource {
	/**
	 * This is a RequestGroup resource
	 */
	resourceType: 'RequestGroup';

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
	 * Allows a service to provide a unique, business identifier for the request.
	 */
	identifier?: IIdentifier[];

	/**
	 * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
	 */
	instantiatesCanonical?: string[];

	/**
	 * Extensions for instantiatesCanonical
	 */
	_instantiatesCanonical?: IElement[];

	/**
	 * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
	 */
	instantiatesUri?: string[];

	/**
	 * Extensions for instantiatesUri
	 */
	_instantiatesUri?: IElement[];

	/**
	 * A plan, proposal or order that is fulfilled in whole or in part by this request.
	 */
	basedOn?: IReference[];

	/**
	 * Completed or terminated request(s) whose function is taken by this new request.
	 */
	replaces?: IReference[];

	/**
	 * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.
	 */
	groupIdentifier?: IIdentifier;

	/**
	 * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
	 */
	status?: string;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
	 */
	intent?: string;

	/**
	 * Extensions for intent
	 */
	_intent?: IElement;

	/**
	 * Indicates how quickly the request should be addressed with respect to other requests.
	 */
	priority?: string;

	/**
	 * Extensions for priority
	 */
	_priority?: IElement;

	/**
	 * A code that identifies what the overall request group is.
	 */
	code?: ICodeableConcept;

	/**
	 * The subject for which the request group was created.
	 */
	subject?: IReference;

	/**
	 * Describes the context of the request group, if any.
	 */
	encounter?: IReference;

	/**
	 * Indicates when the request group was created.
	 */
	authoredOn?: string;

	/**
	 * Extensions for authoredOn
	 */
	_authoredOn?: IElement;

	/**
	 * Provides a reference to the author of the request group.
	 */
	author?: IReference;

	/**
	 * Describes the reason for the request group in coded or textual form.
	 */
	reasonCode?: ICodeableConcept[];

	/**
	 * Indicates another resource whose existence justifies this request group.
	 */
	reasonReference?: IReference[];

	/**
	 * Provides a mechanism to communicate additional information about the response.
	 */
	note?: IAnnotation[];

	/**
	 * The actions, if any, produced by the evaluation of the artifact.
	 */
	action?: IRequestGroup_Action[];
}

export const RTTI_RequestGroup: t.Type<IRequestGroup> = t.recursion(
	'IRequestGroup',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('RequestGroup')
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
				_instantiatesCanonical: t.array(RTTI_Element),
				instantiatesUri: t.array(RTTI_uri),
				_instantiatesUri: t.array(RTTI_Element),
				basedOn: t.array(RTTI_Reference),
				replaces: t.array(RTTI_Reference),
				groupIdentifier: RTTI_Identifier,
				status: RTTI_code,
				_status: RTTI_Element,
				intent: RTTI_code,
				_intent: RTTI_Element,
				priority: RTTI_code,
				_priority: RTTI_Element,
				code: RTTI_CodeableConcept,
				subject: RTTI_Reference,
				encounter: RTTI_Reference,
				authoredOn: RTTI_dateTime,
				_authoredOn: RTTI_Element,
				author: RTTI_Reference,
				reasonCode: t.array(RTTI_CodeableConcept),
				reasonReference: t.array(RTTI_Reference),
				note: t.array(RTTI_Annotation),
				action: t.array(RTTI_RequestGroup_Action)
			})
		])
);
