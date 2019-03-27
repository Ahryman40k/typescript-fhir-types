import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_Contract_Party, IContract_Party } from './RTTI_Contract_Party';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Contract_Answer, IContract_Answer } from './RTTI_Contract_Answer';
import { RTTI_Element, IElement } from './RTTI_Element';

import { RTTI_unsignedInt } from '../Scalar/RTTI_unsignedInt';

export interface IContract_Offer {
	/**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
	id?: string;

	/**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
	extension?: IExtension[];

	/**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
	modifierExtension?: IExtension[];

	/**
	 * Unique identifier for this particular Contract Provision.
	 */
	identifier?: IIdentifier[];

	/**
	 * Offer Recipient.
	 */
	party?: IContract_Party[];

	/**
	 * The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30).
	 */
	topic?: IReference;

	/**
	 * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
	 */
	type?: ICodeableConcept;

	/**
	 * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
	 */
	decision?: ICodeableConcept;

	/**
	 * How the decision about a Contract was conveyed.
	 */
	decisionMode?: ICodeableConcept[];

	/**
	 * Response to offer text.
	 */
	answer?: IContract_Answer[];

	/**
	 * Human readable form of this Contract Offer.
	 */
	text?: string;

	/**
	 * Extensions for text
	 */
	_text?: IElement;

	/**
	 * The id of the clause or question text of the offer in the referenced questionnaire/response.
	 */
	linkId?: string[];

	/**
	 * Extensions for linkId
	 */
	_linkId?: IElement[];

	/**
	 * Security labels that protects the offer.
	 */
	securityLabelNumber?: number[];

	/**
	 * Extensions for securityLabelNumber
	 */
	_securityLabelNumber?: IElement[];
}

export const RTTI_Contract_Offer: t.Type<IContract_Offer> = t.recursion(
	'IContract_Offer',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			identifier: t.array(RTTI_Identifier),
			party: t.array(RTTI_Contract_Party),
			topic: RTTI_Reference,
			type: RTTI_CodeableConcept,
			decision: RTTI_CodeableConcept,
			decisionMode: t.array(RTTI_CodeableConcept),
			answer: t.array(RTTI_Contract_Answer),
			text: t.string,
			_text: RTTI_Element,
			linkId: t.array(t.string),
			_linkId: t.array(RTTI_Element),
			securityLabelNumber: t.array(RTTI_unsignedInt),
			_securityLabelNumber: t.array(RTTI_Element)
		})
);
