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
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Coding, ICoding } from './RTTI_Coding';

import { RTTI_MarketingStatus, IMarketingStatus } from './RTTI_MarketingStatus';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import {
	RTTI_MedicinalProduct_Name,
	IMedicinalProduct_Name
} from './RTTI_MedicinalProduct_Name';
import {
	RTTI_MedicinalProduct_ManufacturingBusinessOperation,
	IMedicinalProduct_ManufacturingBusinessOperation
} from './RTTI_MedicinalProduct_ManufacturingBusinessOperation';
import {
	RTTI_MedicinalProduct_SpecialDesignation,
	IMedicinalProduct_SpecialDesignation
} from './RTTI_MedicinalProduct_SpecialDesignation';
import { IDomainResource } from './IDomainResource';

export interface IMedicinalProduct extends IDomainResource {
	/**
	 * This is a MedicinalProduct resource
	 */
	resourceType: 'MedicinalProduct';

	/**
	 * The product's name, including full name and possibly coded parts.
	 */
	name: IMedicinalProduct_Name[];

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
	 * Business identifier for this product. Could be an MPID.
	 */
	identifier?: IIdentifier[];

	/**
	 * Regulatory type, e.g. Investigational or Authorized.
	 */
	type?: ICodeableConcept;

	/**
	 * If this medicine applies to human or veterinary uses.
	 */
	domain?: ICoding;

	/**
	 * The dose form for a single part product, or combined form of a multiple part product.
	 */
	combinedPharmaceuticalDoseForm?: ICodeableConcept;

	/**
	 * The legal status of supply of the medicinal product as classified by the regulator.
	 */
	legalStatusOfSupply?: ICodeableConcept;

	/**
	 * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
	 */
	additionalMonitoringIndicator?: ICodeableConcept;

	/**
	 * Whether the Medicinal Product is subject to special measures for regulatory reasons.
	 */
	specialMeasures?: string[];

	/**
	 * Extensions for specialMeasures
	 */
	_specialMeasures?: IElement[];

	/**
	 * If authorised for use in children.
	 */
	paediatricUseIndicator?: ICodeableConcept;

	/**
	 * Allows the product to be classified by various systems.
	 */
	productClassification?: ICodeableConcept[];

	/**
	 * Marketing status of the medicinal product, in contrast to marketing authorizaton.
	 */
	marketingStatus?: IMarketingStatus[];

	/**
	 * Pharmaceutical aspects of product.
	 */
	pharmaceuticalProduct?: IReference[];

	/**
	 * Package representation for the product.
	 */
	packagedMedicinalProduct?: IReference[];

	/**
	 * Supporting documentation, typically for regulatory submission.
	 */
	attachedDocument?: IReference[];

	/**
	 * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
	 */
	masterFile?: IReference[];

	/**
	 * A product specific contact, person (in a role), or an organization.
	 */
	contact?: IReference[];

	/**
	 * Clinical trials or studies that this product is involved in.
	 */
	clinicalTrial?: IReference[];

	/**
	 * Reference to another product, e.g. for linking authorised to investigational product.
	 */
	crossReference?: IIdentifier[];

	/**
	 * An operation applied to the product, for manufacturing or adminsitrative purpose.
	 */
	manufacturingBusinessOperation?: IMedicinalProduct_ManufacturingBusinessOperation[];

	/**
	 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
	 */
	specialDesignation?: IMedicinalProduct_SpecialDesignation[];
}

export const RTTI_MedicinalProduct: t.Type<IMedicinalProduct> = t.recursion(
	'IMedicinalProduct',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('MedicinalProduct'),
				name: t.array(RTTI_MedicinalProduct_Name)
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
				type: RTTI_CodeableConcept,
				domain: RTTI_Coding,
				combinedPharmaceuticalDoseForm: RTTI_CodeableConcept,
				legalStatusOfSupply: RTTI_CodeableConcept,
				additionalMonitoringIndicator: RTTI_CodeableConcept,
				specialMeasures: t.array(t.string),
				_specialMeasures: t.array(RTTI_Element),
				paediatricUseIndicator: RTTI_CodeableConcept,
				productClassification: t.array(RTTI_CodeableConcept),
				marketingStatus: t.array(RTTI_MarketingStatus),
				pharmaceuticalProduct: t.array(RTTI_Reference),
				packagedMedicinalProduct: t.array(RTTI_Reference),
				attachedDocument: t.array(RTTI_Reference),
				masterFile: t.array(RTTI_Reference),
				contact: t.array(RTTI_Reference),
				clinicalTrial: t.array(RTTI_Reference),
				crossReference: t.array(RTTI_Identifier),
				manufacturingBusinessOperation: t.array(
					RTTI_MedicinalProduct_ManufacturingBusinessOperation
				),
				specialDesignation: t.array(RTTI_MedicinalProduct_SpecialDesignation)
			})
		])
);
