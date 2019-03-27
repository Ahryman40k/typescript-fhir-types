import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import {
	RTTI_Contract_SecurityLabel,
	IContract_SecurityLabel
} from './RTTI_Contract_SecurityLabel';
import { RTTI_Contract_Offer, IContract_Offer } from './RTTI_Contract_Offer';
import { RTTI_Contract_Asset, IContract_Asset } from './RTTI_Contract_Asset';
import { RTTI_Contract_Action, IContract_Action } from './RTTI_Contract_Action';

export interface IContract_Term {
	/**
	 * The matter of concern in the context of this provision of the agrement.
	 */
	offer: IContract_Offer;

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
	identifier?: IIdentifier;

	/**
	 * When this Contract Provision was issued.
	 */
	issued?: string;

	/**
	 * Extensions for issued
	 */
	_issued?: IElement;

	/**
	 * Relevant time or time-period when this Contract Provision is applicable.
	 */
	applies?: IPeriod;

	/**
	 * The entity that the term applies to.
	 */
	topicCodeableConcept?: ICodeableConcept;

	/**
	 * The entity that the term applies to.
	 */
	topicReference?: IReference;

	/**
	 * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
	 */
	type?: ICodeableConcept;

	/**
	 * A specialized legal clause or condition based on overarching contract type.
	 */
	subType?: ICodeableConcept;

	/**
	 * Statement of a provision in a policy or a contract.
	 */
	text?: string;

	/**
	 * Extensions for text
	 */
	_text?: IElement;

	/**
	 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
	 */
	securityLabel?: IContract_SecurityLabel[];

	/**
	 * Contract Term Asset List.
	 */
	asset?: IContract_Asset[];

	/**
	 * An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.
	 */
	action?: IContract_Action[];

	/**
	 * Nested group of Contract Provisions.
	 */
	group?: IContract_Term[];
}

export const RTTI_Contract_Term: t.Type<IContract_Term> = t.recursion(
	'IContract_Term',
	() =>
		t.intersection([
			t.type({
				offer: RTTI_Contract_Offer
			}),
			t.partial({
				id: t.string,
				extension: t.array(RTTI_Extension),
				modifierExtension: t.array(RTTI_Extension),
				identifier: RTTI_Identifier,
				issued: RTTI_dateTime,
				_issued: RTTI_Element,
				applies: RTTI_Period,
				topicCodeableConcept: RTTI_CodeableConcept,
				topicReference: RTTI_Reference,
				type: RTTI_CodeableConcept,
				subType: RTTI_CodeableConcept,
				text: t.string,
				_text: RTTI_Element,
				securityLabel: t.array(RTTI_Contract_SecurityLabel),
				asset: t.array(RTTI_Contract_Asset),
				action: t.array(RTTI_Contract_Action),
				group: t.array(RTTI_Contract_Term)
			})
		])
);
