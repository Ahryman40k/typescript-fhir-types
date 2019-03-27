import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_id } from '../Scalar/RTTI_id';
import { RTTI_Element, IElement } from './RTTI_Element';
import {
	RTTI_StructureMap_Input,
	IStructureMap_Input
} from './RTTI_StructureMap_Input';
import {
	RTTI_StructureMap_Rule,
	IStructureMap_Rule
} from './RTTI_StructureMap_Rule';
export enum StructureMap_GroupTypeModeKind {
	_none = 'none',
	_types = 'types',
	_typeAndTypes = 'type-and-types'
}
import { createEnumType } from '../../EnumType';

export interface IStructureMap_Group {
	/**
	 * A name assigned to an instance of data. The instance must be provided when the mapping is invoked.
	 */
	input: IStructureMap_Input[];

	/**
	 * Transform Rule from source to target.
	 */
	rule: IStructureMap_Rule[];

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
	 * A unique name for the group for the convenience of human readers.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * Another group that this group adds rules to.
	 */
	extends?: string;

	/**
	 * Extensions for extends
	 */
	_extends?: IElement;

	/**
	 * If this is the default rule set to apply for the source type or this combination of types.
	 */
	typeMode?: StructureMap_GroupTypeModeKind;

	/**
	 * Extensions for typeMode
	 */
	_typeMode?: IElement;

	/**
	 * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
	 */
	documentation?: string;

	/**
	 * Extensions for documentation
	 */
	_documentation?: IElement;
}

export const RTTI_StructureMap_Group: t.Type<IStructureMap_Group> = t.recursion(
	'IStructureMap_Group',
	() =>
		t.intersection([
			t.type({
				input: t.array(RTTI_StructureMap_Input),
				rule: t.array(RTTI_StructureMap_Rule)
			}),
			t.partial({
				id: t.string,
				extension: t.array(RTTI_Extension),
				modifierExtension: t.array(RTTI_Extension),
				name: RTTI_id,
				_name: RTTI_Element,
				extends: RTTI_id,
				_extends: RTTI_Element,
				typeMode: createEnumType<StructureMap_GroupTypeModeKind>(
					StructureMap_GroupTypeModeKind,
					'StructureMap_GroupTypeModeKind'
				),
				_typeMode: RTTI_Element,
				documentation: t.string,
				_documentation: RTTI_Element
			})
		])
);
