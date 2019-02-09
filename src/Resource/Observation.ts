
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Instant } from '../Scalar/Instant';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Observation_Component } from '../Resource/Observation_Component';
import { Observation_ReferenceRange } from '../Resource/Observation_ReferenceRange';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Ratio } from '../Resource/Ratio';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { SampledData } from '../Resource/SampledData';
import { Timing } from '../Resource/Timing';
import { Uri } from '../Scalar/Uri';

        export enum ObservationStatusKind {
                registered,
preliminary,
final,
amended,
corrected,
cancelled,
enteredInError,
unknown
            }

        /**
         * Measurements and simple assertions made about a patient, device or other subject. 
         */
        export class Observation  {

            constructor() {
                this.code = new CodeableConcept();
            }

            
                /**
                 * This is a Observation resource
                 */
                resourceType: string = 'Observation;'
                

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
                 * A unique identifier assigned to this observation.
                 */
                identifier? : Identifier[];
                

                /**
                 * A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
                 */
                basedOn? : Reference[];
                

                /**
                 * A larger event of which this particular Observation is a component or step.  For example,  an observation as part of a procedure.
                 */
                partOf? : Reference[];
                

                /**
                 * The status of the result value.
                 */
                status? : ObservationStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A code that classifies the general type of observation being made.
                 */
                category? : CodeableConcept[];
                

                /**
                 * Describes what was observed. Sometimes this is called the observation "name".
                 */
                code : CodeableConcept;
                

                /**
                 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
                 */
                subject? : Reference;
                

                /**
                 * The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record.  The focus of an observation could also be an existing condition,  an intervention, the subject's diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus.
                 */
                focus? : Reference[];
                

                /**
                 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
                 */
                encounter? : Reference;
                

                /**
                 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
                 */
                effectiveDateTime? : string;
                

                /**
                 * Extensions for effectiveDateTime
                 */
                _effectiveDateTime? : Element;
                

                /**
                 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
                 */
                effectivePeriod? : Period;
                

                /**
                 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
                 */
                effectiveTiming? : Timing;
                

                /**
                 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
                 */
                effectiveInstant? : string;
                

                /**
                 * Extensions for effectiveInstant
                 */
                _effectiveInstant? : Element;
                

                /**
                 * The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified.
                 */
                issued? : Instant;
                

                /**
                 * Extensions for issued
                 */
                _issued? : Element;
                

                /**
                 * Who was responsible for asserting the observed value as "true".
                 */
                performer? : Reference[];
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueQuantity? : Quantity;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueCodeableConcept? : CodeableConcept;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueString? : string;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueBoolean? : boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueInteger? : number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueRange? : Range;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueRatio? : Ratio;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueSampledData? : SampledData;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueTime? : string;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valueDateTime? : string;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * The information determined as a result of making the observation, if the information has a simple value.
                 */
                valuePeriod? : Period;
                

                /**
                 * Provides a reason why the expected value in the element Observation.value[x] is missing.
                 */
                dataAbsentReason? : CodeableConcept;
                

                /**
                 * A categorical assessment of an observation value.  For example, high, low, normal.
                 */
                interpretation? : CodeableConcept[];
                

                /**
                 * Comments about the test result value may include statements about significant, unexpected or unreliable results values, or information about the its source when this is relevant to its interpretation.
                 */
                comment? : string;
                

                /**
                 * Extensions for comment
                 */
                _comment? : Element;
                

                /**
                 * Indicates the site on the subject's body where the observation was made (i.e. the target site).
                 */
                bodySite? : CodeableConcept;
                

                /**
                 * Indicates the mechanism used to perform the observation.
                 */
                method? : CodeableConcept;
                

                /**
                 * The specimen that was used when this observation was made.
                 */
                specimen? : Reference;
                

                /**
                 * The device used to generate the observation data.
                 */
                device? : Reference;
                

                /**
                 * Guidance on how to interpret the value by comparison to a normal or recommended range.
                 */
                referenceRange? : Observation_ReferenceRange[];
                

                /**
                 * This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
                 */
                hasMember? : Reference[];
                

                /**
                 * The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.
                 */
                derivedFrom? : Reference[];
                

                /**
                 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
                 */
                component? : Observation_Component[];
                
        }
        