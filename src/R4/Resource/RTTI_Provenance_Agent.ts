import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';

export interface IProvenance_Agent {
	/**
	 * The individual, device or organization that participated in the event.
	 */
	who: IReference;

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
	 * The participation the agent had with respect to the activity.
	 */
	type?: ICodeableConcept;

	/**
	 * The function of the agent with respect to the activity. The security role enabling the agent with respect to the activity.
	 */
	role?: ICodeableConcept[];

	/**
	 * The individual, device, or organization for whom the change was made.
	 */
	onBehalfOf?: IReference;
}

export const RTTI_Provenance_Agent: t.Type<IProvenance_Agent> = t.recursion(
	'IProvenance_Agent',
	() =>
		t.intersection([
			t.type({
				who: RTTI_Reference
			}),
			t.partial({
				id: t.string,
				extension: t.array(RTTI_Extension),
				modifierExtension: t.array(RTTI_Extension),
				type: RTTI_CodeableConcept,
				role: t.array(RTTI_CodeableConcept),
				onBehalfOf: RTTI_Reference
			})
		])
);
