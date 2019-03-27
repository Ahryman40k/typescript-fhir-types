import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_Element, IElement } from './RTTI_Element';
export enum Person_LinkAssuranceKind {
	_level1 = 'level1',
	_level2 = 'level2',
	_level3 = 'level3',
	_level4 = 'level4'
}
import { createEnumType } from '../../EnumType';

export interface IPerson_Link {
	/**
	 * The resource to which this actual person is associated.
	 */
	target: IReference;

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
	 * Level of assurance that this link is associated with the target resource.
	 */
	assurance?: Person_LinkAssuranceKind;

	/**
	 * Extensions for assurance
	 */
	_assurance?: IElement;
}

export const RTTI_Person_Link: t.Type<IPerson_Link> = t.recursion(
	'IPerson_Link',
	() =>
		t.intersection([
			t.type({
				target: RTTI_Reference
			}),
			t.partial({
				id: t.string,
				extension: t.array(RTTI_Extension),
				modifierExtension: t.array(RTTI_Extension),
				assurance: createEnumType<Person_LinkAssuranceKind>(
					Person_LinkAssuranceKind,
					'Person_LinkAssuranceKind'
				),
				_assurance: RTTI_Element
			})
		])
);
