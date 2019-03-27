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
import { RTTI_canonical } from '../Scalar/RTTI_canonical';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import {
	RTTI_MeasureReport_Group,
	IMeasureReport_Group
} from './RTTI_MeasureReport_Group';
export enum MeasureReportStatusKind {
	_complete = 'complete',
	_pending = 'pending',
	_error = 'error'
}
export enum MeasureReportTypeKind {
	_individual = 'individual',
	_subjectList = 'subject-list',
	_summary = 'summary',
	_dataCollection = 'data-collection'
}
import { createEnumType } from '../../EnumType';

export interface IMeasureReport {
	/**
	 * This is a MeasureReport resource
	 */
	resourceType: 'MeasureReport';

	/**
	 * A reference to the Measure that was calculated to produce this report.
	 */
	measure: string;

	/**
	 * The reporting period for which the report was calculated.
	 */
	period: IPeriod;

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
	 * A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance.
	 */
	identifier?: IIdentifier[];

	/**
	 * The MeasureReport status. No data will be available until the MeasureReport status is complete.
	 */
	status?: MeasureReportStatusKind;

	/**
	 * Extensions for status
	 */
	_status?: IElement;

	/**
	 * The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.
	 */
	type?: MeasureReportTypeKind;

	/**
	 * Extensions for type
	 */
	_type?: IElement;

	/**
	 * Optional subject identifying the individual or individuals the report is for.
	 */
	subject?: IReference;

	/**
	 * The date this measure report was generated.
	 */
	date?: string;

	/**
	 * Extensions for date
	 */
	_date?: IElement;

	/**
	 * The individual, location, or organization that is reporting the data.
	 */
	reporter?: IReference;

	/**
	 * Whether improvement in the measure is noted by an increase or decrease in the measure score.
	 */
	improvementNotation?: ICodeableConcept;

	/**
	 * The results of the calculation, one for each population group in the measure.
	 */
	group?: IMeasureReport_Group[];

	/**
	 * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
	 */
	evaluatedResource?: IReference[];
}

export const RTTI_MeasureReport: t.Type<IMeasureReport> = t.recursion(
	'IMeasureReport',
	() =>
		t.intersection([
			t.type({
				resourceType: t.literal('MeasureReport'),
				measure: RTTI_canonical,
				period: RTTI_Period
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
				status: createEnumType<MeasureReportStatusKind>(
					MeasureReportStatusKind,
					'MeasureReportStatusKind'
				),
				_status: RTTI_Element,
				type: createEnumType<MeasureReportTypeKind>(
					MeasureReportTypeKind,
					'MeasureReportTypeKind'
				),
				_type: RTTI_Element,
				subject: RTTI_Reference,
				date: RTTI_dateTime,
				_date: RTTI_Element,
				reporter: RTTI_Reference,
				improvementNotation: RTTI_CodeableConcept,
				group: t.array(RTTI_MeasureReport_Group),
				evaluatedResource: t.array(RTTI_Reference)
			})
		])
);
