import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_Coding, ICoding } from './RTTI_Coding';

export interface IAuditEvent_Source {
	/**
	 * Identifier of the source where the event was detected.
	 */
	observer: IReference;

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
	 * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
	 */
	site?: string;

	/**
	 * Extensions for site
	 */
	_site?: IElement;

	/**
	 * Code specifying the type of source where event originated.
	 */
	type?: ICoding[];
}

export const RTTI_AuditEvent_Source: t.Type<IAuditEvent_Source> = t.recursion(
	'IAuditEvent_Source',
	() =>
		t.intersection([
			t.type({
				observer: RTTI_Reference
			}),
			t.partial({
				id: t.string,
				extension: t.array(RTTI_Extension),
				modifierExtension: t.array(RTTI_Extension),
				site: t.string,
				_site: RTTI_Element,
				type: t.array(RTTI_Coding)
			})
		])
);
