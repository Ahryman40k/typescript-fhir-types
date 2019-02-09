
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { MeasureReport_Group } from '../Resource/MeasureReport_Group';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum MeasureReportStatusKind {
                complete,
pending,
error
            }
export enum MeasureReportTypeKind {
                individual,
subjectList,
summary,
dataCollection
            }

        /**
         * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. 
         */
        export class MeasureReport  {

            constructor() {
                this.measure = new Canonical();
this.period = new Period();
            }

            
                /**
                 * This is a MeasureReport resource
                 */
                resourceType: string = 'MeasureReport;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance.
                 */
                identifier? : Identifier[];
                

                /**
                 * The MeasureReport status. No data will be available until the MeasureReport status is complete.
                 */
                status? : MeasureReportStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.
                 */
                type? : MeasureReportTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * A reference to the Measure that was calculated to produce this report.
                 */
                measure : Canonical;
                

                /**
                 * Optional subject identifying the individual or individuals the report is for.
                 */
                subject? : Reference;
                

                /**
                 * The date this measure report was generated.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The individual, location, or organization that is reporting the data.
                 */
                reporter? : Reference;
                

                /**
                 * The reporting period for which the report was calculated.
                 */
                period : Period;
                

                /**
                 * Whether improvement in the measure is noted by an increase or decrease in the measure score.
                 */
                improvementNotation? : Code;
                

                /**
                 * Extensions for improvementNotation
                 */
                _improvementNotation? : Element;
                

                /**
                 * The results of the calculation, one for each population group in the measure.
                 */
                group? : MeasureReport_Group[];
                

                /**
                 * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
                 */
                evaluatedResource? : Reference[];
                
        }
        