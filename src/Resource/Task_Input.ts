
        import { Address } from '../Resource/Address';
import { Age } from '../Resource/Age';
import { Annotation } from '../Resource/Annotation';
import { Attachment } from '../Resource/Attachment';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { ContactDetail } from '../Resource/ContactDetail';
import { ContactPoint } from '../Resource/ContactPoint';
import { Contributor } from '../Resource/Contributor';
import { Count } from '../Resource/Count';
import { DataRequirement } from '../Resource/DataRequirement';
import { Distance } from '../Resource/Distance';
import { Dosage } from '../Resource/Dosage';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Expression } from '../Resource/Expression';
import { Extension } from '../Resource/Extension';
import { HumanName } from '../Resource/HumanName';
import { Identifier } from '../Resource/Identifier';
import { Money } from '../Resource/Money';
import { ParameterDefinition } from '../Resource/ParameterDefinition';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Ratio } from '../Resource/Ratio';
import { Reference } from '../Resource/Reference';
import { RelatedArtifact } from '../Resource/RelatedArtifact';
import { SampledData } from '../Resource/SampledData';
import { Signature } from '../Resource/Signature';
import { Timing } from '../Resource/Timing';
import { TriggerDefinition } from '../Resource/TriggerDefinition';
import { UsageContext } from '../Resource/UsageContext';

        

        /**
         * A task to be performed. 
         */
        export class Task_Input  {

            constructor() {
                this.type = new CodeableConcept();
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * A code or description indicating how the input is intended to be used as part of the task execution.
                 */
                type : CodeableConcept;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueBase64Binary? : string;
                

                /**
                 * Extensions for valueBase64Binary
                 */
                _valueBase64Binary? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueBoolean? : boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueCanonical? : string;
                

                /**
                 * Extensions for valueCanonical
                 */
                _valueCanonical? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueCode? : string;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueDate? : string;
                

                /**
                 * Extensions for valueDate
                 */
                _valueDate? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueDateTime? : string;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueDecimal? : number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueId? : string;
                

                /**
                 * Extensions for valueId
                 */
                _valueId? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueInstant? : string;
                

                /**
                 * Extensions for valueInstant
                 */
                _valueInstant? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueInteger? : number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueMarkdown? : string;
                

                /**
                 * Extensions for valueMarkdown
                 */
                _valueMarkdown? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueOid? : string;
                

                /**
                 * Extensions for valueOid
                 */
                _valueOid? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valuePositiveInt? : number;
                

                /**
                 * Extensions for valuePositiveInt
                 */
                _valuePositiveInt? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueString? : string;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueTime? : string;
                

                /**
                 * Extensions for valueTime
                 */
                _valueTime? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueUnsignedInt? : number;
                

                /**
                 * Extensions for valueUnsignedInt
                 */
                _valueUnsignedInt? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueUri? : string;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueUrl? : string;
                

                /**
                 * Extensions for valueUrl
                 */
                _valueUrl? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueUuid? : string;
                

                /**
                 * Extensions for valueUuid
                 */
                _valueUuid? : Element;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueAddress? : Address;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueAge? : Age;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueAnnotation? : Annotation;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueAttachment? : Attachment;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueCodeableConcept? : CodeableConcept;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueCoding? : Coding;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueContactPoint? : ContactPoint;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueCount? : Count;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueDistance? : Distance;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueDuration? : Duration;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueHumanName? : HumanName;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueIdentifier? : Identifier;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueMoney? : Money;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valuePeriod? : Period;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueQuantity? : Quantity;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueRange? : Range;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueRatio? : Ratio;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueReference? : Reference;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueSampledData? : SampledData;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueSignature? : Signature;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueTiming? : Timing;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueParameterDefinition? : ParameterDefinition;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueDataRequirement? : DataRequirement;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueContactDetail? : ContactDetail;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueContributor? : Contributor;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueExpression? : Expression;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueUsageContext? : UsageContext;
                

                /**
                 * The value of the input parameter as a basic type.
                 */
                valueDosage? : Dosage;
                
        }
        