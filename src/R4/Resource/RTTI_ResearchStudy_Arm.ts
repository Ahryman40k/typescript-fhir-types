import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';

export interface IResearchStudy_Arm {
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
	 * Unique, human-readable label for this arm of the study.
	 */
	name?: string;

	/**
	 * Extensions for name
	 */
	_name?: IElement;

	/**
	 * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
	 */
	type?: ICodeableConcept;

	/**
	 * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
	 */
	description?: string;

	/**
	 * Extensions for description
	 */
	_description?: IElement;
}

export const RTTI_ResearchStudy_Arm: t.Type<IResearchStudy_Arm> = t.recursion(
	'IResearchStudy_Arm',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			name: t.string,
			_name: RTTI_Element,
			type: RTTI_CodeableConcept,
			description: t.string,
			_description: RTTI_Element
		})
);
