import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_Consent_Actor, IConsent_Actor } from './RTTI_Consent_Actor';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Coding, ICoding } from './RTTI_Coding';
import { RTTI_Consent_Data, IConsent_Data } from './RTTI_Consent_Data';
export enum Consent_ProvisionTypeKind {
	_deny = 'deny',
	_permit = 'permit'
}
import { createEnumType } from '../../EnumType';

export interface IConsent_Provision {
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
	 * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
	 */
	type?: Consent_ProvisionTypeKind;

	/**
	 * Extensions for type
	 */
	_type?: IElement;

	/**
	 * The timeframe in this rule is valid.
	 */
	period?: IPeriod;

	/**
	 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
	 */
	actor?: IConsent_Actor[];

	/**
	 * Actions controlled by this Rule.
	 */
	action?: ICodeableConcept[];

	/**
	 * A security label, comprised of 0..* security label fields (Privacy tags), which define which resources are controlled by this exception.
	 */
	securityLabel?: ICoding[];

	/**
	 * The context of the activities a user is taking - why the user is accessing the data - that are controlled by this rule.
	 */
	purpose?: ICoding[];

	/**
	 * The class of information covered by this rule. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.
	 */
	class?: ICoding[];

	/**
	 * If this code is found in an instance, then the rule applies.
	 */
	code?: ICodeableConcept[];

	/**
	 * Clinical or Operational Relevant period of time that bounds the data controlled by this rule.
	 */
	dataPeriod?: IPeriod;

	/**
	 * The resources controlled by this rule if specific resources are referenced.
	 */
	data?: IConsent_Data[];

	/**
	 * Rules which provide exceptions to the base rule or subrules.
	 */
	provision?: IConsent_Provision[];
}

export const RTTI_Consent_Provision: t.Type<IConsent_Provision> = t.recursion(
	'IConsent_Provision',
	() =>
		t.partial({
			id: t.string,
			extension: t.array(RTTI_Extension),
			modifierExtension: t.array(RTTI_Extension),
			type: createEnumType<Consent_ProvisionTypeKind>(
				Consent_ProvisionTypeKind,
				'Consent_ProvisionTypeKind'
			),
			_type: RTTI_Element,
			period: RTTI_Period,
			actor: t.array(RTTI_Consent_Actor),
			action: t.array(RTTI_CodeableConcept),
			securityLabel: t.array(RTTI_Coding),
			purpose: t.array(RTTI_Coding),
			class: t.array(RTTI_Coding),
			code: t.array(RTTI_CodeableConcept),
			dataPeriod: RTTI_Period,
			data: t.array(RTTI_Consent_Data),
			provision: t.array(RTTI_Consent_Provision)
		})
);
