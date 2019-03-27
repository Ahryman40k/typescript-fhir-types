import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import {
	RTTI_Provenance_Agent,
	IProvenance_Agent
} from './RTTI_Provenance_Agent';
export enum Provenance_EntityRoleKind {
	_derivation = 'derivation',
	_revision = 'revision',
	_quotation = 'quotation',
	_source = 'source',
	_removal = 'removal'
}
import { createEnumType } from '../../EnumType';

export interface IProvenance_Entity {
	/**
	 * Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
	 */
	what: IReference;

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
	 * How the entity was used during the activity.
	 */
	role?: Provenance_EntityRoleKind;

	/**
	 * Extensions for role
	 */
	_role?: IElement;

	/**
	 * The entity is attributed to an agent to express the agent's responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity.
	 */
	agent?: IProvenance_Agent[];
}

export const RTTI_Provenance_Entity: t.Type<IProvenance_Entity> = t.recursion(
	'IProvenance_Entity',
	() =>
		t.intersection([
			t.type({
				what: RTTI_Reference
			}),
			t.partial({
				id: t.string,
				extension: t.array(RTTI_Extension),
				modifierExtension: t.array(RTTI_Extension),
				role: createEnumType<Provenance_EntityRoleKind>(
					Provenance_EntityRoleKind,
					'Provenance_EntityRoleKind'
				),
				_role: RTTI_Element,
				agent: t.array(RTTI_Provenance_Agent)
			})
		])
);
